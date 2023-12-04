import styles from "@/app/page.module.css";

export default function Posts() {
  const posts = [
    {
      title: "How to Make Soup",
      description: "Not with concrete",
    },
    {
      title: "How to Start a Car",
      description: "You'll need some keys",
    },
  ];

  return (
    <main className={styles.posts}>
      {posts.map((post) => {
        return (
          <>
            <h2>Post: {post.title}</h2>
            <p>Description: {post.description}</p>
          </>
        );
      })}
    </main>
  );
}
