import "../LandingPage/Homepage.css";
import "../LandingPage/AboutSection.css";
import "../LandingPage/ProjectsSection.css";

import {
    siSpringboot,
    siSpringsecurity,
    siJavascript,
    siReact,
    siVite,
    siHtml5,
    siCss,
    siPostgresql,
    siAnthropic,
    siGooglegemini,
    siN8n,
    siNetlify,
    siRailway
} from "simple-icons";

import { useState } from "react";
import { createPortal } from "react-dom";

import ProjectModal from "./ProjectModal";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import ParticlesBackground from "./ParticlesBackground";

import profilePhoto from "../assets/profile.jpg";
import imperial from "../assets/imperial.png";
import customerSupport from "../assets/customerSupport.png";
import aiEmail from "../assets/n8n1.png";
import calendarManagement from "../assets/calendarManagement.png";
const PROJECT_GROUPS = [
    {
        id: "development",
        number: "01",
        title: "SOFTWARE DEVELOPMENT",
        shortTitle: "SOFTWARE DEVELOPMENT",
        description:
            "Web applications, websites, and practical digital solutions."
    },
    {
        id: "automation",
        number: "02",
        title: "AI AUTOMATION & DIGITAL OPERATIONS",
        shortTitle: "AI & DIGITAL OPERATIONS",
        description:
            "AI-assisted workflows, business analytics, and process improvement."
    },
    {
        id: "va",
        number: "03",
        title: "VIRTUAL ASSISTANT & ADMIN SUPPORT",
        shortTitle: "VA & ADMIN SUPPORT",
        description:
            "Practical demonstrations of scheduling, inbox organization, and administrative support."
    }
];

