import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function Robes({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            background: #ffffff;
            color: #000000;
            overflow-x: hidden;
          }
        `}
      </style>
      <Head>
        <title>xrobes.market</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ajwaxman" />
        <meta property="og:url" content="https://xrobes-market.vercel.app" />
        <meta property="og:title" content="xrobes.market" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content="See the floor price of Divine Robes from the xLoot project."
        />
        <meta property="og:image" content="https://xrobes-market.vercel.app/xrobes.png" />
      </Head>
    </>
  )
}

export default Robes
