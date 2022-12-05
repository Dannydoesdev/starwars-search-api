import Link from 'next/link'

function Film({ title, releaseYear, director, uid }: any) {

  return (
    <div>
      <h2>
        <Link href={`/films/${uid}`}>
          {title}
        </Link>
      </h2>
      <p>Released {releaseYear}</p>
      <p>Directed by {director}</p>
    </div>
  )
}

export default Film