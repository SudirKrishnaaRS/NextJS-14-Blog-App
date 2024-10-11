import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://sudoblog.netlify.app/api/blog", {
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
  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

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
