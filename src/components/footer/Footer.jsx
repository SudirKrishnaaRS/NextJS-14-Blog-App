import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SudoSage</div>
      <div className={styles.text}>
        Pixel dope agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
