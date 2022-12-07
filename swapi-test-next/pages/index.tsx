import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Key, SetStateAction, useEffect, useState } from 'react'
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
  const [favourite, setFavourite] = useState(null)
  const [id, setId] = useState('')
  const [url, setUrl] = useState('')
  // const [isFavourite, setIsFavourite] = useState<string>('is favourite')
  // const [isNotFavourite, setIsNotFavourite] = useState<string>('is not a favourite')

  const [isFavourite, setIsFavourite] = useState<boolean>(false)
  const [isNotFavourite, setIsNotFavourite] = useState<boolean>(true)
  // const [clickValue, setClickValue] = useState('');

  const [localStorageFavourites, setLocalStorageFavourites] = useState<any>([])

  // const [newFavourite, setNewFavourite] = useState<any>()

  // const handleClick = (url: any) => {
  //   console.log(url)
  //   console.log(localStorageFavourites)
  //   // localStorageFavourites ? setCurrentFavourites(localStorageFavourites) : setCurrentFavourites('')
  //   if (localStorageFavourites) {
  //     setCurrentFavourites([url, ...localStorageFavourites])
  //   }
    
  //   console.log(currentFavourites)
  //   setClickValue(url)
  //   console.log(clickValue)
  //   // currentFavourites.includes(clickValue) ? 
  //   // setCurrentFavourites([clickValue, ...currentFavourites])
    
  //   if (!currentFavourites) {
  //     setCurrentFavourites(url)
  //     console.log(currentFavourites)
  //   } else if (currentFavourites.includes(url)) {
  //     let newFavourites = currentFavourites.filter((favourite: any) => favourite !== clickValue);
      
  //     console.log(`new faves ${newFavourites}`)


  //     // setCurrentFavourites(newFavourites)
  //     console.log(newFavourites)
  //     localStorage.setItem('favourites', JSON.stringify(newFavourites));
  //   } else if (!(currentFavourites.includes(url))) {
  //     setCurrentFavourites([clickValue, ...currentFavourites])
  //     console.log(currentFavourites)
  //     let newFavourites = ([clickValue, ...currentFavourites])
  //       localStorage.setItem('favourites', JSON.stringify(newFavourites));
  //     // localStorage.setItem('favourites', JSON.stringify(currentFavourites));
  //   }
  //     console.log(currentFavourites)
  // }

  // useEffect(() => {
  //   const faves = localStorage.getItem('favourites')

  //   if (faves) {
  //     console.log(faves)
  //     const localFaves = JSON.parse(faves)
  //     setCurrentFavourites(localFaves)
  //     console.log(localFaves)
  //     setLocalStorageFavourites(localFaves);
     
  //     console.log(localStorageFavourites)
  //   }
  //   console.log(localStorageFavourites)
	// }, []);

  // useEffect(() => {
  //   // if (!clickValue) return
  //   console.log(`faves before set ${currentFavourites}`)
  //   localStorage.setItem('favourites', JSON.stringify(currentFavourites));
  //   // if (currentFavourites.includes(clickValue)) {
  //   //   let newFavourites = currentFavourites.filter((favourite: any) => favourite !== clickValue);
      
  //   //   setCurrentFavourites(newFavourites)
  //   //   console.log(newFavourites)
  //   //   localStorage.setItem('favourites', JSON.stringify(currentFavourites));
  //   // } else if (!(currentFavourites.includes(clickValue))) {
  //   //   setCurrentFavourites([clickValue, ...currentFavourites])
  //   //   console.log(currentFavourites)
  //   //   localStorage.setItem('favourites', JSON.stringify(currentFavourites));
  //   // }
  // }, [currentFavourites]);


  useEffect(() => {
   const filmArray: any = []

    films.map((film: any, index: Key | null | undefined) => {
      if (film == '') return
      // const parseUrl = JSON.stringify(film.uid)
      const stored = localStorage.getItem(film.uid)
      // const stored = localStorage.getItem(parseUrl)
      // const parseStored = JSON.stringify(stored)

      if (stored) {
        console.log('No movies found')
        filmArray.push(stored)
      }
     
      setCurrentFavourites(filmArray)
      console.log(filmArray)

    })
    console.log(currentFavourites)
    // return currentFavourites
  }, [])
  console.log(currentFavourites)

  const handleFavouriteNew = (key: string, value: string) => {
    // const [favourite, setFavourite] = useState('');
    // console.log('useLocalStorage called')
    console.log(`clicked: ${key} & ${value}`)
    // setFavourite(value)
    setId(key)
    setUrl(value)
    
  }

    useEffect(() => {
      console.log('useEffect')
      // const storedNoParse = localStorage.getItem(id)
      // const stored = JSON.parse((storedNoParse) || '')
       if (url == '') return
        // const stored = localStorage.getItem('favourites')
        setCurrentFavourites(
          currentFavourites.filter((favourite: any) => favourite !== '')
        )
      console.log(currentFavourites)
    if (currentFavourites.includes(url)) {
      console.log('Item already stored... removing')


        localStorage.removeItem(id)

        console.log(currentFavourites.filter((favourite: any) => favourite !== url))
        setCurrentFavourites(
          currentFavourites.filter((favourite: any) => favourite !== url && favourite !== '')
        )
      
    } else if (!currentFavourites.includes(url)) {
      console.log('Item not stored... adding')


      
      const parseUrl = JSON.stringify(url)
      localStorage.setItem(id, url)
        setCurrentFavourites(
          [url, ...currentFavourites]
        )
    }
      
      setId('')
      setUrl('')
  //  return favourite

  }, [id,url])

  // const handleFavourite = (key: string, value: string) => {
  //     // const [favourite, setFavourite] = useState('');
  //     // console.log('useLocalStorage called')

  //         // setFavourite(value)
  //   setId(key)
  //   setUrl(value)
  //     // useEffect(() => {
  //       // console.log('useEffect')
  //         // const stored = localStorage.getItem(key)
  //         const stored = localStorage.getItem(id)
 
  //     if (stored) {
  //       console.log('Item already stored... removing')
  //       setFavourite('Favourite removed')
  //         localStorage.removeItem(id)
  //         // localStorage.removeItem(key)
         
  //     } else {
  //       console.log('Item not stored... adding')
  //       setFavourite('Favourite saved')
  //         localStorage.setItem(id, url)

  //       }
  //    return favourite
  
  //   }




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
            {currentFavourites.includes(film.properties.url) ? <p color='red'>Local Fave</p> : <p>Not local fave</p>}
          <Film
            // key={index}
            // isCurrentFavourite={currentFavourites.includes(film.properties.url) ? true : false}
            title={film.properties.title}
            releaseYear={film.properties.release_date}
            director={film.properties.director}
            uid={film.uid}
            url={film.properties.url}
            // onFavourite={useLocalStorage(film.uid, film.properties.url)}
            // onFavourite={useLocalStorage}
              // onFavourite={handleFavourite}
              onFavourite={handleFavouriteNew}
              // onClick={
                // setClickValue(target.value) &&
                // handleClick(target.value)
                // handleClick
              
              // }
            // onClick={() => onFavourite(film.uid, film.properties.url)}
          />
            </div>
        )
        })}
    </div>
  )
}

export default Home;