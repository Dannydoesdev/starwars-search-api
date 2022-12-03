import Image from 'next/image'
import styles from './page.module.scss'
import variables from './variables.module.scss'

export default function Home() {
  return (
    <div className={styles.div}>
      <h1>Welcome to the Star Wars search engine</h1>
    </div>
  )
}
