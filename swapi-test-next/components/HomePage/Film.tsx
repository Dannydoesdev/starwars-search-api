import useSWR from 'swr'
import axios from 'axios'
import { Key, useEffect, useState } from 'react'
import Link from 'next/link'

function Film({ title, releaseYear, director, uid }: any) {

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

export default Film