import { useState, useEffect } from "react"

export { }

const [currentFavourites, setCurrentFavourites] = useState<any>([])
  const [favourite, setFavourite] = useState('')
  const [id, setId] = useState('')
  const [url, setUrl] = useState('')
  // const [isFavourite, setIsFavourite] = useState<string>('is favourite')
  // const [isNotFavourite, setIsNotFavourite] = useState<string>('is not a favourite')

  const [isFavourite, setIsFavourite] = useState<boolean>(false)
  const [isNotFavourite, setIsNotFavourite] = useState<boolean>(true)
  const [clickValue, setClickValue] = useState('');

  const [localStorageFavourites, setLocalStorageFavourites] = useState<any>([])

  // const [newFavourite, setNewFavourite] = useState<any>()

const handleClick = (url: any) => {
  console.log(url)
  console.log(localStorageFavourites)
  // localStorageFavourites ? setCurrentFavourites(localStorageFavourites) : setCurrentFavourites('')
  if (localStorageFavourites) {
    setCurrentFavourites([url, ...localStorageFavourites])
  }
  
  console.log(currentFavourites)
  setClickValue(url)
  console.log(clickValue)
  // currentFavourites.includes(clickValue) ? 
  // setCurrentFavourites([clickValue, ...currentFavourites])
  
  if (!currentFavourites) {
    setCurrentFavourites(url)
    console.log(currentFavourites)
  } else if (currentFavourites.includes(url)) {
    let newFavourites = currentFavourites.filter((favourite: any) => favourite !== clickValue);
    
    console.log(`new faves ${newFavourites}`)


    // setCurrentFavourites(newFavourites)
    console.log(newFavourites)
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
  } else if (!(currentFavourites.includes(url))) {
    setCurrentFavourites([clickValue, ...currentFavourites])
    console.log(currentFavourites)
    let newFavourites = ([clickValue, ...currentFavourites])
      localStorage.setItem('favourites', JSON.stringify(newFavourites));
    // localStorage.setItem('favourites', JSON.stringify(currentFavourites));
  }
    console.log(currentFavourites)
}

useEffect(() => {
  const faves = localStorage.getItem('favourites')

  if (faves) {
    console.log(faves)
    const localFaves = JSON.parse(faves)
    console.log(localFaves)
    setLocalStorageFavourites(localFaves);
    console.log(localStorageFavourites)
  }
  console.log(localStorageFavourites)
}, []);

useEffect(() => {
  // if (!clickValue) return
  console.log(`faves before set ${currentFavourites}`)
  localStorage.setItem('favourites', JSON.stringify(currentFavourites));
  // if (currentFavourites.includes(clickValue)) {
  //   let newFavourites = currentFavourites.filter((favourite: any) => favourite !== clickValue);
    
  //   setCurrentFavourites(newFavourites)
  //   console.log(newFavourites)
  //   localStorage.setItem('favourites', JSON.stringify(currentFavourites));
  // } else if (!(currentFavourites.includes(clickValue))) {
  //   setCurrentFavourites([clickValue, ...currentFavourites])
  //   console.log(currentFavourites)
  //   localStorage.setItem('favourites', JSON.stringify(currentFavourites));
  // }
}, [currentFavourites]);