import { useEffect, useCallback } from "react";
import "./ParticlesBackground.css";

function ParticlesBackground() {

    const initParticles = useCallback(() => {

        const oldCanvas =
            document.querySelector("#particles-js canvas");

        if (oldCanvas) {
            oldCanvas.remove();
        }

        if (window.pJSDom?.length > 0) {
            window.pJSDom.forEach((p) =>
                p.pJS.fn.vendors.destroypJS()
            );

            window.pJSDom = [];
        }

        window.particlesJS("particles-js", {

            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },

                color: {
                    value: "#EED3BA"
                },

                shape: {
                    type: "circle"
                },

                opacity: {
                    value: 0.45,
                    random: true
                },

                size: {
                    value: 2.5,
                    random: true
                },

                line_linked: {
                    enable: true,
                    distance: 150,

                    color: "#EED3BA",

                    opacity: 0.18,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 1.2,
                    random: true,
                    out_mode: "bounce"
                }
            },

            interactivity: {
                detect_on: "window",

                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },

                    onclick: {
                        enable: true,
                        mode: "push"
                    },

                    resize: true
                },

                modes: {
                    grab: {
                        distance: 180,

                        line_linked: {
                            opacity: 0.6
                        }
                    },

                    push: {
                        particles_nb: 3
                    }
                }
            },

            retina_detect: true
        });

    }, []);


    useEffect(() => {

        const script =
            document.createElement("script");

        script.src =
            "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";

        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {
            initParticles();
        };

        return () => {

            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }

            const canvas =
                document.querySelector("#particles-js canvas");

            if (canvas) {
                canvas.remove();
            }
        };

    }, [initParticles]);


    return (
        <div id="particles-js"></div>
    );
}

export default ParticlesBackground;