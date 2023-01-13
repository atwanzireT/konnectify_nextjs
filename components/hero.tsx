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
                    <h1>Create A Better Market Konnect with Konnectify .</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <a href="#about" className="btn-get-started scrollto">
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