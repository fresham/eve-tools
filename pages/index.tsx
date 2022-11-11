import Head from "next/head";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eve Online Tools</title>
        <meta name="description" content="Eve Online Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Eve Online Tools</h1>
      </main>
    </div>
  );
}
