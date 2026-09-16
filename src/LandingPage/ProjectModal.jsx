import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {

    if (!project) {
        return null;
    }

    return (
        <div className="projectModalOverlay" onClick={onClose}>

            <div
                className="projectModal"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="projectModalClose"
                    onClick={onClose}
                    aria-label="Close project"
                >
                    ×
                </button>


                <div className="projectModalHeader">

                    <div>

                        <p className="projectModalCategory">
                            {project.category}
                        </p>

                        <h2 className="projectModalTitle">
                            {project.name}
                        </h2>

                    </div>

                    <span className="projectModalNumber">
                        {project.number}
                    </span>

                </div>


                <div className="projectModalImage">

                    <img
                        src={project.image}
                        alt={project.name}
                    />

                </div>


                <div className="projectModalContent">

                    <div className="projectModalDescription">

                        <p className="projectModalLabel">
                            ABOUT THE PROJECT
                        </p>

                        <p>
                            {project.description}
                        </p>

                    </div>


                    <div className="projectModalTech">

                        <p className="projectModalLabel">
                            TECHNOLOGIES
                        </p>

                        <div className="projectModalTechnologies">

                            {project.technologies.map((technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            ))}

                        </div>

                    </div>


                    <div className="projectModalActions">

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projectModalButton primary"
                            >
                                VIEW LIVE PROJECT →
                            </a>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projectModalButton secondary"
                            >
                                GITHUB →
                            </a>
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProjectModal;