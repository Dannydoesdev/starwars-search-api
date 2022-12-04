import useSWR from 'swr'
import axios from 'axios'
import { Key, useEffect, useState } from 'react'

// const fetcher = (...args) => fetch(...args).then(res => res.json())
// const url: String = 'https://www.swapi.tech/api/films/'
// const fetcher = url => axios.get(url).then(res => res.data)

function Film({ title, releaseYear, director }: any) {
  // console.log('films')
  // console.log(films)
  
  return (
    <>
      <h2>{title}</h2>
      <p>Released {releaseYear}</p>
      <p>Directed by {director}</p>
    </>
    )
}

export default Film

// export async function getServerSideProps() {
//   const res = await fetch(`https://www.swapi.tech/api/films/`)
//   const data = await res.json()

//   return {
//     props: {
//       films: data.result
//     },
//   }
// }

// function HomePageCSR() {
//   const fetcher = (url: string) => axios.get(url).then(res => res.data)
//   const { data, error } = useSWR('https://www.swapi.tech/api/films/', fetcher)

//   const [filmList, setFilmList] = useState([])
//   useEffect(() => {
//     if (data) {
//       setFilmList(data.result)
//     }
//   }, [data])

//   console.log(data)
//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return (
//   <>
//       {data.message}
//       {data.result[0].description}
//       {filmList.map((film: any, index: Key | null | undefined) => {
//         return (
//           <div key={index}>
//             <h2>{film.properties.title}</h2>
//             <p>Released {film.properties.release_date}</p>
//             <p>Directed by {film.properties.director}</p>
//           </div>
//         )
//       })
//       }
//     </>
//   )
// }

