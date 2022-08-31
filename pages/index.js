import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const DynamicConfetti = dynamic(() => import("../components/CustomConfetti"));

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Happy Birthday Rafael!</title>
          <meta name="description" content="It's Rafael's anniversary!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Happy birthday, <strong>Rafael</strong>!
          </h1>

          <p className={styles.description}>
            Made with <code className={styles.code}>Next.js</code> by Ayres.
          </p>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
      <DynamicConfetti />
    </>
  );
}
