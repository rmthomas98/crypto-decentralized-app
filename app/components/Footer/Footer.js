import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>UncornNodeClub</p>
        <p className={styles.copyright}>&copy; UnicornNodeClub 2022</p>
      </div>
    </div>
  );
};

export default Footer;
