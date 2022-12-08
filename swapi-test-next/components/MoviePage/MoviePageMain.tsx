import Link from 'next/link'
import styles from './MoviePageMain.module.scss'
import { Key } from 'react'
import Character from './Character'
import Planet from './Planet'
import Species from './Species'
import Starship from './Starship'
import Vehicle from './Vehicle'

function MoviePageMain({
  title, release_date, director, uid, planetDetailsArray, characterDetailsArray, speciesDetailsArray, vehiclesDetailsArray, starshipsDetailsArray
}: any) {

  return (
    <div className={styles.body}>

      <h1>{title}</h1>
      <h5>Released {release_date}</h5>
      <h5>Directed by {director}</h5>

      <h2>Characters:</h2>
      <div>
        {characterDetailsArray.map((singleCharacter: any, index: Key | null | undefined) => {
          return (
            <Character
              key={index}
              {...singleCharacter.data}
            />
          )
        })}
      </div>

      <h2>Planets:</h2>
      <div>
        {planetDetailsArray.map((singlePlanet: any, index: Key | null | undefined) => {
          return (
            <Planet
              key={index}
              {...singlePlanet.data}
            />
          )
        })}
      </div>

      <h2>Species:</h2>
      <div>
        {speciesDetailsArray.map((singleSpecies: any, index: Key | null | undefined) => {
          return (
            <Species
              key={index}
              {...singleSpecies.data}
            />
          )
        })}
      </div>

      <h2>Vehicles:</h2>
      <div>
        {vehiclesDetailsArray.map((singleVehicle: any, index: Key | null | undefined) => {
          return (
            <Vehicle
              key={index}
              {...singleVehicle.data}
            />
          )
        })}
      </div>

      <h2>Starships:</h2>
      <div>
        {starshipsDetailsArray.map((singleStarship: any, index: Key | null | undefined) => {
          return (
            <Starship
              key={index}
              {...singleStarship.data}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MoviePageMain