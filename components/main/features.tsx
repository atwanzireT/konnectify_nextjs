import React from "react";
import Image from "next/image";
import feature1 from "../img/features-1.png";
import feature2 from "../img/features-2.png";
import feature3 from "../img/features-3.png";
import feature4 from "../img/features-4.png";

export function Features() {
    return (
        <>
            {/* ======= Features Section ======= */}
            <section id="features" className="features" data-aos="fade-up">
                <div className="container">
                    <div className="section-title">
                        <h2>What We Do.</h2>
                        <p>
                            Konnectify Uganda consists of individuals that have high skills, knowledge and experience in the fields of marketing and advertising.
                        </p>
                    </div>
                    <div className="row content">
                        <div className="col-md-5" data-aos="fade-right" data-aos-delay={100}>
                            <Image src={feature1} className="img-fluid" alt="" />
                        </div>
                        <div
                            className="col-md-7 pt-4"
                            data-aos="fade-left"
                            data-aos-delay={100}
                        >
                            <h3>
                                Traditional marketing
                            </h3>
                            <p className="fst-italic">
                                Traditional marketing is any form of marketing that uses offline media to
                                reach an audience. Basic examples of traditional marketing include things
                                like newspaper ads and other print ads, but there are also billboards, mail
                                advertisements, and TV and radio advertisements.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check" /> Designing the overall advertising/public relations strategy
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Personalization and targeting
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Development and preparation of strategic marketing plans and programs.
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Key market segment identification plans and programs.
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Industry trend analysis.
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Testing the plan.
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Execution of marketing implementation plans and programs.
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Tracking the campaigns progress
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Instant measurability for ROI analysis
                                </li>                                <li>
                                    <i className="bi bi-check" />
                                    Post campaign analysis
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                            <Image src={feature2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                            <h3>Print advertising </h3>
                            <p className="fst-italic">
                                Print advertising is a form of marketing that uses physically printed media to reach customers on a
                                broad scale. Ads are printed in hard copy across
                                different types of publications such as newspapers, magazines, brochures, or direct mail.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check" />
                                    Business card, Logo, Stationery, Label, Signage, Billboard, Cars wrap, Banner ad, Flyer, Post card,
                                    Brochure, Delivery note, Receipt book, Poster, Catalogue, Envelope, Menu , Newspaper ad,
                                    Sticker, Phone case covers, Umbrella, Pen, Caps, T-shirt, Card, Cup and mug,
                                    Packaging, Bag and tote, Digitizing, Embroidery designing and printing
                                </li>``
                            </ul>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5" data-aos="fade-right">
                            <Image src={feature3} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7 pt-5" data-aos="fade-left">
                            <h3>
                                Digital marketing
                            </h3>
                            <p>
                                Digital marketing is the component of marketing that uses the Internet and
                                online based digital technologies such as desktop computers, mobile phones
                                and other digital media and platforms to promote products and services
                            </p>
                            <ul>
                                <div className="row">
                                    <div className="col">
                                        <li>
                                            <i className="bi bi-check" />
                                            Website maintenance and development

                                        </li>
                                        <li>
                                            <i className="bi bi-check" />
                                            Word press support

                                        </li>
                                        <li>
                                            <i className="bi bi-check" />
                                            Hosting
                                        </li>
                                        <li>
                                            <i className="bi bi-check" />
                                            Ad design
                                        </li>
                                        <li>
                                            <i className="bi bi-check" />
                                            Search engine optimization (SEO)
                                        </li>
                                        <li>
                                            <i className="bi bi-check" />
                                            Ad management
                                        </li>
                                    </div>
                                    <div className="col">
                                        <li>
                                            <i className="bi bi-check" />
                                            Copywriting

                                        </li>
                                        <li>
                                            <i className="bi bi-check" />
                                            Keyword research


                                        </li>
                                        <li>
                                            <i className="bi bi-check" />
                                            Email marketing
                                        </li>
                                        <li>
                                            <i className="bi bi-check" />
                                            Analytics
                                        </li>
                                        <li>
                                            <i className="bi bi-check" />
                                            Social media marketing
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                            <Image src={feature4} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                            <h3>
                                Media Advertising
                            </h3>
                            <p className="fst-italic">
                                Social media marketing is the use of social media platforms and websites to
                                promote a product or service. Although the terms e-marketing and digital marketing
                                are still dominant in academia, social media marketing is becoming more popular
                                for both practitioners and researchers.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check" />
                                    Ad campaigns
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Strategic planning
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    TV ads
                                </li>
                                <li>
                                    <i className="bi bi-check" />
                                    Radio commercials
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Features Section */}
        </>

    )
}