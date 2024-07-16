import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache: "no-store",
    next: { revalidate: 3600 },
  });
  // NOTE:
  // - cache: NextJS by default caches the API responses, if don't want then explicitly mention
  // - next: It helps in caching and the you can revalidate after a particular duration like eg) each hour - 3600 sec
  if (!res.ok) {
    throw new Error("Something went wrong, Please try again");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();

  // console.log("first0", posts);
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
