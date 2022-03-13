import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.navTitle}>UnicornNodeClub</p>
        <div className={styles.linkContainer}>
          <p className={styles.link}>About</p>
          <p className={styles.link}>Utility</p>
          <p className={styles.link}>How it works</p>
          <p className={styles.link}>Roadmap</p>
          <p className={styles.link}>Faq</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
