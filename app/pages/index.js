import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Utility from "../components/Utility/Utility";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Map from "../components/Map/Map";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import About from "../components/About/About";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Unicorn Node Club</title>
        <meta
          name="description"
          content="The Unicorn Node Club is a collection of 5,000 unique NFTs that are living on the ETH blockchain. Mint a Unicorn NFT, get exclusive access to weekly giveaways."
        />
        <meta
          name="keywords"
          content="nft, crypto, defi, unicorn node club, giveaway, ethereum, nodes, passive income"
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
            <ScrollLink
              to="about"
              offset={-57}
              smooth={true}
              className="viewMoreBtn"
            >
              Learn More
            </ScrollLink>
          </div>
          <div className="externalBtnContainer">
            <a
              href="https://discord.gg/TUHrMFAV"
              rel="noreferrer"
              target="_blank"
              className="subBtn"
              style={{ marginRight: 20 }}
            >
              <FaDiscord style={{ marginRight: 5 }} />
              Discord
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/UnicornNodeClub"
              className="subBtn"
            >
              <FaTwitter style={{ marginRight: 5 }} />
              Twitter
            </a>
            {/* <button className="subBtn">
              <GiSailboat style={{ marginRight: 5 }} />
              OpenSea
            </button> */}
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
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
