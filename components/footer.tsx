import Link from "next/link";
import React from "react";

export function Footer() {
    return (
        <>
            {/* ======= Footer ======= */}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Konnectify Uganda</h3>
                                <p>
                                    Nkurumah Road, Light Arcade<br/>
                                    <strong>Phone:</strong>
                                    <div>
                                        <Link className="nav-link" href="tel:0705711887">0705711887</Link>
                                        <Link className="nav-link" href="tel:0780530120">0780530120</Link>   
                                    </div>
                                    <br />
                                    <strong>Email:</strong><Link href="mailto:konnectify20@gmail.com">konnectify20@gmail.com</Link>
                                    <br />
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right"/> <Link className="nav-link" href="/">Home</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link className="nav-link" href="/about">About us</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link className="nav-link" href="/#services">Services</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link href="#" className="nav-link">Terms of service</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link className="nav-link" href="#">Privacy policy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Konnectify</h4>
                                <p>
                                    Work with Us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            © Copyright{" "}
                            <span className="text-muted">Konnectify</span>
                            . All Rights Reserved
                        </div>
                        <div className="credits">
                            {/* All the links in the footer should remain intact. */}
                            {/* You can delete the links only if you purchased the pro version. */}
                            {/* Licensing information: https://bootstrapmade.com/license/ */}
                            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bikin-free-simple-landing-page-template/ */}
                            Designed by <a href="">Fedora</a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </>

    )
}