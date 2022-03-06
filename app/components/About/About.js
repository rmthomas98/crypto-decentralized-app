import unicorn from "../../public/images/unicorn.png";
import styles from "./About.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.wrapper} id="about">
      <div className={styles.container}>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div className={styles.unicorn}>
            <Image
              src={unicorn}
              alt="unicorn node NFT"
              layout="fixed"
              height={350}
              width={350}
              quality={80}
            />
          </div>
        </ScrollAnimation>
        <div>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <p className={styles.title}>About</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            style={{ marginBottom: 20 }}
          >
            <p className={styles.description}>
              Unicorn Nodes are a collection of 5,000 unique Unicorns that are
              living on the ETH network. These unicorns are very special
              though...they are not only the coolest looking unicorn ever, but
              they have so much more to offer to you!
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <p className={styles.description}>
              By minting your very own unicorn, you will be entered into weekly,
              exclusive giveaways where you will have the chance of winning
              thousands of dollars worth of nodes. The nodes will generate
              passive income and will help you reach financial freedom!
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default About;
