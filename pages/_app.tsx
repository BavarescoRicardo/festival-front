import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PrincipalContainer from '../componentes/PrincipalContainer'

export default function App({ Component, pageProps }: AppProps) {
  return <PrincipalContainer>
          <Component {...pageProps} />
        </PrincipalContainer>
}
