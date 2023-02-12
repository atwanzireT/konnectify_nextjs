import React from "react";
import Image from "next/image";
import client1 from "../img/clients/client-1.jpg"
import client2 from "../img/clients/client-2.jpg"
import client3 from "../img/clients/client-3.jpg"
import client4 from "../img/clients/client-4.jpg"
import client5 from "../img/clients/client-5.jpg"
import client6 from "../img/clients/client-6.png"




export function Partnership() {
    return (
        <>
            {/* ======= Clients Section ======= */}
            <section id="clients" className="clients">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <Image
                                src={client1}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <Image
                                src={client2}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <Image
                                src={client3}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <Image
                                src={client4}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <Image
                                src={client5}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <Image
                                src={client6}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Clients Section */}
        </>

    )
}