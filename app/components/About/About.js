import styles from "./About.module.css";
import Image from "next/image";
import unicornOne from "../../public/images/unicornone.png";
import unicornTwo from "../../public/images/unicornTwo.png";
import unicornThree from "../../public/images/unicornThree.png";
import unicornFour from "../../public/images/unicornFour.png";
import unicornFive from "../../public/images/unicornfive.png";
import unicornSix from "../../public/images/unicornsix.png";
import unicornSeven from "../../public/images/unicornseven.png";
import unicornEight from "../../public/images/unicorneight.png";
import unicornNine from "../../public/images/unicornnine.png";
import unicornTen from "../../public/images/unicornTen.png";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className={styles.wrapper} id="about">
      <p className={styles.header}>About Unicorn Node Club</p>
      <div className={styles.container}>
        <p className={styles.description}>
          The Unicorn Node Club is a collection of 5,000 unique Unicorns that
          are living on the ETH network. These unicorns are very special
          though...they are not only the coolest looking unicorn ever, but they
          have so much more to offer you my fren!
        </p>
        <p className={styles.description}>
          By minting your very own unicorn, you will be entered into weekly,
          exclusive giveaways where you will have the chance of winning
          thousands of dollars worth of nodes. The nodes will generate passive
          income and will put you on the path to becoming financially free!
        </p>
      </div>
      <Marquee gradient={false} speed={100}>
        <div className={styles.imageContainer}>
          <Image src={unicornOne} layout="fixed" height={300} width={300} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={unicornTwo} layout="fixed" height={300} width={300} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={unicornThree} layout="fixed" height={300} width={300} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={unicornFour} layout="fixed" height={300} width={300} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={unicornFive} layout="fixed" height={300} width={300} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={unicornSix} layout="fixed" height={300} width={300} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={unicornSeven} layout="fixed" height={300} width={300} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={unicornTen} layout="fixed" height={300} width={300} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={unicornEight} layout="fixed" height={300} width={300} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={unicornNine} layout="fixed" height={300} width={300} />
        </div>
      </Marquee>
    </div>
  );
};

export default About;
