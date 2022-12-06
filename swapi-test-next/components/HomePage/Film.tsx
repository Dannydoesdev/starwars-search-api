import Link from 'next/link'
import { useEffect, useState } from 'react'

function Film({ title, releaseYear, director, uid, url, onFavourite, isCurrentFavourite, onClick }: any) {

  console.log(isCurrentFavourite)
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  useEffect(() => {
    if (isCurrentFavourite) {
      setIsFavourite(true)
    } else {
      setIsFavourite(false)
    }
  
  }, [isCurrentFavourite])
  

  

  function handleClick() {
    if (isFavourite) {
      setIsFavourite(false)
    } else {
      setIsFavourite(true)
    }
  }
  console.log(isFavourite)

  return (
    <div>
      <h2>
        <Link href={`/films/${uid}`}>
          {title}
        </Link>
      </h2>
        {isFavourite ? <p>Favourited</p> : <p>Not favourite</p>}
      <p>Released {releaseYear}</p>
      <p>Directed by {director}</p>
      <button onClick={() => onFavourite(uid, url) && handleClick()}>Favourite</button>
      {/* <button onClick={() => onFavourite}>Favourite</button> */}
        {/* <button onClick={() => onClick()}>Favourite</button> */}
    </div>
  )
}

export default Film