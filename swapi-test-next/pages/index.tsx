import Head from 'next/head'
import styles from './page.module.scss'
import variables from './variables.module.scss'

export default function Home() {
  return (
    <div className={styles.div}>
      <Head>
        <title>Star Wars Search</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Star Wars Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the Star Wars search engine</h1>
    </div>
  )
}
