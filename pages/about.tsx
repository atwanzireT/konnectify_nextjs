import React from "react";
import { Header_About } from "../components/header";
import { Footer } from "../components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About_Details } from "../components/main/about_details";
import Link from "next/link";


export default function About() {
    return (
        <>
            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li>
                                <Link className="nav-link text-muted" href="/">Home</Link>
                            </li>
                            <li className="text-danger">About</li>
                        </ol>
                    </div>
                </section>
                {/* End Breadcrumbs */}
                <Header_About />
                <About_Details/>
                <Footer />
            </main>
        </>
    )
}