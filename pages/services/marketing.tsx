import { Header_About } from "../../components/header"
import { Footer } from "../../components/footer"
import Marketing_detail from "../../components/services/marketing_detail"

export default function Marketing() {
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
                            <li className="text-danger">Marketing</li>
                        </ol>
                    </div>
                </section>
                <Header_About />
                <Marketing_detail />
                <Footer />
            </main>
        </>
    )
}