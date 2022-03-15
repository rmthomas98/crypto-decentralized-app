import styles from "./Map.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiUnicorn, GiStakesFence } from "react-icons/gi";
import { FaEthereum } from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import { AiFillBank, AiFillGift } from "react-icons/ai";

const Map = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Roadmap</p>
        <p className={styles.subHeader}>This is the path we plan to take.</p>
        <VerticalTimeline lineColor="#ffffff31">
          <VerticalTimelineElement
            icon={<GiUnicorn />}
            iconStyle={{
              background: "#ffffff31",
              color: "#71ffff",
              backdropFilter: "blur(5px)",
              boxShadow: "none",
            }}
            contentStyle={{
              borderRadius: 14,
              background: "#00000031",
              border: "1px solid #71ffff",
              backdropFilter: "blur(5px)",
              boxShadow: "0px 0px 30px #71ffff51",
            }}
            contentArrowStyle={{ borderRight: "7px solid #71ffff" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Phase 1
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "#fff", fontWeight: 400 }}
            >
              Unicorn Mint
            </h4>
            <p style={{ color: "#fff", fontWeight: 300 }}>
              Whitelist mint and then full public mint of 5,000 unique unicorns.
              Mint price will be 0.05 ETH.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaEthereum />}
            iconStyle={{
              background: "#ffffff31",
              color: "#a94eff",
              backdropFilter: "blur(5px)",
              boxShadow: "none",
            }}
            contentStyle={{
              borderRadius: 14,
              background: "#00000031",
              border: "1px solid #a94eff",
              backdropFilter: "blur(5px)",
              boxShadow: "0px 0px 30px #a94eff71",
            }}
            contentArrowStyle={{ borderRight: "7px solid #a94eff" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Phase 2
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "#fff", fontWeight: 400 }}
            >
              ETH Giveaway
            </h4>
            <p style={{ color: "#fff", fontWeight: 300 }}>
              We will be doing an Ethereum giveaway to celebrate after the mint,
              total amount to be determined.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<MdLoop />}
            iconStyle={{
              background: "#ffffff31",
              color: "#4aff95",
              backdropFilter: "blur(5px)",
              boxShadow: "none",
            }}
            contentStyle={{
              borderRadius: 14,
              background: "#00000031",
              border: "1px solid #4aff95",
              backdropFilter: "blur(5px)",
              boxShadow: "0px 0px 30px #4aff9551",
            }}
            contentArrowStyle={{ borderRight: "7px solid #4aff95" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Phase 3
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "#fff", fontWeight: 400 }}
            >
              Node Looping
            </h4>
            <p style={{ color: "#fff", fontWeight: 300 }}>
              We will be taking 40% of the capital raised from the mint and
              investing it into a few different node projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<AiFillGift />}
            iconStyle={{
              background: "#ffffff31",
              color: "#ff8c4a",
              backdropFilter: "blur(5px)",
              boxShadow: "none",
            }}
            contentStyle={{
              borderRadius: 14,
              background: "#00000031",
              border: "1px solid #ff8c4a",
              backdropFilter: "blur(5px)",
              boxShadow: "0px 0px 30px #ff8c4a51",
            }}
            contentArrowStyle={{ borderRight: "7px solid #ff8c4a" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Phase 4
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "#fff", fontWeight: 400 }}
            >
              Weekly Giveaways
            </h4>
            <p style={{ color: "#fff", fontWeight: 300 }}>
              Nodes will be given out on a weekly basis to a number of unicorn
              owners. Rewards will be backed by node investments. Giveaways will
              get larger as time goes on.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<AiFillBank />}
            iconStyle={{
              background: "#ffffff31",
              color: "#ff4a4a",
              backdropFilter: "blur(5px)",
              boxShadow: "none",
            }}
            contentStyle={{
              borderRadius: 14,
              background: "#00000031",
              border: "1px solid #ff4a4a",
              backdropFilter: "blur(5px)",
              boxShadow: "0px 0px 30px #ff4a4a51",
            }}
            contentArrowStyle={{ borderRight: "7px solid #ff4a4a" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Phase 5
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "#fff", fontWeight: 400 }}
            >
              Treasury
            </h4>
            <p style={{ color: "#fff", fontWeight: 300 }}>
              The treasury will receive 20% of the rewards from the nodes
              whenever claimed. These funds will be used for larger giveaways.
              (more info soon)
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            icon={<GiStakesFence />}
            iconStyle={{
              background: "#ffffff31",
              color: "#ff00c3",
              backdropFilter: "blur(5px)",
              boxShadow: "none",
            }}
            contentStyle={{
              borderRadius: 14,
              background: "#00000031",
              border: "1px solid #ff00c3",
              backdropFilter: "blur(5px)",
              boxShadow: "0px 0px 30px #ff00c351",
            }}
            contentArrowStyle={{ borderRight: "7px solid #ff00c3" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Phase 6
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "#fff", fontWeight: 400 }}
            >
              NFT Staking
            </h4>
            <p style={{ color: "#fff", fontWeight: 300 }}>
              We will be launching our own ERC20 token. You will be able to stake your Unicorn to make passive income. The more unicorns you own, the more earning potential you will have.
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Map;
