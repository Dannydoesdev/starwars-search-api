import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Key, useEffect, useState } from 'react'
import Film from '../components/HomePage/Film'
import { IndividualFilm } from '../interfaces'
import { useApiSearch } from '../hooks/useApiSearch'


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

  const [currentFavourites, setCurrentFavourites] = useState<any>([])
  const [id, setId] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    const filmArray: any = []

    films.map((film: any, index: Key | null | undefined) => {
      if (film == '') return
      const stored = localStorage.getItem(film.uid)

      if (stored) {
        filmArray.push(stored)
      }
      setCurrentFavourites(filmArray)
    })

  }, [])

  const handleFavouriteNew = (key: string, value: string) => {
    setId(key)
    setUrl(value)
  }

  useEffect(() => {

    if (url == '') return

    setCurrentFavourites(
      currentFavourites.filter((favourite: any) => favourite !== '')
    )
    if (currentFavourites.includes(url)) {
      console.log('Item already stored... removing')
      localStorage.removeItem(id)

      setCurrentFavourites(
        currentFavourites.filter((favourite: any) => favourite !== url && favourite !== '')
      )

    } else if (!currentFavourites.includes(url)) {

      localStorage.setItem(id, url)
      setCurrentFavourites(
        [url, ...currentFavourites]
      )
    }

    setId('')
    setUrl('')

  }, [id, url])

  // let searchResult = useApiSearch('films', 'title', 'strikes')
  // console.log(searchResult)

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
          <div key={index}>
            {currentFavourites.includes(film.properties.url) ? <p color='red'>Local Fave</p> : <p>Not local fave</p>}
            <Film
              // isCurrentFavourite={currentFavourites.includes(film.properties.url) ? true : false}
              title={film.properties.title}
              releaseYear={film.properties.release_date}
              director={film.properties.director}
              uid={film.uid}
              url={film.properties.url}
              onFavourite={handleFavouriteNew}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Home;