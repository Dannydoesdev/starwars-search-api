import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { IndividualFilm, FilmResult } from '../../interfaces';
import Link from 'next/link';

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
    revalidate: 100
  };
}

function Film({ film }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <>
      <Link href='/'>
        Home
      </Link>
      <h1>{film.title}</h1>
    </>
  )
}

export default Film