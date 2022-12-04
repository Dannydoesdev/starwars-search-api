import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { IndividualFilm, FilmResult } from '../../interfaces';
import Link from 'next/link';
import useSWR from 'swr'
import axios from 'axios'
import { Key, useEffect, useState } from 'react'
import useArraySearch from '../../hooks/useApiSearch';

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
  // const { data } = useArraySearch(film.characters)
  // const { data } = useArraySearch(result.properties.characters)


  return {
    props: {
      film: result.properties
    },
    revalidate: 100
  };
}

function Film({ film }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  // const [characters, setCharacters] = useState<any>()

  // useEffect(() => {
  //   const { data } = useArraySearch(film.characters)
  //   setCharacters(data)

  // }, [])
  

  const data  = useArraySearch(film.characters)
  console.log(data)

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
      {/* <p>{data[0][0].name}</p> */}
      {/* {data.map((char:any) => {
       return <p> {char} </p>
      })} */}
      {data.map((char: any) => {
        return <p>{char.name}</p>
      })}
    </>
  )
}

export default Film