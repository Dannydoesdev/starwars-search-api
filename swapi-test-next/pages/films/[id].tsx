import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { IndividualFilm, FilmResult } from '../../interfaces';
import Link from 'next/link';
import { Key, useEffect, useState } from 'react'
import useArraySearch from '../../hooks/useApiSearch';
import Character from '../../components/MoviePage/Character';
import Planet from '../../components/MoviePage/Planet';
import MoviePageMain from '../../components/MoviePage/MoviePageMain';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://www.swapi.tech/api/films/`)
  const data = await res.json()

  const paths = data.result.map((film: FilmResult) => ({
    params: {
      id: film.uid
    },
  }));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(`https://www.swapi.tech/api/films/${params.id}`);
  const { result } = await res.json();

  return {
    props: {
      film: result.properties
    },
    revalidate: 1000
  };
}

function Film({ film }: InferGetStaticPropsType<typeof getStaticProps>) {
  const characterDetailsArray = useArraySearch(film.characters)
  const planetDetailsArray = useArraySearch(film.planets)
  const starshipsDetailsArray = useArraySearch(film.starships)
  const vehiclesDetailsArray = useArraySearch(film.vehicles)
  const speciesDetailsArray = useArraySearch(film.species)

  const allCharactersReceived = (characterDetailsArray && characterDetailsArray.length === film.characters.length)
  const allPlanetsReceived = (planetDetailsArray && planetDetailsArray.length === film.planets.length)
  const allSpeciesReceived = (speciesDetailsArray && speciesDetailsArray.length === film.species.length)
  const allVehiclesReceived = (vehiclesDetailsArray && vehiclesDetailsArray.length === film.vehicles.length)
  const allStarshipsReceived = (starshipsDetailsArray && starshipsDetailsArray.length === film.starships.length)


  if (!(allCharactersReceived) || !(allPlanetsReceived) || !(allSpeciesReceived || !(allStarshipsReceived) || !(allVehiclesReceived))){

    // if (!characterDetailsArray || !(film.characters.length === characterDetailsArray.length)){
    return (
      <>
        <Link href='/'>
          Home
        </Link>
        <h1>{film.title}</h1>
        <p>Loading movie information from the database...</p>
      </>
    )
  }

  return (
    <>
      <Link href='/'>
        Home
      </Link>
      <MoviePageMain
        {...film}
        characterDetailsArray={characterDetailsArray}
        planetDetailsArray={planetDetailsArray}
        starshipsDetailsArray={starshipsDetailsArray}
        vehiclesDetailsArray={vehiclesDetailsArray}
        speciesDetailsArray={speciesDetailsArray}
      />
    </>
  )
}

export default Film