import Image from "next/image"
import { useEffect, useState } from "react";
import styles from '../styles/Crawl.module.scss'
import Link from "next/link";

// Inspiration and parts of code taken from: https://cssanimation.rocks/starwars/ & 'reactified' by me

function Crawl() {

  const [show, setShow] = useState(false)

  const movieNameStr: string = 'The_Search_Engine'

  const arr = []

  useEffect(() => {
    setTimeout(() => setShow(true), 9500);
  }, []);

  const movieNameArr = movieNameStr.split('')

  return (
    <div className={styles.body}>
      {!show && <div className={styles.introCrawlMain}>
        <img className={styles.star} alt='Star' src='/img/star.svg' />
        <img className={styles.wars} alt='Wars' src='/img/wars.svg/' />

        <h2 className={styles.byline}>
          {movieNameArr.map((letter: string, index) => {
            return (
              letter == '_' ? <span key={index}>&nbsp;</span> : <span key={index}>{letter}</span>
            )
          })}
        </h2>
      </div>
      }

      {show &&
        <div className={styles.postCrawlMain}>
          <Link href='/home'>
            <button className={styles.enterButton}>Enter</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default Crawl;