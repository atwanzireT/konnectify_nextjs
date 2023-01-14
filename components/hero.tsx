import React from "react";
import Image from "next/image";
import hero_pic from "./img/hero-img.png";

export function Hero() {
    return (
        <>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div
                    className="container d-flex flex-column align-items-center justify-content-center"
                    data-aos="fade-up"
                >
                    <h1>We are Konnectify Uganda.</h1>
                    <h2>Konnectify Uganda consists of individuals that have high skills, knowledge and experience in the fields of marketing and advertising. </h2>
                    <a href="#about" className="btn-danger btn btn-lg mt-3 scrollto">
                        Get Started
                    </a>
                    <Image
                        src={hero_pic}
                        className="img-fluid hero-img"
                        alt=""
                        data-aos="zoom-in"
                        data-aos-delay={150}
                    />
                </div>
            </section>
            {/* End Hero */}
        </>

    )
}