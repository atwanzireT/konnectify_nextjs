import Link from "next/link";
import React from "react";

export function Header() {
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <h5 className="logo">
                        <a href="#" className="nav-link">Konnectify Uganda</a>
                    </h5>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link className="nav-link scrollto" href="#hero">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link scrollto" href="#about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link scrollto" href="#services">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link scrollto " href="#portfolio">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link scrollto" href="#contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link className="getstarted scrollto" href="#about">
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* .navbar */}
                </div>
            </header>
            {/* End Header */}
        </>
    )
}

export function Header_About() {
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <h5 className="logo">
                        <Link href="/" className="nav-link">Konnectify Uganda</Link>
                    </h5>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <a className="nav-link scrollto" href="/">
                                    Home
                                </a>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* .navbar */}
                </div>
            </header>
            {/* End Header */}
        </>
    )
}