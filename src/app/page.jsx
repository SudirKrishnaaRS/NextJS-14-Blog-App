import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Pixel Dope Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus
          hic necessitatibus ab dicta atque.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <Link href="/about">Learn More</Link>
          </button>
          <button className={styles.button}>
            <Link href="/contact">Contact</Link>
          </button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="Brand logos"
            fill
            className={styles.brand}
          />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="hero banner"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
