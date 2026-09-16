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

import ProjectModal from "./ProjectModal";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import ParticlesBackground from "./ParticlesBackground";

import profilePhoto from "../assets/profile.png";
import imperial from "../assets/imperial.png";
import customerSupport from "../assets/customerSupport.png";
import aiEmail from "../assets/n8n1.png";


function Homepage() {

    const [selectedProject, setSelectedProject] = useState(null);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const projects = [

        {
            number: "01",

            category: "AI-POWERED APPLICATION",

            name: "CUSTOMER SUPPORT AI",

            image: customerSupport,

            description:
                "An agentic AI customer support system built for an e-commerce application, designed to help customers get information about their accounts, orders, and deliveries. The AI understands customer requests and uses tool calling to retrieve real-time information from the backend, accessing customer profiles, order details, and delivery status to provide accurate and personalized responses.",

            technologies: [
                "REACT",
                "VITE",
                "JAVASCRIPT",
                "SPRING BOOT",
                "POSTGRESQL",
                "RAILWAY",
                "NETLIFY",
                "GITHUB",
                "GEMINI"
            ],

            liveUrl: "#",

            githubUrl: "#"
        },


        {
            number: "02",

            category: "CLIENT WEBSITE",

            name: "IMPERIAL GRAND",

            image: imperial,

            description:
                "A full-stack website designed and developed for a real client, combining a polished customer-facing interface with a Java and Spring Boot backend. The project includes PostgreSQL data management and a responsive web experience built around the client's business needs.",

            technologies: [
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "JAVA",
                "SPRING BOOT",
                "POSTGRESQL",
                "RAILWAY",
                "NETLIFY",
                "GITHUB"
            ],

            liveUrl: "#",

            githubUrl: "#"
        },


        {
            number: "03",

            category: "AI AUTOMATION",

            name: "AI EMAIL AUTOMATION",

            image: aiEmail,

            description:
                "An AI-powered n8n workflow that processes incoming emails, summarizes them, determines required actions, and generates appropriate responses. The workflow can also extract interview information and create calendar events.",

            technologies: [
                "N8N",
                "OPENAI",
                "GMAIL",
                "GOOGLE CALENDAR"
            ],

            liveUrl: "#",

            githubUrl: "#"
        }

    ];


    const skills = [

        {
            name: "SPRING BOOT",
            icon: siSpringboot
        },

        {
            name: "SPRING SECURITY",
            icon: siSpringsecurity
        },

        {
            name: "JAVASCRIPT",
            icon: siJavascript
        },

        {
            name: "REACT",
            icon: siReact
        },

        {
            name: "VITE",
            icon: siVite
        },

        {
            name: "HTML",
            icon: siHtml5
        },

        {
            name: "CSS",
            icon: siCss
        },

        {
            name: "POSTGRESQL",
            icon: siPostgresql
        },

        {
            name: "CLAUDE",
            icon: siAnthropic
        },

        {
            name: "GEMINI",
            icon: siGooglegemini
        },

        {
            name: "N8N",
            icon: siN8n
        },

        {
            name: "NETLIFY",
            icon: siNetlify
        },

        {
            name: "RAILWAY",
            icon: siRailway
        }

    ];


    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };


    return (

        <div className="homePage">

            <ParticlesBackground />


            {/* =========================
                NAVIGATION BAR
            ========================= */}

            <nav className="navBar">


                {/* =========================
                    LOGO
                ========================= */}

                <div className="logo">

                    <a
                        href="#home"
                        className="logoLink"
                        onClick={closeMobileMenu}
                    >

                        <span className="logoMark">

                            <span className="logoM">
                                M
                            </span>

                            <span className="logoN">
                                N
                            </span>

                        </span>

                    </a>

                </div>


                {/* =========================
                    DESKTOP NAV LINKS
                ========================= */}

                <div className="navLinks">

                    <a href="#about">
                        ABOUT
                    </a>

                    <a href="#skills">
                        SKILLS
                    </a>

                    <a href="#projects">
                        PROJECTS
                    </a>

                    <a href="#contact">
                        CONTACT
                    </a>

                </div>


                {/* =========================
                    DESKTOP CONNECT BUTTON
                ========================= */}

                <a
                    href="mailto:YOUR-EMAIL-HERE?subject=Portfolio%20Inquiry%20-%20Mel%20Rich%20Nicholas&body=Hi%20Mel%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20regarding%20a%20potential%20opportunity.%0A%0AName%3A%0ACompany%3A%0APosition%20%2F%20Opportunity%3A%0A%0AMessage%3A%0A%0ABest%20regards%2C"
                    className="connectButton"
                >
                    LET'S CONNECT →
                </a>


                {/* =========================
                    MOBILE MENU BUTTON
                ========================= */}

                <button
                    className={`mobileMenuButton ${
                        mobileMenuOpen ? "open" : ""
                    }`}
                    onClick={() =>
                        setMobileMenuOpen(!mobileMenuOpen)
                    }
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileMenuOpen}
                >

                    <span></span>

                    <span></span>

                    <span></span>

                </button>


            </nav>


            {/* =========================
                MOBILE NAVIGATION
            ========================= */}

            <div
                className={`mobileMenu ${
                    mobileMenuOpen ? "open" : ""
                }`}
            >

                <div className="mobileMenuLinks">

                    <a
                        href="#about"
                        onClick={closeMobileMenu}
                    >
                        ABOUT
                    </a>


                    <a
                        href="#skills"
                        onClick={closeMobileMenu}
                    >
                        SKILLS
                    </a>


                    <a
                        href="#projects"
                        onClick={closeMobileMenu}
                    >
                        PROJECTS
                    </a>


                    <a
                        href="#contact"
                        onClick={closeMobileMenu}
                    >
                        CONTACT
                    </a>


                    <a
                        href="mailto:YOUR-EMAIL-HERE?subject=Portfolio%20Inquiry%20-%20Mel%20Rich%20Nicholas&body=Hi%20Mel%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20regarding%20a%20potential%20opportunity.%0A%0AName%3A%0ACompany%3A%0APosition%20%2F%20Opportunity%3A%0A%0AMessage%3A%0A%0ABest%20regards%2C"
                        className="mobileConnectButton"
                        onClick={closeMobileMenu}
                    >
                        LET'S CONNECT →
                    </a>

                </div>

            </div>


            {/* =========================
                HERO
            ========================= */}

            <section
                className="heroSection"
                id="home"
            >

                <div className="heroLeft">

                    <div className="leftContent">

                        <p className="introText">
                            HI, I'M
                        </p>


                        <h1 className="heroName">

                            MEL RICH

                            <br />

                            NICHOLAS

                        </h1>


                        <p className="roleText">
                            SOFTWARE DEVELOPER
                        </p>


                        <p className="heroDescription">

                            I design and build clean, functional,
                            and meaningful web applications
                            that solve real problems.

                        </p>


                        <div className="heroButtons">

                            <a
                                className="primaryButton"
                                href="#projects"
                            >
                                VIEW MY WORK →
                            </a>


                            <a
                                className="secondaryButton"
                                href="#about"
                            >
                                ABOUT ME
                            </a>

                        </div>

                    </div>

                </div>


                {/* =========================
                    HERO RIGHT
                ========================= */}

                <div className="heroRight">

                    <div className="terminalCard">

                        <div className="terminalHeader">

                            <span></span>

                            <span></span>

                            <span></span>

                        </div>


                        <div className="terminalContent">

                            <p>
                                const developer = {"{"}
                            </p>


                            <p className="codeIndent">
                                name: 'Mel Rich Nicholas',
                            </p>


                            <p className="codeIndent">
                                focus: 'Full Stack Development',
                            </p>


                            <p className="codeIndent">
                                passion: 'Building impactful digital experiences'
                            </p>


                            <p>
                                {"};"}
                            </p>

                        </div>

                    </div>

                </div>


                {/* =========================
                    HERO TECH STACK
                ========================= */}

                <div className="heroSkills">

                    <div className="heroSkillsHeader">

                        <p>
                            TECH STACK
                        </p>

                    </div>


                    <div className="skillsMarquee">

                        <div className="skillsTrack">

                            {[...skills, ...skills].map(
                                (skill, index) => (

                                    <div
                                        className="skillItem"
                                        key={index}
                                    >

                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >

                                            <path
                                                d={skill.icon.path}
                                            />

                                        </svg>


                                        <span>
                                            {skill.name}
                                        </span>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                ABOUT
            ========================= */}

            <section
                className="aboutSection"
                id="about"
            >

                <div className="aboutLeft">

                    <p className="aboutLabel">
                        ABOUT ME
                    </p>


                    <h2 className="aboutTitle">

                        I build digital

                        <br />

                        experiences that

                        <br />

                        create impact.

                    </h2>


                    <p className="aboutText">

                        I'm Mel Rich Nicholas, a full stack
                        developer who enjoys turning ideas
                        into clean, functional, and meaningful
                        web applications.

                    </p>


                    <p className="aboutText">

                        I enjoy solving problems, learning
                        new technologies, and building things
                        that make a difference.

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

                        <span className="infoIcon">
                            ◯
                        </span>

                        <div>

                            <p className="infoLabel">
                                NAME
                            </p>

                            <p className="infoValue">
                                Mel Rich Nicholas
                            </p>

                        </div>

                    </div>


                    <div className="aboutInfo">

                        <span className="infoIcon">
                            &lt;/&gt;
                        </span>

                        <div>

                            <p className="infoLabel">
                                ROLE
                            </p>

                            <p className="infoValue">
                                Full Stack Developer
                            </p>

                        </div>

                    </div>


                    <div className="aboutInfo">

                        <span className="infoIcon">
                            ⌖
                        </span>

                        <div>

                            <p className="infoLabel">
                                LOCATION
                            </p>

                            <p className="infoValue">
                                Singapore
                            </p>

                        </div>

                    </div>


                    <div className="aboutInfo">

                        <span className="infoIcon">
                            ◇
                        </span>

                        <div>

                            <p className="infoLabel">
                                EDUCATION
                            </p>

                            <p className="infoValue">
                                Bachelor's in Computer Science
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                SKILLS
            ========================= */}

            <SkillsSection />


            {/* =========================
                PROJECTS
            ========================= */}

            <section
                className="projectsSection"
                id="projects"
            >

                <div className="projectsHeader">

                    <p className="projectsLabel">
                        SELECTED WORK
                    </p>


                    <h2 className="projectsTitle">

                        Projects I've

                        <br />

                        built.

                    </h2>

                </div>


                <div className="projectsList">


                    {/* =========================
                        PROJECT 01
                    ========================= */}

                    <article className="projectCard">

                        <div className="projectTop">

                            <span className="projectNumber">
                                01
                            </span>


                            <div>

                                <p className="projectCategory">
                                    AI-POWERED APPLICATION
                                </p>


                                <h3 className="projectName">
                                    CUSTOMER SUPPORT AI
                                </h3>

                            </div>

                        </div>


                        <div className="projectImage">

                            <div className="projectImagePlaceholder">

                                <img
                                    className="projPhoto"
                                    src={customerSupport}
                                    alt="Customer Support AI"
                                />

                            </div>

                        </div>


                        <div className="projectBottom">

                            <p className="projectDescription">

                                An agentic AI customer support
                                system built for an e-commerce
                                application, designed to help
                                customers get information about
                                their accounts, orders, and
                                deliveries. The AI understands
                                customer requests and uses tool
                                calling to retrieve real-time
                                information from the backend.

                            </p>


                            <div className="projectTechnologies">

                                <span>REACT</span>

                                <span>VITE</span>

                                <span>JAVASCRIPT</span>

                                <span>SPRING BOOT</span>

                                <span>POSTGRESQL</span>

                                <span>RAILWAY</span>

                                <span>NETLIFY</span>

                                <span>GITHUB</span>

                                <span>GEMINI</span>

                            </div>


                            <button
                                className="projectLink"
                                onClick={() =>
                                    setSelectedProject(projects[0])
                                }
                            >
                                VIEW PROJECT →
                            </button>

                        </div>

                    </article>


                    {/* =========================
                        PROJECT 02
                    ========================= */}

                    <article className="projectCard">

                        <div className="projectTop">

                            <span className="projectNumber">
                                02
                            </span>


                            <div>

                                <p className="projectCategory">
                                    CLIENT WEBSITE
                                </p>


                                <h3 className="projectName">
                                    IMPERIAL GRAND
                                </h3>

                            </div>

                        </div>


                        <div className="projectImage">

                            <div className="projectImagePlaceholder">

                                <img
                                    className="projPhoto"
                                    src={imperial}
                                    alt="Imperial Grand"
                                />

                            </div>

                        </div>


                        <div className="projectBottom">

                            <p className="projectDescription">

                                A full-stack website designed
                                and developed for a real client,
                                combining a polished customer-facing
                                interface with a Java and Spring Boot
                                backend. The project includes
                                PostgreSQL data management and
                                a responsive web experience built
                                around the client's business needs.

                            </p>


                            <div className="projectTechnologies">

                                <span>HTML</span>

                                <span>CSS</span>

                                <span>JAVASCRIPT</span>

                                <span>JAVA</span>

                                <span>SPRING BOOT</span>

                                <span>POSTGRESQL</span>

                                <span>RAILWAY</span>

                                <span>NETLIFY</span>

                                <span>GITHUB</span>

                            </div>


                            <button
                                className="projectLink"
                                onClick={() =>
                                    setSelectedProject(projects[1])
                                }
                            >
                                VIEW PROJECT →
                            </button>

                        </div>

                    </article>


                    {/* =========================
                        PROJECT 03
                    ========================= */}

                    <article className="projectCard">

                        <div className="projectTop">

                            <span className="projectNumber">
                                03
                            </span>


                            <div>

                                <p className="projectCategory">
                                    AI AUTOMATION
                                </p>


                                <h3 className="projectName">
                                    AI EMAIL AUTOMATION
                                </h3>

                            </div>

                        </div>


                        <div className="projectImage">

                            <div className="projectImagePlaceholder">

                                <img
                                    className="projPhoto"
                                    src={aiEmail}
                                    alt="n8n AI Email Automation"
                                />

                            </div>

                        </div>


                        <div className="projectBottom">

                            <p className="projectDescription">

                                An AI-powered n8n workflow that
                                processes incoming emails,
                                summarizes them, determines
                                actions, and generates responses.

                            </p>


                            <div className="projectTechnologies">

                                <span>N8N</span>

                                <span>OPENAI</span>

                                <span>GMAIL</span>

                                <span>GOOGLE CALENDAR</span>

                            </div>


                            <button
                                className="projectLink"
                                onClick={() =>
                                    setSelectedProject(projects[2])
                                }
                            >
                                VIEW PROJECT →
                            </button>

                        </div>

                    </article>

                </div>

            </section>


            {/* =========================
                PROJECT MODAL
            ========================= */}

            <ProjectModal
                project={selectedProject}
                onClose={() =>
                    setSelectedProject(null)
                }
            />


            {/* =========================
                CONTACT
            ========================= */}

            <ContactSection />

        </div>
    );
}


export default Homepage;