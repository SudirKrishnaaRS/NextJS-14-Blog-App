import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        {/* Traditional */}
        {/* <img src="./about.png" /> */}

        {/* NextJS Image tag */}
        {/* <Image src="/about.png" width={500} height={500} /> */}

        {/* NextJS Image tag : When used inside a container */}
        {/* <Image src="/about.png" fill /> */}

        {/* NextJS Image tag : Handling External Images */}
        <Image
          src="https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
