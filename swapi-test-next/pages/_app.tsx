import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/Navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
