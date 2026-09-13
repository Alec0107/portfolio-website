import { useEffect, useRef, useCallback } from "react";
import "./KineticGrid.css";

const CELL_SIZE = 55;
const INFLUENCE_RADIUS = 260;
const MAX_WARP = 24;
const DOT_SPACING = 28;
const LERP_SPEED = 0.08;

const LINE_BASE = { r: 255, g: 255, b: 255, a: 0.13 };
const NODE_BASE_RADIUS = 1.8;
const NODE_ACTIVE_RADIUS = 3.2;

function lerpN(a, b, t) {
    return a + (b - a) * t;
}

function lerpColor(base, active, t) {
    const r = Math.round(lerpN(base.r, active.r, t));
    const g = Math.round(lerpN(base.g, active.g, t));
    const b = Math.round(lerpN(base.b, active.b, t));
    const a = lerpN(base.a, active.a, t);

    return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

function KineticGrid({ children }) {

    const canvasRef = useRef(null);

    const mouseRef = useRef({ x: -9999, y: -9999 });
    const targetMouseRef = useRef({ x: -9999, y: -9999 });

    const ripplesRef = useRef([]);
    const rafRef = useRef(0);

    const sizeRef = useRef({
        w: 0,
        h: 0
    });

    const getWarpedPoint = useCallback(
        (gx, gy, col, row, mouse, ripples, cols, rows) => {

            const edgeMargin = 1.5;

            const colPin = Math.min(
                col / edgeMargin,
                (cols - 1 - col) / edgeMargin,
                1
            );

            const rowPin = Math.min(
                row / edgeMargin,
                (rows - 1 - row) / edgeMargin,
                1
            );

            const pinFactor =
                colPin * colPin * rowPin * rowPin;

            const dx = gx - mouse.x;
            const dy = gy - mouse.y;

            const dist = Math.sqrt(dx * dx + dy * dy);

            const proximity =
                Math.max(
                    0,
                    1 - dist / INFLUENCE_RADIUS
                ) * pinFactor;

            let rx = 0;
            let ry = 0;

            for (const r of ripples) {

                const rdx = gx - r.x;
                const rdy = gy - r.y;

                const rdist =
                    Math.sqrt(rdx * rdx + rdy * rdy);

                const waveWidth = 55;
                const diff = rdist - r.radius;

                if (Math.abs(diff) < waveWidth) {

                    const strength =
                        (1 - Math.abs(diff) / waveWidth)
                        * r.opacity
                        * 18
                        * pinFactor;

                    const angle =
                        Math.atan2(rdy, rdx);

                    const sign =
                        diff < 0 ? -1 : 1;

                    rx +=
                        Math.cos(angle)
                        * strength
                        * sign
                        * -1;

                    ry +=
                        Math.sin(angle)
                        * strength
                        * sign
                        * -1;
                }
            }

            if (
                dist < INFLUENCE_RADIUS &&
                dist > 0 &&
                pinFactor > 0
            ) {

                const t =
                    dist / INFLUENCE_RADIUS;

                const eased =
                    t < 0.01
                        ? 0
                        : (1 - t) *
                          (1 - t) *
                          Math.min(1, dist / 60);

                const warpAmt =
                    eased * MAX_WARP * pinFactor;

                const angle =
                    Math.atan2(dy, dx);

                return {
                    pt: {
                        x:
                            gx -
                            Math.cos(angle) *
                            warpAmt +
                            rx,

                        y:
                            gy -
                            Math.sin(angle) *
                            warpAmt +
                            ry
                    },

                    proximity
                };
            }

            return {
                pt: {
                    x: gx + rx,
                    y: gy + ry
                },

                proximity
            };
        },
        []
    );

    const draw = useCallback((now) => {

        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx =
            canvas.getContext("2d");

        if (!ctx) return;

        const { w: W, h: H } =
            sizeRef.current;

        const mouse =
            mouseRef.current;

        const ripples =
            ripplesRef.current;

        const theme = {
            bg: "#151311",

            lineActive: {
                r: 238,
                g: 211,
                b: 186,
                a: 0.9
            },

            nodeActive: {
                r: 238,
                g: 211,
                b: 186,
                a: 1
            },

            glow: "238,211,186",

            ripple:
                "238,211,186"
        };

        ctx.clearRect(0, 0, W, H);

        ctx.fillStyle = theme.bg;
        ctx.fillRect(0, 0, W, H);

        ctx.fillStyle =
            "rgba(255,255,255,0.05)";

        for (
            let x = DOT_SPACING / 2;
            x < W;
            x += DOT_SPACING
        ) {

            for (
                let y = DOT_SPACING / 2;
                y < H;
                y += DOT_SPACING
            ) {

                ctx.beginPath();

                ctx.arc(
                    x,
                    y,
                    0.7,
                    0,
                    Math.PI * 2
                );

                ctx.fill();
            }
        }

        for (
            let i = ripples.length - 1;
            i >= 0;
            i--
        ) {

            const r = ripples[i];

            const age =
                (now - r.born) / 1000;

            r.radius =
                Math.max(
                    0,
                    age * 400
                );

            r.opacity =
                Math.max(
                    0,
                    1 - age * 1.2
                );

            if (r.opacity <= 0) {
                ripples.splice(i, 1);
            }
        }

        const cols =
            Math.max(
                2,
                Math.ceil(W / CELL_SIZE)
            ) + 1;

        const rows =
            Math.max(
                2,
                Math.ceil(H / CELL_SIZE)
            ) + 1;

        const cellW =
            W / (cols - 1);

        const cellH =
            H / (rows - 1);

        const pts = [];
        const prox = [];

        for (
            let row = 0;
            row < rows;
            row++
        ) {

            pts[row] = [];
            prox[row] = [];

            for (
                let col = 0;
                col < cols;
                col++
            ) {

                const {
                    pt,
                    proximity
                } = getWarpedPoint(
                    col * cellW,
                    row * cellH,
                    col,
                    row,
                    mouse,
                    ripples,
                    cols,
                    rows
                );

                pts[row][col] = pt;
                prox[row][col] =
                    proximity;
            }
        }

        const drawSeg = (
            p1,
            p2,
            pr1,
            pr2
        ) => {

            const avg =
                (pr1 + pr2) / 2;

            const t =
                avg *
                avg *
                (3 - 2 * avg);

            ctx.beginPath();

            ctx.moveTo(
                p1.x,
                p1.y
            );

            ctx.lineTo(
                p2.x,
                p2.y
            );

            ctx.strokeStyle =
                lerpColor(
                    LINE_BASE,
                    theme.lineActive,
                    t
                );

            ctx.lineWidth =
                lerpN(
                    0.8,
                    1.5,
                    t
                );

            ctx.stroke();
        };

        for (
            let row = 0;
            row < rows;
            row++
        ) {

            for (
                let col = 0;
                col < cols - 1;
                col++
            ) {

                drawSeg(
                    pts[row][col],
                    pts[row][col + 1],
                    prox[row][col],
                    prox[row][col + 1]
                );
            }
        }

        for (
            let col = 0;
            col < cols;
            col++
        ) {

            for (
                let row = 0;
                row < rows - 1;
                row++
            ) {

                drawSeg(
                    pts[row][col],
                    pts[row + 1][col],
                    prox[row][col],
                    prox[row + 1][col]
                );
            }
        }

        for (
            let row = 0;
            row < rows;
            row++
        ) {

            for (
                let col = 0;
                col < cols;
                col++
            ) {

                const p =
                    pts[row][col];

                const pr =
                    prox[row][col];

                const t =
                    pr *
                    pr *
                    (3 - 2 * pr);

                const r =
                    lerpN(
                        NODE_BASE_RADIUS,
                        NODE_ACTIVE_RADIUS,
                        t
                    );

                ctx.beginPath();

                ctx.arc(
                    p.x,
                    p.y,
                    r,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    lerpColor(
                        {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 0.2
                        },
                        theme.nodeActive,
                        t
                    );

                ctx.fill();
            }
        }

    }, [getWarpedPoint]);

    const animate =
        useCallback(
            (now) => {

                const m =
                    mouseRef.current;

                const t =
                    targetMouseRef.current;

                m.x =
                    lerpN(
                        m.x,
                        t.x,
                        LERP_SPEED
                    );

                m.y =
                    lerpN(
                        m.y,
                        t.y,
                        LERP_SPEED
                    );

                draw(now);

                rafRef.current =
                    requestAnimationFrame(
                        animate
                    );
            },
            [draw]
        );

    useEffect(() => {

        const canvas =
            canvasRef.current;

        if (!canvas) return;

        const setSize = () => {

            const parent =
                canvas.parentElement;

            if (!parent) return;

            const rect =
                parent.getBoundingClientRect();

            canvas.width =
                rect.width;

            canvas.height =
                rect.height;

            sizeRef.current = {
                w: rect.width,
                h: rect.height
            };
        };

        setSize();

        window.addEventListener(
            "resize",
            setSize
        );

        const onMouseMove = (e) => {

            const rect =
                canvas.getBoundingClientRect();

            targetMouseRef.current = {
                x:
                    e.clientX -
                    rect.left,

                y:
                    e.clientY -
                    rect.top
            };
        };

        const onClick = (e) => {

            const rect =
                canvas.getBoundingClientRect();

            ripplesRef.current.push({
                x:
                    e.clientX -
                    rect.left,

                y:
                    e.clientY -
                    rect.top,

                radius: 0,
                opacity: 1,
                born:
                    performance.now()
            });
        };

        window.addEventListener(
            "mousemove",
            onMouseMove
        );

        window.addEventListener(
            "click",
            onClick
        );

        rafRef.current =
            requestAnimationFrame(
                animate
            );

        return () => {

            window.removeEventListener(
                "resize",
                setSize
            );

            window.removeEventListener(
                "mousemove",
                onMouseMove
            );

            window.removeEventListener(
                "click",
                onClick
            );

            cancelAnimationFrame(
                rafRef.current
            );
        };

    }, [animate]);

    return (
        <div className="kineticGrid">
            <canvas
                ref={canvasRef}
                className="kineticCanvas"
            />

            <div className="kineticContent">
                {children}
            </div>
        </div>
    );
}

export default KineticGrid;