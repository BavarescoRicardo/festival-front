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
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/login/cadastro">Cadastrar novo usúario</Link>
        </li>                
        <li>
          <Link href="/indiceOriginal">Indice Original</Link>
        </li>
      </ul>
    </>
  )
}
