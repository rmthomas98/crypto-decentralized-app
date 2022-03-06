import styles from "./Nav.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import useScrollPosition from "@react-hook/window-scroll";
import { CgMenuGridO } from "react-icons/cg";
import { useEffect, useState } from "react";
import { BiExitFullscreen } from "react-icons/bi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useWindowWidth } from "@react-hook/window-size";
import Link from "next/link";

const Nav = () => {
  // get scroll position
  const scrollY = useScrollPosition(60);

  // burger menu
  const [isActive, setIsActive] = useState(false);

  // get window width
  const width = useWindowWidth();

  // check for width change
  useEffect(() => {
    // if width greater than or equal to 800
    // hide drop down menu
    if (width >= 800) setIsActive(false);
  }, [width]);

  const handleTitleClick = () => {
    setIsActive(false);
    scroll.scrollToTop();
  };

  return (
    <div
      className={styles.wrapper}
      style={
        scrollY > 10
          ? { boxShadow: "0px 3px 10px #00000031" }
          : { boxShadow: "none" }
      }
    >
      <div className={styles.container}>
        <p className={styles.title} onClick={handleTitleClick}>
          Unicorn Nodes
        </p>
        <div className={styles.linkContainer}>
          <ScrollLink
            to="about"
            smooth={true}
            style={{ marginRight: 20 }}
            offset={-71}
            className={styles.link}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="utility"
            smooth={true}
            offset={-71}
            style={{ marginRight: 20 }}
            className={styles.link}
          >
            Utility
          </ScrollLink>
          <ScrollLink
            to="map"
            smooth
            offset={-71}
            style={{ marginRight: 20 }}
            className={styles.link}
          >
            Map
          </ScrollLink>
          <ScrollLink
            to="faq"
            smooth
            offset={-71}
            className={styles.link}
            style={{ marginRight: 20 }}
          >
            FAQ
          </ScrollLink>
          <Link href="/whitelist">
            <a className={styles.link}>WL</a>
          </Link>
        </div>
        <div className={styles.btnContainer}>
          <a
            href="https://twitter.com/UnicornNodesNFT"
            target="_blank"
            rel="noreferrer"
            className={styles.twitterBtn}
          >
            <AiOutlineTwitter style={{ marginRight: 5 }} size={16} />
            Twitter
          </a>
          <a
            href="https://discord.gg/TApxAGAw"
            target="_blank"
            rel="noreferrer"
            className={styles.discordBtn}
          >
            <FaDiscord style={{ marginRight: 5 }} size={16} />
            Discord
          </a>
        </div>
        {!isActive ? (
          <CgMenuGridO
            className={styles.menu}
            onClick={() => setIsActive(true)}
          />
        ) : (
          <BiExitFullscreen
            className={styles.menu}
            style={{ transform: "rotate(45deg)" }}
            onClick={() => setIsActive(false)}
          />
        )}
      </div>
      <div
        className={styles.dropDownMenu}
        style={{
          top: width > 480 ? 71 : 56,
          maxHeight: isActive ? 500 : 0,
          transition: isActive ? "1s ease" : "500ms ease",
        }}
      >
        <div className={styles.dropDownLinkContainer}>
          <ScrollLink
            to="about"
            offset={width > 480 ? -71 : -56}
            smooth
            onClick={() => setIsActive(false)}
            className={styles.dropDownLink}
          >
            About
          </ScrollLink>
        </div>
        <div className={styles.dropDownLinkContainer}>
          <ScrollLink
            to="utility"
            offset={width > 480 ? -71 : -56}
            smooth
            onClick={() => setIsActive(false)}
            className={styles.dropDownLink}
          >
            Utility
          </ScrollLink>
        </div>
        <div className={styles.dropDownLinkContainer}>
          <ScrollLink
            to="map"
            offset={width > 480 ? -71 : -56}
            smooth
            onClick={() => setIsActive(false)}
            className={styles.dropDownLink}
          >
            Map
          </ScrollLink>
        </div>
        <div className={styles.dropDownLinkContainer}>
          <ScrollLink
            to="faq"
            offset={width > 480 ? -71 : -56}
            smooth
            onClick={() => setIsActive(false)}
            className={styles.dropDownLink}
          >
            FAQ
          </ScrollLink>
        </div>
        <div className={styles.dropDownLinkContainer}>
          <Link href="/whitelist">
            <a className={styles.dropDownLink} style={{ marginBottom: 10 }}>
              Whitelist
            </a>
          </Link>
        </div>
        <a
          href="https://twitter.com/UnicornNodesNFT"
          target="_blank"
          rel="noreferrer"
          className={styles.twitterBtn}
          style={{
            marginRight: 0,
            maxWidth: 250,
            margin: "auto",
            marginBottom: 20,
            paddingTop: 10,
            paddingBottom: 10,
            width: "100%",
          }}
        >
          <AiOutlineTwitter style={{ marginRight: 5 }} size={16} />
          Twitter
        </a>
        <a
          href="https://discord.gg/TApxAGAw"
          target="_blank"
          rel="noreferrer"
          className={styles.discordBtn}
          style={{
            width: "100%",
            maxWidth: 250,
            margin: "auto",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <FaDiscord style={{ marginRight: 5 }} size={16} />
          Discord
        </a>
        <div style={{ marginBottom: 30 }}></div>
      </div>
    </div>
  );
};

export default Nav;
