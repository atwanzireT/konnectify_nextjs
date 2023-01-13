import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Main } from '../components/main';
import { Footer } from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="main">
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
    </>
  )
}
