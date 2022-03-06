import Head from "next/head";
import Nav from "../components/Nav/Nav.js";
import Banner from "../components/Banner.js";
import About from "../components/About/About.js";
import Utility from "../components/Utility/Utility.js";
import Map from "../components/Map/Map.js";
import Faq from "../components/Faq/Faq.js";
import Footer from "../components/Footer/Footer.js";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Unicorn Nodes NFT</title>
        <meta
          name="description"
          content="The Unicorn Node NFTs are a collection of 5,000 unique NFTs that are living on the ETH blockchain. Mint a Unicorn NFT, get exclusive access to weekly giveaways."
        />
        <meta
          name="keywords"
          content="nft, crypto, defi, unicorn nodes, giveaway, ethereum, nodes, passive income"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Nav />
      <Banner />
      <About />
      <Utility />
      <Map />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