function Homepage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

    const projects = [
        {
            number: "01",
            group: "development",
            category: "CLIENT PROJECT",
            name: "IMPERIAL GRAND",
            image: imperial,
            status: "REAL CLIENT WORK",
            description:
                "Developed a full-stack website for a restaurant client, featuring a digital menu and online reservation functionality. Also supported website content updates and digital promotional materials to help maintain the business's online presence.",
            technologies: [
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "JAVA",
                "SPRING BOOT",
                "POSTGRESQL"
            ],
            liveUrl: null,
            githubUrl: null
        },
        {
            number: "02",
            group: "development",
            category: "FULL-STACK APPLICATION",
            name: "CUSTOMER SUPPORT AI",
            image: customerSupport,
            status: "PERSONAL PROJECT",
            description:
                "Built a full-stack AI customer-support application that connects an interactive frontend to a backend service. The application retrieves relevant customer, order, and delivery information and provides contextual responses, with a human-support fallback when additional assistance is needed.",
            technologies: [
                "REACT",
                "JAVASCRIPT",
                "SPRING BOOT",
                "POSTGRESQL",
                "GEMINI",
                "CLAUDE"
            ],
            liveUrl: null,
            githubUrl: null
        },
        {
            number: "03",
            group: "automation",
            category: "WORKFLOW AUTOMATION",
            name: "AI EMAIL AUTOMATION",
            image: aiEmail,
            status: "PERSONAL PROJECT",
            description:
                "Designed an n8n workflow to classify incoming emails, generate summaries, identify suggested next actions, and prepare email drafts. It can check calendar availability and support calendar-related actions while keeping email sending under human control.",
            technologies: [
                "N8N",
                "OPENAI",
                "GMAIL",
                "GOOGLE CALENDAR"
            ],
            liveUrl: null,
            githubUrl: null
        },
        {
            number: "04",
            group: "automation",
            category: "BUSINESS ANALYTICS",
            name: "WHATSAPP BUSINESS ANALYTICS",
            image: null,
            status: "PERSONAL PROJECT",
            description:
                "Built an n8n-powered workflow that allows business users to request sales insights through WhatsApp. It analyzes historical sales data to explore business performance, identify trends, generate forecasts, and provide reports and visual insights.",
            technologies: [
                "N8N",
                "WHATSAPP",
                "SALES ANALYTICS",
                "AI AUTOMATION"
            ],
            liveUrl: null,
            githubUrl: null
        },
        {
            number: "05",
            group: "va",
            category: "SCHEDULING & COORDINATION",
            name: "CALENDAR MANAGEMENT",
            image: calendarManagement,
            status: "PORTFOLIO DEMO",
            description:
                "A fictional small-business calendar demonstration showing how appointments, meetings, deadlines, and daily priorities can be organized into a clear schedule. Designed to demonstrate scheduling and administrative organization rather than claim previous client experience.",
            technologies: [
                "GOOGLE CALENDAR",
                "APPOINTMENT SCHEDULING",
                "TIME MANAGEMENT"
            ],
            liveUrl: null,
            githubUrl: null
        },
        {
            number: "06",
            group: "va",
            category: "EMAIL & INBOX ORGANIZATION",
            name: "INBOX MANAGEMENT",
            image: null,
            status: "PLANNED DEMO",
            description:
                "A planned fictional business scenario demonstrating how emails can be categorized by priority, summarized, organized for follow-up, and prepared for professional responses.",
            technologies: [
                "EMAIL MANAGEMENT",
                "EMAIL PRIORITIZATION",
                "FOLLOW-UP TRACKING"
            ],
            liveUrl: null,
            githubUrl: null
        },
        {
            number: "07",
            group: "va",
            category: "ADMINISTRATION & SPREADSHEETS",
            name: "ADMIN TASK TRACKER",
            image: null,
            status: "PLANNED DEMO",
            description:
                "A planned spreadsheet demonstration for organizing tasks, deadlines, priorities, progress updates, and outstanding follow-ups in one structured tracker.",
            technologies: [
                "GOOGLE SHEETS",
                "DATA ORGANIZATION",
                "TASK TRACKING"
            ],
            liveUrl: null,
            githubUrl: null
        }
    ];

    const skills = [
        // ADMINISTRATIVE & BUSINESS SUPPORT
        { name: "ADMIN SUPPORT", icon: null },
        { name: "EMAIL MANAGEMENT", icon: null },
        { name: "CALENDAR SCHEDULING", icon: null },
        { name: "DATA ENTRY", icon: null },
        { name: "ONLINE RESEARCH", icon: null },
        { name: "DOCUMENTATION", icon: null },
        { name: "TASK COORDINATION", icon: null },
        { name: "CUSTOMER SUPPORT", icon: null },
        { name: "GOOGLE WORKSPACE", icon: null },
        { name: "MICROSOFT OFFICE", icon: null },

        // AI & AUTOMATION
        { name: "N8N", icon: siN8n },
        { name: "OPENAI", icon: null },
        { name: "CLAUDE", icon: siAnthropic },
        { name: "GEMINI", icon: siGooglegemini },
        { name: "AI WORKFLOWS", icon: null },
        { name: "BUSINESS ANALYTICS", icon: null },

        // SOFTWARE DEVELOPMENT
        { name: "SPRING BOOT", icon: siSpringboot },
        { name: "SPRING SECURITY", icon: siSpringsecurity },
        { name: "JAVASCRIPT", icon: siJavascript },
        { name: "REACT", icon: siReact },
        { name: "VITE", icon: siVite },
        { name: "HTML", icon: siHtml5 },
        { name: "CSS", icon: siCss },
        { name: "POSTGRESQL", icon: siPostgresql },

        // DEPLOYMENT & TOOLS
        { name: "NETLIFY", icon: siNetlify },
        { name: "RAILWAY", icon: siRailway }
    ];

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileProjectsOpen(false);
    };

    return (
        <div className="homePage">
            <ParticlesBackground />

            {/* NAVIGATION */}
            <nav className="navBar" aria-label="Main navigation">
                <div className="logo">
                    <a
                        href="#home"
                        className="logoLink"
                        onClick={closeMobileMenu}
                        aria-label="Go to homepage"
                    >
                        <span className="logoMark">
                            <span className="logoM">M</span>
                            <span className="logoN">N</span>
                        </span>
                    </a>
                </div>

                <div className="navLinks">
                    <a href="#about">ABOUT</a>
                    <a href="#skills">SKILLS</a>

                    <div className="navDropdown">
                        <a
                            href="#projects"
                            className="navDropdownTrigger"
                            aria-haspopup="true"
                        >
                            PROJECTS
                            <span className="dropdownArrow">⌄</span>
                        </a>

                        <div className="navDropdownMenu">
                            {PROJECT_GROUPS.map((group) => (
                                <a
                                    key={group.id}
                                    href={`#group-${group.id}`}
                                    className="navDropdownItem"
                                >
                                    <span className="dropdownNumber">
                                        {group.number}
                                    </span>

                                    <span className="dropdownItemText">
                                        {group.shortTitle}
                                    </span>

                                    <span className="dropdownItemArrow">
                                        ↗
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <a href="#contact">CONTACT</a>

                    <a
                        href="/Mel-Rich-Nicholas-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cvLink"
                    >
                        VIEW CV <span>↗</span>
                    </a>
                </div>

                <a
                    href="mailto:melrich.npl@gmail.com?subject=Portfolio%20Inquiry"
                    className="connectButton"
                >
                    LET'S CONNECT →
                </a>

                <button
                    type="button"
                    className={`mobileMenuButton ${mobileMenuOpen ? "open" : ""}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobileNavigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* MOBILE NAVIGATION */}
            <div
                className={`mobileMenu ${mobileMenuOpen ? "open" : ""}`}
                id="mobileNavigation"
                aria-hidden={!mobileMenuOpen}
            >
                <div className="mobileMenuLinks">
                    <a href="#about" onClick={closeMobileMenu}>
                        ABOUT
                    </a>

                    <a href="#skills" onClick={closeMobileMenu}>
                        SKILLS
                    </a>

                    <div className="mobileProjectsDropdown">
                        <button
                            type="button"
                            className="mobileProjectsToggle"
                            onClick={() =>
                                setMobileProjectsOpen(!mobileProjectsOpen)
                            }
                            aria-expanded={mobileProjectsOpen}
                        >
                            <span>PROJECTS</span>

                            <span
                                className={`mobileDropdownArrow ${
                                    mobileProjectsOpen ? "open" : ""
                                }`}
                            >
                                ⌄
                            </span>
                        </button>

                        <div
                            className={`mobileProjectsSubmenu ${
                                mobileProjectsOpen ? "open" : ""
                            }`}
                        >
                            {PROJECT_GROUPS.map((group) => (
                                <a
                                    key={group.id}
                                    href={`#group-${group.id}`}
                                    onClick={closeMobileMenu}
                                    className="mobileProjectLink"
                                >
                                    <span>{group.number}</span>
                                    {group.shortTitle}
                                    <span className="mobileProjectArrow">
                                        ↗
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <a href="#contact" onClick={closeMobileMenu}>
                        CONTACT
                    </a>

                    <a
                        href="/Mel-Rich-Nicholas-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobileCVLink"
                        onClick={closeMobileMenu}
                    >
                        VIEW CV <span>↗</span>
                    </a>

                    <a
                        href="mailto:melrich.npl@gmail.com?subject=Portfolio%20Inquiry"
                        className="mobileConnectButton"
                        onClick={closeMobileMenu}
                    >
                        LET'S CONNECT →
                    </a>
                </div>
            </div>

            {/* HERO */}
            <section className="heroSection" id="home">
                <div className="heroLeft">
                    <div className="leftContent">
                        <p className="introText">HI, I'M</p>

                        <h1 className="heroName">
                            MEL RICH
                            <br />
                            NICHOLAS
                        </h1>

                        <p className="roleText">
                            SOFTWARE DEVELOPMENT
                            <br />
                            ADMINISTRATIVE SUPPORT
                            <br />
                            AI AUTOMATION & DIGITAL OPERATIONS
                        </p>

                        <p className="heroDescription">
                            I'm a Computer Science graduate with experience
                            building digital solutions and supporting business
                            needs. My background combines web development,
                            administrative organization, customer support,
                            and AI-powered workflow automation. I bring
                            technical problem-solving and a practical,
                            detail-oriented approach to helping teams work
                            more efficiently.
                        </p>

                        <div className="heroButtons">
                            <a className="primaryButton" href="#projects">
                                EXPLORE MY WORK →
                            </a>

                            <a className="secondaryButton" href="#about">
                                ABOUT ME
                            </a>
                        </div>
                    </div>
                </div>

                <div className="heroRight">
                    <div className="terminalCard">
                        <div className="terminalHeader">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="terminalContent">
                            <p>const professional = {"{"}</p>
                            <p className="codeIndent">
                                name: 'Mel Rich Nicholas',
                            </p>
                            <p className="codeIndent">
                                background: 'Computer Science',
                            </p>
                            <p className="codeIndent">
                                development: 'Web Applications',
                            </p>
                            <p className="codeIndent">
                                operations: 'Admin & Business Support',
                            </p>
                            <p className="codeIndent">
                                automation: 'AI & n8n Workflows'
                            </p>
                            <p>{"};"}</p>
                        </div>
                    </div>
                </div>

                <div className="heroSkills">
                    <div className="heroSkillsHeader">
                        <p>SKILLS & TOOLS</p>
                    </div>

                    <div className="skillsMarquee">
                        <div className="skillsTrack">
                            {[...skills, ...skills].map((skill, index) => (
                                <div
                                    className="skillItem"
                                    key={`${skill.name}-${index}`}
                                >
                                    {skill.icon ? (
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d={skill.icon.path}
                                                fill="currentColor"
                                            />
                                        </svg>
                                    ) : (
                                        <span
                                            className="skillTextIcon"
                                            aria-hidden="true"
                                        >
                                            ◇
                                        </span>
                                    )}

                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="aboutSection" id="about">
                <div className="aboutLeft">
                    <p className="aboutLabel">ABOUT ME</p>

                    <h2 className="aboutTitle">
                        Technology,
                        <br />
                        organization &
                        <br />
                        problem-solving.
                    </h2>

                    <p className="aboutText">
                        I'm Mel Rich Nicholas, a Computer Science graduate based
                        in Davao City, Philippines. I completed my BSc (Hons)
                        in Computer Science from the University of East London
                        through LSBF Singapore, following my earlier studies
                        in Information Technology at Kaplan Singapore. My
                        background combines software development, digital
                        business support, and AI-assisted workflow automation.
                    </p>

                    <p className="aboutText">
                        My experience includes freelance web application
                        development and digital marketing support for Imperial
                        Grand Cantonese Cuisine in Singapore. I developed a
                        business website featuring a digital menu and online
                        reservations, and supported website content updates
                        and digital promotional materials.
                    </p>

                    <p className="aboutText">
                        I have also built projects involving AI-powered customer
                        support, automated email workflows, and WhatsApp-based
                        business analytics using n8n. Alongside my technical
                        work, my skills include administrative support,
                        information management, documentation, online research,
                        customer communication, and task coordination. I bring
                        a combination of technical knowledge, attention to
                        detail, and a practical approach to solving problems
                        and supporting business operations.
                    </p>
                </div>

                <div className="aboutPhoto">
                    <div className="photoPlaceholder">
                        <img
                            className="profilePhoto"
                            src={profilePhoto}
                            alt="Mel Rich Nicholas"
                        />
                    </div>
                </div>

                <div className="aboutRight">
                    <div className="aboutInfo">
                        <span className="infoIcon">◯</span>

                        <div>
                            <p className="infoLabel">NAME</p>
                            <p className="infoValue">Mel Rich Nicholas</p>
                        </div>
                    </div>

                    <div className="aboutInfo">
                        <span className="infoIcon">&lt;/&gt;</span>

                        <div>
                            <p className="infoLabel">PROFESSIONAL FOCUS</p>
                            <p className="infoValue">
                                Development, Admin & Digital Operations
                            </p>
                        </div>
                    </div>

                    <div className="aboutInfo">
                        <span className="infoIcon">⌖</span>

                        <div>
                            <p className="infoLabel">LOCATION</p>
                            <p className="infoValue">
                                Davao City, Philippines
                            </p>
                        </div>
                    </div>

                    <div className="aboutInfo">
                        <span className="infoIcon">◇</span>

                        <div>
                            <p className="infoLabel">EDUCATION</p>
                            <p className="infoValue">
                                BSc (Hons) Computer Science
                                <br />
                                University of East London
                                <br />
                                LSBF Singapore
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            {/* SkillsSection.jsx already contains id="skills". */}
            <SkillsSection />

            {/* PROJECTS */}
            <section className="projectsSection" id="projects">
                <div className="projectsHeader">
                    <p className="projectsLabel">SELECTED WORK</p>

                    <h2 className="projectsTitle">
                        Projects &
                        <br />
                        Practical Samples.
                    </h2>
                </div>

                <div className="portfolioGroups">
                    {PROJECT_GROUPS.map((group) => {
                        const groupProjects = projects.filter(
                            (project) => project.group === group.id
                        );

                        return (
                            <section
                                className="portfolioGroup"
                                id={`group-${group.id}`}
                                key={group.id}
                            >
                                <div className="portfolioGroupHeader">
                                    <span className="portfolioGroupNumber">
                                        {group.number}
                                    </span>

                                    <div>
                                        <h3 className="portfolioGroupTitle">
                                            {group.title}
                                        </h3>

                                        <p className="portfolioGroupDescription">
                                            {group.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="portfolioGrid">
                                    {groupProjects.map((project) => (
                                        <article
                                            className="portfolioCard"
                                            key={project.number}
                                        >
                                            <div className="portfolioCardTop">
                                                <span className="portfolioCardNumber">
                                                    {project.number}
                                                </span>

                                                <span className="portfolioStatus">
                                                    {project.status}
                                                </span>
                                            </div>

                                            <div className="portfolioCardImage">
                                                {project.image ? (
                                                    <img
                                                        src={project.image}
                                                        alt={project.name}
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="portfolioPlaceholder">
                                                        <span>
                                                            {project.status ===
                                                            "PLANNED DEMO"
                                                                ? "COMING SOON"
                                                                : project.status ===
                                                                  "PORTFOLIO DEMO"
                                                                ? "PORTFOLIO SAMPLE"
                                                                : "PROJECT OVERVIEW"}
                                                        </span>

                                                        <p>{project.name}</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="portfolioCardBody">
                                                <p className="portfolioCardCategory">
                                                    {project.category}
                                                </p>

                                                <h4 className="portfolioCardTitle">
                                                    {project.name}
                                                </h4>

                                                <p className="portfolioCardDescription">
                                                    {project.description}
                                                </p>

                                                <div className="portfolioTags">
                                                    {project.technologies.map(
                                                        (technology) => (
                                                            <span key={technology}>
                                                                {technology}
                                                            </span>
                                                        )
                                                    )}
                                                </div>

                                                <button
                                                    type="button"
                                                    className="portfolioViewButton"
                                                    onClick={() =>
                                                        setSelectedProject(project)
                                                    }
                                                >
                                                    VIEW DETAILS <span>↗</span>
                                                </button>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </section>

            {/* PROJECT DETAILS MODAL */}
            {selectedProject &&
                createPortal(
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />,
                    document.body
                )}

            {/* CONTACT */}
            <div id="contact">
                <ContactSection />
            </div>
        </div>
    );
}

export default Homepage;
