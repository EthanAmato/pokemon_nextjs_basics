import Image from "next/image";
import styles from "./page.module.css";

// This is the default page.
// It is in the root level of the App folder - meaning that when a user
// goes to the / route, they will 'routed' to this component:

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
    </main>
  );
}
