// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Font
import "@/styles/font/flaticon_mycollection.css";

// Vendor
import "@/styles/vendor/animate.css";
import "@/styles/vendor/jquery.fancybox.min.css";
import "@/styles/vendor/nice-select.css";
import "@/styles/vendor/swiper.css";

// Global
import "@/styles/globals.css";


import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <meta charSet="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Premium Transitz - Index</title>
              <link rel="icon" href="/assets/img/favicon.png"/>
          </Head>
          <Header />
          <Script
              src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}&libraries=places`}
              strategy={"beforeInteractive"}
          ></Script>
          <Component {...pageProps} />
          <Footer />
          <Script src="/assets/js/jquery-3.6.0.min.js" strategy={"beforeInteractive"}></Script>
          <Script src="/assets/js/bootstrap.min.js"></Script>
          <Script src="/assets/js/jquery.fancybox.min.js"></Script>
          <Script src="/assets/js/jquery.nice-select.min.js"></Script>
          <Script src="/assets/js/swiper.js"></Script>
          <Script src="/assets/js/wow.min.js" strategy={"beforeInteractive"}></Script>
          <Script src="/assets/js/custom.js"></Script>
          <Script src="/assets/js/sweetalert.min.js"></Script>
          <Script src="/assets/js/contact.js"></Script>
      </>
  );
}
