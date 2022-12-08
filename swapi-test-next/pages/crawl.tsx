import Image from "next/image"
import { useEffect, useState } from "react";
// import 
// import './crawl.css'

// INSPIRATION & CHUNKS OF CODE TAKEN FROM: https://cssanimation.rocks/starwars/

function Crawl() {

  const [show, setShow] = useState(false)

  // const movieNameStr: string = 'The Force Awakens'

  const movieNameStr: string = 'The_Search_Engine'

  const arr = []

  useEffect(() => {
    setTimeout(() => setShow(true), 9500);
  }, []);

  const movieNameArr = movieNameStr.split('')
  const movieNameArrNoSpace = movieNameArr.filter((letter) => String(letter).trim())
  console.log(movieNameArrNoSpace)

  console.log(movieNameArr)
  return (
    <div>
      {!show && <div className='starwars-demo'>
        <img className='star' alt='Star' src='/img/star.svg' />
        <img className='wars' alt='Wars' src='/img/wars.svg/' />

        <h2 className="byline" id="byline">
          {movieNameArr.map((letter: string, index) => {
            return (
              letter == '_' ? <span key={index}>&nbsp;</span> : <span key={index}>{letter}</span>
            )
          })}
        </h2>
      
      </div>
      }
      {show && <button className='enter-button'>Enter</button>} 
      </div>
  )
}

export default Crawl;