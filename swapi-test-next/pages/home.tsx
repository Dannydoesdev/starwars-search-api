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
  const [selectedFavouriteId, setSelectedFavouriteId] = useState('')
  const [selectedFavouriteUrl, setSelectedFavouriteUrl] = useState('')

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

  const handleFavouriteClick = (key: string, value: string) => {
    setSelectedFavouriteId(key)
    setSelectedFavouriteUrl(value)
  }

  useEffect(() => {
    console.log(selectedFavouriteId)
    if (selectedFavouriteUrl == '') return

    // setCurrentFavourites(
    //   currentFavourites.filter((favourite: any) => favourite !== '')
    // )
    if (currentFavourites.includes(selectedFavouriteUrl)) {
      console.log('Item already stored... removing')
      console.log(selectedFavouriteId)
      localStorage.removeItem(selectedFavouriteId)

      setCurrentFavourites(
        currentFavourites.filter((favourite: any) => favourite !== selectedFavouriteUrl && favourite !== '')
      )

    } else if (!currentFavourites.includes(selectedFavouriteUrl)) {

      localStorage.setItem(selectedFavouriteId, selectedFavouriteUrl)
      setCurrentFavourites(
        [selectedFavouriteUrl, ...currentFavourites]
      )
    }
    setSelectedFavouriteId('')
    setSelectedFavouriteUrl('')

  }, [selectedFavouriteId, selectedFavouriteUrl])

  return (
    <div className={styles.div}>
    
      {/* <NavBar /> */}
      <h1>Welcome to the Star Wars search engine</h1>
      <div className={styles.movieGrid}>
      {currentFavourites.length >= 1 && <h2 className={styles.heading}>Favourites</h2>}
      {films.map((film: any, index: Key | null | undefined) => {
        return (
          currentFavourites.includes(film.properties.url) &&
          <div key={index}>
            {/* {currentFavourites.includes(film.properties.url) && */}
              <Film
                title={film.properties.title}
                releaseYear={film.properties.release_date}
                director={film.properties.director}
                uid={film.uid}
                url={film.properties.url}
                onFavourite={handleFavouriteClick}
                alreadyFavourited={true}
              />
            </div>
          
        )
      })}
      <h2 className={styles.heading}>Movie List</h2>

      {films.map((film: any, index: Key | null | undefined) => {
        return (
          !currentFavourites.includes(film.properties.url) &&
          <div key={index}>
            
              <Film
                title={film.properties.title}
                releaseYear={film.properties.release_date}
                director={film.properties.director}
                uid={film.uid}
                url={film.properties.url}
                onFavourite={handleFavouriteClick}
                alreadyFavourited={false}
              />

            
          </div>
        )
      })}
        </div>
    </div>
  )
}

export default Home;