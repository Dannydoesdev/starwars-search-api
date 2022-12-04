import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

interface FilmResult {
  properties: IndividualFilm[];
  uid: String;
  message: String;
}

interface IndividualFilm {
  characters: Array<String>,
  created: String,
  director: String,
  edited: String,
  episode_id: Number,
  opening_crawl: String,
  planets: Array<String>,
  producer: String,
  release_date: String,
  species: Array<String>,
  starships: Array<String>,
  title: String,
  url: String,
  vehicles: Array<String>,
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://www.swapi.tech/api/films/`)
  const data = await res.json()

  const paths = data.result.map((film: any) => ({
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
  console.log(film)

  return (
    <>
      <h1>{film.title}</h1>
    </>
  )

}

export default Film