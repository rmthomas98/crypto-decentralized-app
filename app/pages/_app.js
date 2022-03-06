import "../styles/globals.css";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        id="my-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NGYV38LDGC`}
      ></Script>
      <Script strategy="lazyOnload" id="my-script-2">
        {`window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments);}
        gtag("js", new Date());

        gtag("config", "G-NGYV38LDGC");`}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
