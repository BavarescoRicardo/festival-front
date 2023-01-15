import Head from 'next/head'
import styles from '../styles/Inicial.module.css'

export default function Inicial() {
  return (
    <>
      <Head>
        <title>Página principal</title>    
      </Head>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <h1> Página Inicial</h1>
        </div>
        <div className={styles.description}>
          <div className={styles.fotos}>
            <img className="rounded-sm" src="/imagens/fimusi/20220909_195657.jpg" alt="Foto cantor"/>
          </div>

          <div className={styles.fotos}>

          </div>

          <div className={styles.fotos}>

          </div>

          <div className={styles.fotos}>

          </div>

          <div className={styles.fotos}>

          </div>

          <div className={styles.fotos}>

          </div>

          <div className={styles.fotos}>

          </div>

          <div className={styles.fotos}>

          </div>
        </div>
      </div>   
    </>
  )
}
