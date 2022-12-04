import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { IndividualFilm, FilmResult } from '../../interfaces';
import Link from 'next/link';
import { Key, useEffect, useState } from 'react'
import useArraySearch from '../../hooks/useApiSearch';
import Character from '../../components/MoviePage/Character';

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
  const router = useRouter();

  const data = useArraySearch(film.characters)
  // console.log(data)

  if (!data) {
    return (
      <>
        <Link href='/'>
          Home
        </Link>
        <h1>{film.title}</h1>
        <p>Loading movies...</p>
      </>
    )
  }

  return (
    <>
      <Link href='/'>
        Home
      </Link>
      <h1>{film.title}</h1>
      <h2>Characters:</h2>
      {data.map((char: any, index: Key | null | undefined) => {
        return (
          <Character
            key={index}
            name={char.name}
            skinColor={char.data.skin_color}
            birthYear={char.data.birth_year}
            eyeColour={char.data.eye_color}
            hairColour={char.data.hair_color}
            gender={char.data.gender}
          />
        )
      })}
    </>
  )
}

export default Film