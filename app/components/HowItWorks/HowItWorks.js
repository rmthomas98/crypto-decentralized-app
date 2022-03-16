import styles from "./HowItWorks.module.css";
import blockchain from "../../src/crypto-blockchain.json";
import Lottie from "lottie-react";

const HowItWorks = () => {
  return (
    <div className={styles.wrapper} id="how-it-works">
      <div className={styles.container}>
        <p className={styles.header}>How it works</p>
        <p className={styles.subHeader}>
          Step by Step Process on How the Unicorn Node Club operates.
        </p>
        <Lottie animationData={blockchain} loop className={styles.blockChain} />
        <div className={styles.stepContainerWrapper}>
          <div className={styles.stepContainer}>
            <p className={styles.step}>01</p>
            <p className={styles.stepTitle}>Mint a Unicorn NFT</p>
            <p className={styles.stepDescription}>
              To be apart of The Unicorn Node Club, you will have to mint a
              Unicorn NFT during our mint event! You will get access to an
              exclusive community where we can all hangout, share ideas, and
              much more. The exact date of the mint will be announced very soon.
            </p>
          </div>
        </div>
        <div className={styles.stepContainerWrapper}>
          <div className={styles.stepContainer}>
            <p className={styles.step}>02</p>
            <p className={styles.stepTitle}>Giveaways</p>
            <p className={styles.stepDescription}>
              By simply owning one of our Unicorn NFTs, you will be
              automatically entered into our weekly node giveaways! 1 Unicorn
              NFT = 1 giveaway entry. This means that the more Unicorn NFTs you
              have, the higher your chance of winning is! There will be multiple
              winners every week.
            </p>
          </div>
        </div>
        <div className={styles.stepContainerWrapper}>
          <div className={styles.stepContainer}>
            <p className={styles.step}>03</p>
            <p className={styles.stepTitle}>Compound Investments</p>
            <p className={styles.stepDescription}>
              When you win one of our giveaways, you will be given the amount of
              $ it costs to create the node that you won. Once you create the
              node, it will generate you money daily which can be claimed as
              often as you like! You will then be able to compound and buy more
              nodes which will increase the amount of passive income you are
              making over time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
