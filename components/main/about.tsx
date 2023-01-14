import React from "react";

export function About() {
    return (
        <>
            {/* ======= About Section ======= */}
            <section id="about" className="about">
                <div className="container">
                    <div className="row no-gutters">
                        <div
                            className="content col-xl-5 d-flex align-items-stretch"
                            data-aos="fade-right"
                        >
                            <div className="content">
                                <h3>About Us</h3>
                                <p>
                                    Konnectify Uganda consists of individuals that have high skills, knowledge and experience
                                    in the fields of marketing and advertising.
                                </p>
                                <a href="#" className="about-btn">
                                    About us <i className="bi bi-card-text" />
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-xl-7 d-flex align-items-stretch"
                            data-aos="fade-left"
                        >
                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div
                                        className="col-md-6 icon-box"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        <i className="bi bi-receipt" />
                                        <h4>Mission</h4>
                                        <p>
                                            Working directly with customers to assist them in establishing and achieving
                                            their marketing and advertising goals is our main priority. We pledge to communicate
                                            their ideas in a way that is cost-effective, strategic, and creative. We also give
                                            our full assistance
                                        </p>
                                    </div>
                                    <div
                                        className="col-md-6 icon-box"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <i className="bi bi-pencil-square" />
                                        <h4>Why Konnectify</h4>
                                        <ul>
                                            <li>
                                                Possess the technical expertise to keep our clients' learning curves and
                                                costs to a minimum
                                            </li>
                                            <li>
                                                Join the management team of our client's company.
                                            </li>
                                            <li>
                                                Ensure that each client's marketing and advertising package launches on time.
                                            </li>
                                            <li>
                                                Provide fresh, creative ideas for our clients that lead to high-caliber, economical outcomes.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End .content*/}
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section */}
        </>

    )
}