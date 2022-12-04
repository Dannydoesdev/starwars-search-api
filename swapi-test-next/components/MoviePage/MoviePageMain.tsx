import Link from 'next/link'

function MoviePageMain({ title, releaseYear, director, uid }: any) {

  return (
    <div>
      <Link href={`/films/${uid}`}>
        {title}
      </Link>
      <p>Released {releaseYear}</p>
      <p>Directed by {director}</p>
    </div>
    )
}

export default MoviePageMain