import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Utility from "../components/Utility/Utility";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Map from "../components/Map/Map";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import About from "../components/About/About";
import { Link as ScrollLink } from "react-scroll";

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
      <div className="homeContainer">
        <div className="container">
          <p className="title">The Unicorn Node Club</p>
          <p className="description">
            Welcome frens, The Unicorn Node Club is a NFT where you can generate
            passive income by winning weekly node giveaways!
          </p>
          <div className="btnContainer">
            <ScrollLink to="about" smooth={true} className="viewMoreBtn">
              Learn More
            </ScrollLink>
          </div>
          <div className="externalBtnContainer">
            <button className="subBtn">
              <FaDiscord style={{ marginRight: 5 }} />
              Discord
            </button>
            <button className="subBtn">
              <FaTwitter style={{ marginRight: 5 }} />
              Twitter
            </button>
            <button className="subBtn">
              <GiSailboat style={{ marginRight: 5 }} />
              OpenSea
            </button>
          </div>
        </div>
        <div className="chevronContainer">
          <HiOutlineChevronDoubleDown
            size={35}
            color="#fff"
            className="chevron"
          />
        </div>
      </div>
      <About />
      <Utility />
      <HowItWorks />
      <Map />
    </div>
  );
};

export default Home;
