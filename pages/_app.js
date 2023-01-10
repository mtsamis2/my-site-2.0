import './assets/css/main.css'
import Script from 'next/script'
import { GA_TRACKING_ID } from '../lib/gtag'

function MyApp({ Component, pageProps }) {

  return (
    <>
      {/* Google AdSense */}
      <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5287798851641238" crossorigin="anonymous" />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
          dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
        `}}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
