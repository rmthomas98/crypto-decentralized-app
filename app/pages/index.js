import Head from "next/head";
import unicorn from '../public/images/unicorn.png';
import Image from 'next/image'

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

      <div className="homeContainer">
        <div className="container">
        <Image src={unicorn} />
        </div>
      </div>

    </div>
  );
};

export default Home;
