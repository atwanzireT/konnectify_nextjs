import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import '../static/main.js'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
