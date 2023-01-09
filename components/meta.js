import Head from 'next/head'
import { gtag, GA_TRACKING_ID } from '../lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

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

      <link rel="stylesheet" href="/styles/assets/css/main.css" />
      <script src="/styles/assets/js/jquery.min.js" />
      <script src="/styles/assets/js/skel.min.js" />
      <script src="/styles/assets/js/util.js" />
      <script src="/styles/assets/js/main.js" />
      {/* Google Search Console */}
      <meta name="google-site-verification" content="9cIjLHNbjwsAGc0xOD498waalz2pWlgk8m5LmLdSLMY" />
      {/* Google AdSense */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5287798851641238" crossorigin="anonymous"></script>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
      <script
          dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
      `}}
      />
    </Head>
  )
}
