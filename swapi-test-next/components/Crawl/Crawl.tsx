import Image from "next/image"
import './crawl.css'

// INSPIRATION & CHUNKS OF CODE TAKEN FROM: https://cssanimation.rocks/starwars/

function Crawl() {


  const movieNameStr: string = 'The Force Awakens'

  const movieNameArr = movieNameStr.split('')




  return (
    <div className='starwars-demo'>
      <Image className='star' alt='Star' src='/img/star.svg' />
      <Image className='wars' alt='Wars' src='/img/wars.svg' />


      <h2 className="byline" id="byline">{movieNameStr}</h2>

      {movieNameArr.map((letter: string) => {
        return (
          letter && <span>letter</span>

        )
      })}

    </div>
  )
}

export default Crawl;