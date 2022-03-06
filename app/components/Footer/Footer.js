import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Unicorn Nodes NFT</div>
        <p className={styles.copyright}>&copy; Unicorn Nodes 2022</p>
      </div>
    </div>
  );
};

export default Footer;
