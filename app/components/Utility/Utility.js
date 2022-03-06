import styles from "./Utility.module.css";
import { AiFillGift, AiFillFilter, AiFillPieChart } from "react-icons/ai";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const RoadMap = () => {
  return (
    <div className={styles.wrapper} id="utility">
      <div className={styles.container}>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <p className={styles.title}>Utility</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <p className={styles.description}>
            You are getting so much more than just the coolest unicorn ever.
          </p>
        </ScrollAnimation>
        <div className={styles.flexContainer}>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            className={styles.flexItem}
          >
            <div className={styles.giftIconContainer}>
              <AiFillGift size={26} />
            </div>
            <p className={styles.flexItemTitle}>Exclusive Giveaways</p>
            <p className={styles.flexItemDescription}>
              By owning a unicorn, you will be automatically entered in our
              weekly giveaways which will consist mostly of nodes.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            className={styles.flexItem}
          >
            <div className={styles.funnelIconContainer}>
              <AiFillFilter size={26} />
            </div>
            <p className={styles.flexItemTitle}>Money Funnel</p>
            <p className={styles.flexItemDescription}>
              Upon sellout, 50% of the money raised will be invested into nodes
              that will allow us to keep increasing the giveaway amounts.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            className={styles.flexItem}
          >
            <div className={styles.pieIconContainer}>
              <AiFillPieChart size={26} />
            </div>
            <p className={styles.flexItemTitle}>Distribution</p>
            <p className={styles.flexItemDescription}>
              40% of the money will be reinvested and 20% will go to the
              treasury which we will use for larger, less frequent giveaways.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
