import React from "react";
import Link from "next/link";

export function Service() {
    return (
        <>
            {/* ======= Services Section ======= */}
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>
                            A marketing and advertising strategy needs to be successful. The plan is
                            a waste of time if it does not aid management in increasing sales, lowering
                            marketing expenses, gaining market share, or in any other way "winning".
                        </p>
                    </div>
                    <div className="m-auto">
                        <div className="row">
                            <div
                                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="icon-box">
                                    <div className="icon">
                                    <i className="bi bi-bookmark-check-fill"></i>
                                    </div>
                                    <h4 className="title mt-5">
                                        <a href="#" className="nav-link">Events  Planners</a>
                                    </h4>
                                    {/* <p className="description">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore
                                    </p> */}
                                </div>
                            </div>
                            <div
                                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-tv"></i>
                                    </div>
                                    <h4 className="title mt-5">
                                        <Link className="nav-link" href="/services/marketing/">Marketing</Link>
                                    </h4>
                                    {/* <p className="description">
                                        Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                        excepturi
                                    </p> */}
                                </div>
                            </div>
                            <div
                                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-broadcast"></i>
                                    </div>
                                    <h4 className="title mt-5">
                                        <Link className="nav-link" href="/services/advertising/">Advertising</Link>
                                    </h4>
                                    {/* <p className="description">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore
                                    </p> */}
                                </div>
                            </div>
                            <div
                                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                                data-aos="fade-up"
                                data-aos-delay={400}
                            >
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-arrow-right-circle" />
                                    </div>
                                    <h4 className="title mt-5">
                                        <Link className="nav-link" href="#">Tours and Travel</Link>
                                    </h4>
                                    {/* <p className="description">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Services Section */}
        </>

    )
}