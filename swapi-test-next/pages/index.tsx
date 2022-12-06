import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Key, useEffect, useState } from 'react'
import Film from '../components/HomePage/Film'
import { IndividualFilm } from '../interfaces'
// import useLocalStorage from '../hooks/useLocalStorage.js'

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
  const [favourite, setFavourite] = useState('')
  const [id, setId] = useState('')
  const [url, setUrl] = useState('')
  // const [isFavourite, setIsFavourite] = useState<string>('is favourite')
  // const [isNotFavourite, setIsNotFavourite] = useState<string>('is not a favourite')

  const [isFavourite, setIsFavourite] = useState<boolean>(false)
  const [isNotFavourite, setIsNotFavourite] = useState<boolean>(true)


  useEffect(() => {
   const filmArray: any = []

    films.map((film: any, index: Key | null | undefined) => {
      const stored = localStorage.getItem(film.uid)

      if (stored) {
        filmArray.push(stored)
      }
     
      setCurrentFavourites(filmArray)

    })
    console.log(currentFavourites)
    // return currentFavourites
  }, [])
  console.log(currentFavourites)

  const handleFavourite = (key: string, value: string) => {
      // const [favourite, setFavourite] = useState('');
      // console.log('useLocalStorage called')

          // setFavourite(value)
    setId(key)
    setUrl(value)
      // useEffect(() => {
        // console.log('useEffect')
          // const stored = localStorage.getItem(key)
          const stored = localStorage.getItem(id)
 
      if (stored) {
        console.log('Item already stored... removing')
        setFavourite('Favourite removed')
          localStorage.removeItem(id)
          // localStorage.removeItem(key)
         
      } else {
        console.log('Item not stored... adding')
        setFavourite('Favourite saved')
          localStorage.setItem(id, url)

        }
     return favourite
  
    }
  // console.log(films)

  // const [favourite, setFavourite] = useState('')
  // const [id, setId] = useState('')

  // function onFavourite(id: string, url: string) {
  //   setFavourite(url)
  //   setId(id)
  //   useLocalStorage(id, favourite)
  // }

  // console.log(currentFavourites.includes(film.properties.url))
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
       
          <Film
            // key={index}
            isCurrentFavourite={currentFavourites.includes(film.properties.url) ? true : false}
            title={film.properties.title}
            releaseYear={film.properties.release_date}
            director={film.properties.director}
            uid={film.uid}
            url={film.properties.url}
            // onFavourite={useLocalStorage(film.uid, film.properties.url)}
            // onFavourite={useLocalStorage}
            onFavourite={handleFavourite}
            // onClick={() => onFavourite(film.uid, film.properties.url)}
          />
            </div>
        )
        })}
    </div>
  )
}

export default Home;