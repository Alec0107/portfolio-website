
import "./SkillsSection.css";

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
    siRailway,
    siGithub
} from "simple-icons";


function SkillsSection() {

    const skillGroups = [
        {
            number: "01",
            title: "BACKEND",
            skills: [
                { name: "JAVA", icon: null },
                { name: "REDIS", icon: null },
                { name: "SPRING BOOT", icon: siSpringboot },
                { name: "SPRING SECURITY", icon: siSpringsecurity },
                { name: "POSTGRESQL", icon: siPostgresql }
            ]
        },

        {
            number: "02",
            title: "FRONTEND",
            skills: [
                { name: "REACT", icon: siReact },
                { name: "JAVASCRIPT", icon: siJavascript },
                { name: "VITE", icon: siVite },
                { name: "HTML", icon: siHtml5 },
                { name: "CSS", icon: siCss }
            ]
        },

        {
            number: "03",
            title: "AI & AUTOMATION",
            skills: [
                { name: "GEMINI", icon: siGooglegemini },
                { name: "CLAUDE", icon: siAnthropic },
                { name: "N8N", icon: siN8n },
                { name: "OPENAI", icon: null }
            ]
        },

        {
            number: "04",
            title: "DEPLOYMENT & TOOLS",
            skills: [
                { name: "RAILWAY", icon: siRailway },
                { name: "NETLIFY", icon: siNetlify },
                { name: "GITHUB", icon: siGithub }
            ]
        }
    ];


    return (

        <section
            className="skillsSection"
            id="skills"
        >

            <div className="skillsHeader">

                <div>

                    <p className="skillsLabel">
                        TECHNOLOGIES
                    </p>

                    <h2 className="skillsTitle">
                        What I work
                        <br />
                        with.
                    </h2>

                </div>


                <p className="skillsIntro">
                    A collection of technologies I use to build
                    full-stack applications, AI-powered systems,
                    and practical digital experiences.
                </p>

            </div>


            <div className="skillsGrid">

                {skillGroups.map((group) => (

                    <div
                        className="skillGroup"
                        key={group.number}
                    >

                        <div className="skillGroupTop">

                            <span className="skillGroupNumber">
                                {group.number}
                            </span>

                            <span className="skillGroupTitle">
                                {group.title}
                            </span>

                        </div>


                        <div className="skillList">

                            {group.skills.map((skill) => (

                                <div
                                    className="skillRow"
                                    key={skill.name}
                                >

                                    <div className="skillName">

                                        {skill.icon && (
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d={skill.icon.path}
                                                />
                                            </svg>
                                        )}

                                        <span>
                                            {skill.name}
                                        </span>

                                    </div>


                                    <span className="skillArrow">
                                        ↗
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );
}


export default SkillsSection;

