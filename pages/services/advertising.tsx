import { Header_About } from "../../components/header"
import { Footer } from "../../components/footer"
import Advertising_detail from "../../components/services/advertising_detail"


export default function Advertising() {
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
                            <li className="text-danger">Advertising</li>
                        </ol>
                    </div>
                </section>
                <Header_About />
                <Advertising_detail />
                <Footer />
            </main>
        </>
    )
}