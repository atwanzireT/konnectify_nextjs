import React from "react";

export function Header() {
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo">
                        <a href="#" className="nav-link">Konnectify</a>
                    </h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <a className="nav-link scrollto" href="#hero">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#services">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto " href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a className="getstarted scrollto" href="#about">
                                    Get Started
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

export function Header_About() {
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo">
                        <a href="/" className="nav-link">Konnectify</a>
                    </h1>
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