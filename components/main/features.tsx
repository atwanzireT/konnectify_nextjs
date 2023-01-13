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
                        <h2>Features</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit in iste officiis commodi quidem hic quas.
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
                                Voluptatem dignissimos provident quasi corporis voluptates sit
                                assumenda.
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check" /> Duis aute irure dolor in
                                    reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check" /> Ullam est qui quos consequatur eos
                                    accusamus.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                            <Image src={feature2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                            <h3>Corporis temporibus maiores provident</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum
                            </p>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5" data-aos="fade-right">
                            <Image src={feature3} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7 pt-5" data-aos="fade-left">
                            <h3>
                                Sunt consequatur ad ut est nulla consectetur reiciendis animi
                                voluptas
                            </h3>
                            <p>
                                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia
                                minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor
                                doloremque.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check" /> Duis aute irure dolor in
                                    reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check" /> Facilis ut et voluptatem aperiam.
                                    Autem soluta ad fugiat.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                            <Image src={feature4} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                            <h3>
                                Quas et necessitatibus eaque impedit ipsum animi consequatur
                                incidunt in
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Features Section */}
        </>

    )
}