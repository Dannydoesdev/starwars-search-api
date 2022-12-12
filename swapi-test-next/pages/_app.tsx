import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/Navbar/NavBar'
import localFont from '@next/font/local'

const jediFont = localFont({ src: '../fonts/starjedi2.woff' })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={jediFont.className}>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  )
}
