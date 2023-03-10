import Head from 'next/head'
import { gtag } from '../lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Meta(props) {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" /> 
      <title>{props.title}</title>
      <meta name="description" content={props.description}/>
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

      {/* Google Search Console */}
      <meta name="google-site-verification" content="9cIjLHNbjwsAGc0xOD498waalz2pWlgk8m5LmLdSLMY" />
    </Head>
  )
}
