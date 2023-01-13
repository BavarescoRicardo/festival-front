import Link from 'next/link'
import styles from '../styles/Navegacao.module.css'

export default function BarraNavegacao() {
    return (
        <>
            <ul className={styles.navbar}>
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

            <ul className={styles.navbar}>
                <li>
                    <Link href="/formulario">Inscrição</Link>
                </li>
                <li>
                    <Link href="/apresentacao">Apresentações</Link>
                </li>
                <li>
                    <Link href="/apresentacao/cartao">Apresentações Card</Link>
                </li>                
            </ul>
        </>
    )
}