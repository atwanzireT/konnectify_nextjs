import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About_Details } from "../components/main/about_details";


export default function About() {
    return (
        <>
            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li>
                                <a className="nav-link text-muted" href="/">Home</a>
                            </li>
                            <li className="text-danger">About</li>
                        </ol>
                    </div>
                </section>
                {/* End Breadcrumbs */}
                <Header />
                <About_Details/>
                <Footer />
            </main>
        </>
    )
}