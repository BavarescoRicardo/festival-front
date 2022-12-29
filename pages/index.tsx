import Head from 'next/head'
import Link from 'next/link'

export default function Inicial() {
  return (
    <>
      <h1> Página Inicial</h1>

      <ul>
        <li>
          <Link href="/">Inicio</Link>          
        </li>
        <li>
          <Link href="/indiceOriginal">Indice Original</Link>
        </li>
      </ul>
    </>
  )
}
