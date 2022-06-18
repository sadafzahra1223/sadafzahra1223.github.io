import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

//<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />

export default function Document() {
  return (
    <Html>
      <Head>
      
      <link rel="stylesheet" type="text/css" href="styles.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
       	
      </body>
    </Html>
  )
}

