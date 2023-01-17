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
                                    <p>
                                        <Link href="tel:0705711887">0705711887</Link>
                                        <br />
                                        <Link href="tel:0780530120">0780530120</Link>   
                                    </p>
                                    <br />
                                    <strong>Email:</strong><Link href="mailto:konnectify20@gmail.com">konnectify20@gmail.com</Link>
                                    <br />
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="/about">About us</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="/#services">Services</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Terms of service</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Product Management</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Graphic Design</a>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Konnectify</h4>
                                <p>
                                    Work with Us
                                </p>
                                {/* <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit"className="btn btn-danger" defaultValue="Subscribe" />
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            © Copyright{" "}
                            <strong>
                                <span>Konnectify</span>
                            </strong>
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
                    {/* <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter">
                            <i className="bx bxl-twitter" />
                        </a>
                        <a href="#" className="facebook">
                            <i className="bx bxl-facebook" />
                        </a>
                        <a href="#" className="instagram">
                            <i className="bx bxl-instagram" />
                        </a>
                        <a href="#" className="google-plus">
                            <i className="bx bxl-skype" />
                        </a>
                        <a href="#" className="linkedin">
                            <i className="bx bxl-linkedin" />
                        </a>
                    </div> */}
                </div>
            </footer>
            {/* End Footer */}
        </>

    )
}