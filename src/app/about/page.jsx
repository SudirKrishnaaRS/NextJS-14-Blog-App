import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We believe in good ideas flexiblity and precission. Our special team
          best consulting & finance solution provider. Wide range of web and
          software development services.{" "}
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Years of experiance</p>
          </div>

          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Years of experiance</p>
          </div>

          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Years of experiance</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About banner image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
