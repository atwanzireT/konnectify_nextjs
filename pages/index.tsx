import { Inter } from '@next/font/google'
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Main } from '../components/main';
import { Footer } from '../components/footer';
import Head from 'next/head'
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Head>
        <title>Konnectify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <div className="main">
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
    </>
  )
}