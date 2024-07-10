import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/23383398/pexels-photo-23383398/free-photo-of-tuscany-in-spring.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="post card banner"
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/23383398/pexels-photo-23383398/free-photo-of-tuscany-in-spring.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar image"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Sudir</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat
          explicabo unde recusandae, obcaecati ullam eveniet nisi assumenda
          voluptatum distinctio quod commodi mollitia repellendus nesciunt
          blanditiis, temporibus cum esse possimus soluta iure, vero error
          quaerat. Laudantium sed officia aspernatur reiciendis.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
