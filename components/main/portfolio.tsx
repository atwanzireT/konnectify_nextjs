import React from "react";
import Image from "next/image";
import portfolio1 from "./img/portfolio/portfolio-1.png"
import portfolio2 from "./img/portfolio/portfolio-2.png"
import portfolio3 from "./img/portfolio/portfolio-3.png"
import portfolio4 from "./img/portfolio/portfolio-4.jpg"
import portfolio5 from "./img/portfolio/portfolio-5.jpg"
import portfolio6 from "./img/portfolio/portfolio-6.png"
import portfolio7 from "./img/portfolio/portfolio-7.png"
import portfolio8 from "./img/portfolio/portfolio-8.jpg"
import portfolio9 from "./img/portfolio/portfolio-9.png"


export function Portfolio() {
    return (
        <>
            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>
                            A walk through our work.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">
                                    Gallery
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <Image
                                    src={portfolio1}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <Image
                                    src={portfolio2}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <Image
                                    src={portfolio3}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <Image
                                    src={portfolio4}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <Image
                                    src={portfolio5}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <Image
                                    src={portfolio6}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <Image
                                    src={portfolio7}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <Image
                                    src={portfolio8}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <Image
                                    src={portfolio9}
                                    className="img-fluid"
                                    alt=""
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Portfolio Section */}
        </>

    )
}