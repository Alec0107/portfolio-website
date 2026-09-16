import "./ContactSection.css";

function ContactSection() {
    return (
        <section className="contactSection" id="contact">

            <div className="contactContainer">

                {/* =========================
                    CONTACT HEADER
                ========================= */}

                <div className="contactHeader">

                    <p className="contactLabel">
                        CONTACT
                    </p>

                    <h2 className="contactTitle">
                        Let's work
                        <br />
                        together.
                    </h2>

                </div>


                {/* =========================
                    CONTACT CONTENT
                ========================= */}

                <div className="contactContent">

                    <div className="contactMessage">

                        <p>
                            Have a project, opportunity, or idea in mind?
                            I'd be happy to hear about it and see how I
                            can help bring it to life.
                        </p>

                    </div>


                    <div className="contactDetails">

                        <a
                           href="mailto:YOUR-EMAIL-HERE?subject=Portfolio%20Inquiry%20-%20Mel%20Rich%20Nicholas&body=Hi%20Mel%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20regarding%3A%0A%0AName%3A%0ACompany%3A%0APosition%20%2F%20Opportunity%3A%0A%0AMessage%3A%0A%0ABest%20regards%2C"
                           className="contactEmail"
                        >
                            your@email.com
                            <span>↗</span>
                        </a>

{/* 
                        <div className="contactLinks">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GITHUB
                                <span>↗</span>
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LINKEDIN
                                <span>↗</span>
                            </a>



                        </div> */}

                    </div>

                </div>



                {/* =========================
                    FOOTER
                ========================= */}

                <div className="contactFooter">

                    <span>
                        © 2026 MEL RICH NICHOLAS
                    </span>

                    <span>
                        SOFTWARE DEVELOPER
                    </span>

                </div>

            </div>

        </section>
    );
}

export default ContactSection;