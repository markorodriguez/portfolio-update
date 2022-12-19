import '../styles/globals.css'
import type { AppProps } from 'next/app'
// CSS FILES FOR COMPONENTS
import './components/Loader/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
