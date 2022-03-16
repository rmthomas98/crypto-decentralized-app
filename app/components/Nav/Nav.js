import styles from "./Nav.module.css";
import useScrollPosition from "@react-hook/window-scroll";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { useWindowWidth } from "@react-hook/window-size";

const Nav = () => {
  const scrollY = useScrollPosition(60);
  const [isActive, setIsActive] = useState(false);
  const width = useWindowWidth();

  // check for width change
  useEffect(() => {
    // if width greater than or equal to 800
    // hide drop down menu
    if (width >= 800) setIsActive(false);
  }, [width]);

  return (
    <div
      className={styles.wrapper}
      style={
        scrollY > 10 || isActive
          ? { borderBottom: "1px solid #ffffff1f" }
          : { borderBottom: "1px solid transparent" }
      }
    >
      <div className={styles.container}>
        <p
          onClick={() => animateScroll.scrollToTop()}
          className={styles.navTitle}
          style={{ cursor: "pointer" }}
        >
          UnicornNodeClub
        </p>
        <div className={styles.linkContainer}>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-57}
            className={styles.link}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="tokenomics"
            smooth
            offset={-57}
            className={styles.link}
          >
            Tokenomics
          </ScrollLink>
          <ScrollLink
            smooth
            to="how-it-works"
            offset={-57}
            className={styles.link}
          >
            How it works
          </ScrollLink>
          <ScrollLink smooth to="map" offset={-57} className={styles.link}>
            Roadmap
          </ScrollLink>
          <ScrollLink smooth to="faq" offset={-57} className={styles.link}>
            FAQ
          </ScrollLink>
<<<<<<< HEAD
          <Link href="/whitelist">
            <a className={styles.link}>WL</a>
          </Link>
        </div>
        <div className={styles.btnContainer}>
          <a
            href="https://twitter.com/UnicornNodeClub"
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
=======
>>>>>>> test
        </div>
        {isActive ? (
          <IoMdClose
            className={styles.close}
            color="#fff"
            onClick={() => setIsActive(false)}
          />
        ) : (
          <MdOutlineMenu
            color="#fff"
            className={styles.menu}
            onClick={() => setIsActive(true)}
          />
        )}
      </div>
      <div
        className={styles.dropdownMenu}
        style={
          isActive
            ? { maxHeight: 551, paddingTop: 20, opacity: 1 }
            : { maxHeight: 0, paddingTop: 0, opacity: 0 }
        }
      >
        <ScrollLink
          to="about"
          smooth
          offset={-57}
          className={styles.dropdownLink}
          onClick={() => setIsActive(false)}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="tokenomics"
          smooth
          offset={-57}
          className={styles.dropdownLink}
          onClick={() => setIsActive(false)}
        >
          Tokenomics
        </ScrollLink>
        <ScrollLink
          to="how-it-works"
          smooth
          offset={-57}
          className={styles.dropdownLink}
          onClick={() => setIsActive(false)}
        >
          How It Works
        </ScrollLink>
        <ScrollLink
          to="map"
          smooth
          offset={-57}
          className={styles.dropdownLink}
          onClick={() => setIsActive(false)}
        >
          Roadmap
        </ScrollLink>
        <ScrollLink
          to="faq"
          smooth
          offset={-57}
          className={styles.dropdownLink}
          onClick={() => setIsActive(false)}
        >
          Faq
        </ScrollLink>
        <div
          className={styles.btnContainer}
          style={{ margin: "auto", marginTop: 10 }}
        >
          <a
            href="https://discord.gg/TUHrMFAV"
            rel="noreferrer"
            target="_blank"
            className="subBtn"
            style={{ width: 200, justifyContent: "center" }}
          >
            <FaDiscord style={{ marginRight: 5 }} />
            Discord
          </a>
        </div>
        <div
          className={styles.btnContainer}
          style={{ margin: "auto", marginTop: 20, marginBottom: 20 }}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/UnicornNodeClub"
            className="subBtn"
            style={{ width: 200, justifyContent: "center" }}
          >
            <FaTwitter style={{ marginRight: 5 }} />
            Twitter
          </a>
        </div>
<<<<<<< HEAD
        <a
          href="https://twitter.com/UnicornNodeClub"
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
=======
>>>>>>> test
      </div>
    </div>
  );
};

export default Nav;
