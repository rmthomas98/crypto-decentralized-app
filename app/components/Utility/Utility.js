import styles from "./Utility.module.css";
import Image from "next/image";
import planetOne from "../../public/images/planet-1.png";
import planetTwo from "../../public/images/planet-2.png";
import planetThree from "../../public/images/planet-3.png";

const Utility = () => {
  return (
    <div className={styles.wrapper} id="tokenomics">
      <div className={styles.container}>
        <p className={styles.header}>Tokenomics</p>
        <p className={styles.subHeader}>
          When you mint one of our NFTs, you will get so much more than just a
          cool unicorn.
        </p>
        <div className={styles.flexContainer}>
          <div className={styles.greenCard}>
            <div className={styles.greenImageContainer}>
              <Image src={planetOne} height={225} width={225} alt="planet" />
            </div>
            <p className={styles.cardTitle}>Giveaways</p>
            <p className={styles.cardDescription}>
              By owning a unicorn, you will be automatically entered in our
              weekly giveaways which will consist mostly of nodes.
            </p>
          </div>
          <div className={styles.redCard}>
            <div className={styles.redImageContainer}>
              <Image src={planetThree} height={225} width={225} alt="planet" />
            </div>
            <p className={styles.cardTitle}>Investments</p>
            <p className={styles.cardDescription}>
              Upon sellout, 50% of the money raised will be invested into nodes
              that will allow us to keep increasing the giveaway amounts.
            </p>
          </div>
          <div className={styles.purpleCard}>
            <div className={styles.purpleImageContainer}>
              <Image src={planetTwo} height={225} width={225} alt="planet" />
            </div>
            <p className={styles.cardTitle}>Distribution</p>
            <p className={styles.cardDescription}>
              40% of the money will be reinvested and 20% will go to the
              treasury which we will use for larger, less frequent giveaways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;
