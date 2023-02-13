import { Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src='main.js'/>
        <Script src='assets/vendor/aos/aos.js'/>
        <Script src='assets/vendor/bootstrap/js/bootstrap.bundle.min.js'/>
      </body>
    </Html>
  )
}
