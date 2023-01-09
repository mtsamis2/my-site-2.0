import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/styles/assets/css/main.css" async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
