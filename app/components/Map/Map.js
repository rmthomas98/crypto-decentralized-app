import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Map.module.css";
import { GiUnicorn } from "react-icons/gi";
import { FaEthereum } from "react-icons/fa";
import { BsHexagonHalf } from "react-icons/bs";
import { AiFillGift, AiFillBank } from "react-icons/ai";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Map = () => {
  return (
    <div className={styles.wrapper} id="map">
      <div className={styles.container}>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <p className={styles.title}>Road Map</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <p className={styles.description}>This is the path we will follow.</p>
        </ScrollAnimation>
        <VerticalTimeline className={styles.mapContainer} lineColor="#d2d4da">
          <VerticalTimelineElement
            contentStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0px 5px 40px #00000021",
              borderRadius: 14,
              animationDuration: "1.5s",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ background: "#f6f8ff", color: "#ff468a" }}
            icon={<GiUnicorn />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: 15, color: "#ff468a" }}
            >
              Phase 1
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: 18 }}
            >
              Unicorn Mint
            </h4>
            <p style={{ marginTop: 2 }}>
              Whitelist mint and then full public mint of 5,000 unique unicorns.
              Mint price will be 0.05 ETH.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0px 5px 40px #00000021",
              borderRadius: 14,
              animationDuration: "1.5s",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ background: "#f6f8ff", color: "#37367b" }}
            icon={<FaEthereum />}
            position="right"
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: 15, color: "#37367b" }}
            >
              Phase 2
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: 18 }}
            >
              ETH Giveaway
            </h4>
            <p style={{ marginTop: 2 }}>
              We will be doing an Ethereum giveaway to celebrate after the mint, total amount to be determined.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0px 5px 40px #00000021",
              borderRadius: 14,
              animationDuration: "1.5s",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ background: "#f6f8ff", color: "#d571ff" }}
            icon={<BsHexagonHalf />}
            position="left"
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: 15, color: "#d571ff" }}
            >
              Phase 3
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: 18 }}
            >
              Node Investments
            </h4>
            <p style={{ marginTop: 2 }}>
              We will be taking 50% of the capital raised from the mint and
              investing it into a few different node projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0px 5px 40px #00000021",
              borderRadius: 14,
              animationDuration: "1.5s",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ background: "#f6f8ff", color: "#69cbe9" }}
            icon={<AiFillGift />}
            position="right"
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: 15, color: "#69cbe9" }}
            >
              Phase 4
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: 18 }}
            >
              Weekly Giveaways
            </h4>
            <p style={{ marginTop: 2 }}>
              Nodes will be given out on a weekly basis to a number of unicorn
              owners. Rewards will be backed by node investments. Giveaways will
              get larger as time goes on.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0px 5px 40px #00000021",
              borderRadius: 14,
              animationDuration: "1.5s",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ background: "#f6f8ff", color: "#69e9ad" }}
            icon={<AiFillBank />}
            position="left"
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: 15, color: "#69e9ad" }}
            >
              Phase 5
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: 18 }}
            >
              Treasury
            </h4>
            <p style={{ marginTop: 2 }}>
              The treasury will receive 20% of the rewards from the nodes
              whenever claimed. These funds will be used for larger giveaways.
              (more info soon)
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            contentStyle={{
              background: "#f6f8ff",
              color: "#000",
              boxShadow: "0px 5px 40px #00000024",
              borderRadius: 14,
              animationDuration: '1.5s'
            }}
            contentArrowStyle={{ borderRight: "7px solid  #f6f8ff" }}
            iconStyle={{ background: "#f6f8ff", color: "#ffa500" }}
            icon={<GiTwoCoins />}
            position="right"
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: 15, color: "#ffa500" }}
            >
              Phase 6
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: 18 }}
            >
              Generation 2.0
            </h4>
            <p style={{ marginTop: 2 }}>
              Gen 2 NFT Collection. Token launch and NFT staking for extra rewards will be in the works. V1 unicorn owners will have extra benefits.
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Map;
