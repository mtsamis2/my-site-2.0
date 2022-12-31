import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <link rel="stylesheet" href="/styles/assets/css/main.css" />
      <script src="/styles/assets/js/jquery.min.js" />
      <script src="/styles/assets/js/skel.min.js" />
      <script src="/styles/assets/js/util.js" />
      <script src="/styles/assets/js/main.js" />
      {/* Google Search Console */}
      <meta name="google-site-verification" content="9cIjLHNbjwsAGc0xOD498waalz2pWlgk8m5LmLdSLMY" />
      {/* Google AdSense */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5287798851641238" crossorigin="anonymous"></script>
    </Head>
  )
}
