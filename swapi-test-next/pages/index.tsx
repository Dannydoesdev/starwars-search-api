import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Key } from 'react'
import Film from '../components/HomePage/Film'
import { IndividualFilm } from '../interfaces'

type FilmListProps = {
  films: IndividualFilm[]
}

export async function getStaticProps() {
  const res = await fetch(`https://www.swapi.tech/api/films/`)
  const data = await res.json()

  return {
    props: {
      films: data.result
    },
    revalidate: 100,
  };
}

export function Home({ films }: FilmListProps) {
  // console.log(films)
  return (
    <div className={styles.div}>
      <Head>
        <title>Star Wars Search</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Star Wars Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the Star Wars search engine</h1>

      {films.map((film: any, index: Key | null | undefined) => {
        return (
          <Film
            key={index}
            title={film.properties.title}
            releaseYear={film.properties.release_date}
            director={film.properties.director}
            uid={film.uid}
          />
        )
        })}
    </div>
  )
}

export default Home;