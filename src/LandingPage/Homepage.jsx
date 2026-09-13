import "../LandingPage/Homepage.css";
import "../LandingPage/AboutSection.css";
import "../LandingPage/SkillsSection.css";
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

import KineticGrid from "./KineticGrid"; 
import ParticlesBackground from "./ParticlesBackground";
import profilePhoto from "../assets/profile.png";
import imperial from "../assets/imperial.png";
import customerSupport from "../assets/customerSupport.png";



function Homepage() {

    const skills = [

        { name: "SPRING BOOT", icon: siSpringboot },
        { name: "SPRING SECURITY", icon: siSpringsecurity },
        { name: "JAVASCRIPT", icon: siJavascript },
        { name: "REACT", icon: siReact },
        { name: "VITE", icon: siVite },
        { name: "HTML", icon: siHtml5 },
        { name: "CSS", icon: siCss },
        { name: "POSTGRESQL", icon: siPostgresql },
        { name: "CLAUDE", icon: siAnthropic },
        { name: "GEMINI", icon: siGooglegemini },
        { name: "N8N", icon: siN8n },
        { name: "NETLIFY", icon: siNetlify },
        { name: "RAILWAY", icon: siRailway }
    ];

    return (
        <div  className="homePage">

              {/* Background for the whole website */}
             <ParticlesBackground />


            {/* Navbar */}
            <nav className="navBar">

                <div className="logo">
                    MN
                </div>

                <div className="navLinks">
                    <a href="#about">ABOUT</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#contact">CONTACT</a>
                </div>

                <button className="connectButton">
                    LET'S CONNECT →
                </button>

            </nav>

            {/* =====================
                HERO SECTION
            ====================== */}
            <section className="homePage">

                <div className="heroLeft">

                    <div className="leftContent">

                        <p className="introText">HI, I'M</p>

                        <h1 className="heroName">
                            MEL RICH
                            <br />
                            NICHOLAS
                        </h1>

                        <p className="roleText">
                            SOFTWARE DEVELOPER
                        </p>

                        <p className="heroDescription">
                            I design and build clean, functional, and meaningful web applications
                            that solve real problems.
                        </p>

                        <div className="heroButtons">

                            <button className="primaryButton">
                                VIEW MY WORK →
                            </button>

                            <button className="secondaryButton">
                                ABOUT ME
                            </button>

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
                            <p>const developer = {"{"}</p>

                            <p className="codeIndent">
                                name: 'Mel Rich Nicholas',
                            </p>

                            <p className="codeIndent">
                                focus: 'Full Stack Development',
                            </p>

                            <p className="codeIndent">
                                passion: 'Building impactful digital experiences'
                            </p>

                            <p>{"};"}</p>


                        </div>


                    </div>

                </div>

              
                {/* =====================
                    HERO TECH STACK
                ====================== */}

                <div
                    className="heroSkills"
                    id="skills"
                >

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

            <section className="aboutSection" id="about">

                <div className="aboutLeft">
                    <p className="aboutLabel">ABOUT ME</p>

                    <h2 className="aboutTitle">
                        I build digital
                        <br />
                        experiences that
                        <br />
                        create impact.
                    </h2>

                    <p className="aboutText">
                        I'm Mel Rich Nicholas, a full stack developer who enjoys turning
                        ideas into clean, functional, and meaningful web applications.
                    </p>

                    <p className="aboutText">
                        I enjoy solving problems, learning new technologies, and building
                        things that make a difference.
                    </p>
                </div>


                <div className="aboutPhoto">
                    <div className="photoPlaceholder">
                        <img className="profilePhoto" src={profilePhoto} alt="Mel Rich Nicholas" />
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
                            <p className="infoLabel">ROLE</p>
                            <p className="infoValue">Full Stack Developer</p>
                        </div>
                    </div>

                    <div className="aboutInfo">
                        <span className="infoIcon">⌖</span>

                        <div>
                            <p className="infoLabel">LOCATION</p>
                            <p className="infoValue">Singapore</p>
                        </div>
                    </div>

                    <div className="aboutInfo">
                        <span className="infoIcon">◇</span>

                        <div>
                            <p className="infoLabel">EDUCATION</p>
                            <p className="infoValue">
                                Bachelor's in Computer Science
                            </p>
                        </div>
                    </div>

                </div>



            </section>
            

            {/* =====================
                    PROJECTS SECTION
                ====================== */}
            <section className="projectsSection" id="projects">

                <div className="projectsHeader">
                    <p className="projectsLabel">SELECTED WORK</p>

                    <h2 className="projectsTitle">
                        Projects I've
                        <br />
                        built.
                    </h2>
                </div>

                <div className="projectsList">

                    {/* PROJECT 01 */}
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
                                An AI-powered customer support application
                                built to help customers get information and
                                assistance.
                            </p>

                            {/* CUSTOMER SUPPORT AI */}
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

                            <a href="#" className="projectLink">
                                VIEW PROJECT →
                            </a>

                        </div>

                    </article>

                    {/* PROJECT 02 */}
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
                                A professional website designed and developed
                                for a real client.
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

                            <a href="#" className="projectLink">
                                VIEW PROJECT →
                            </a>

                        </div>

                    </article>




                    {/* PROJECT 03 */}
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
                                PROJECT IMAGE
                            </div>
                        </div>

                        <div className="projectBottom">

                            <p className="projectDescription">
                                An AI-powered n8n workflow that processes
                                incoming emails, summarizes them, determines
                                actions, and generates responses.
                            </p>

                            <div className="projectTechnologies">
                                <span>N8N</span>
                                <span>AI</span>
                                <span>GMAIL</span>
                            </div>

                            <a href="#" className="projectLink">
                                VIEW PROJECT →
                            </a>

                        </div>

                    </article>

                </div>

            </section>

            
            

          
          

        </div>

    )
}

export default Homepage;