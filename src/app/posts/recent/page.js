import styles from "@/app/page.module.css";

export default function RecentPosts() {
  const posts = [
    {
      title: "How to Make Soup",
      description: "Not with concrete",
    },
  ];

  return (
    <main className={styles.posts}>
      <h1>Inside of posts/recent</h1>
      {posts.map((post, i) => {
        return (
          <div key={i}>
            <h2>Post: {post.title}</h2>
            <p>Description: {post.description}</p>
          </div>
        );
      })}
    </main>
  );
}
