import { useState } from 'react'
import styles from '../styles/Paginacao.module.css'

export default function Paginacao(props: any) {
    const [showModal, setShowModal] = useState(false);
    const [participante, setParticipante] = useState(0);

    return (

        <div className="flex justify-center">
            <nav aria-label="Page navigation example">
                <ul className={styles.page}>
                    <li className={styles.pageitem}><a
                        className=""
                        href="#">1</a></li>
                    <li className={styles.pageitem}><a
                        className=""
                        href="#">2</a></li>
                    <li className={styles.pageitem}><a
                        className=""
                        href="#">3</a></li>
                    <li className={styles.pageitem}><a
                        className=""
                        href="#">4</a></li>
                    <li className={styles.pageitem}><a
                        className=""
                        href="#">5</a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}