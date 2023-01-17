import React from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
// import { firestore } from "firebaseConfig";
import emailjs from '@emailjs/browser'
import Link from "next/link";

export function Contact() {
    const ref = React.useRef();
    const sendMail = (e) => {

        e.preventDefault();


        emailjs.sendForm('service_48g07cw', 'template_g3bfklk', ref.current, 'EPuZoE_q41CfAcX11')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>
                            Konnectify Respects your feedback .
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <i className="bx bx-map" />
                                        <h3>Our Address</h3>
                                        <p>Nkurumah Road, Light Arcade</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bx bx-envelope" />
                                        <h3>Email Us</h3>
                                        <p>
                                            <Link href="mailto:konnectify20@gmail.com">konnectify20@gmail.com</Link>
                                            <br />
                                            {/* contact@example.com */}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bx bx-phone-call" />
                                        <h3>Call Us</h3>
                                        <p>
                                            <Link href="tel:0780530120">0780530120</Link>
                                            <br />
                                            <Link href="tel:0705711887">0705711887</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-md-0">
                            <form
                                ref={ref}
                                action="forms/contact.php"
                                method="post"
                                role="form"
                                className="php-email-form"
                            >
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="sender"
                                            id="email"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                </div>
                                {/* <div className="form-group mt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                    />
                                </div> */}
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button onClick={sendMail} type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
        </>

    )
}