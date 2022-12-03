import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Posting Platform</title>
        <meta name="description" content="The Posts Platform helps you build a platform for users to create content." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Posting Platform
        </h1>

        <p className={styles.description}>
          Learn more
        </p>
      </main>

      <footer className={styles.footer}>
        The Posting Platform
      </footer>
    </div>
  )
}
