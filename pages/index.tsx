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

        <div className={styles.body}>

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

          <div className={styles.texto}>
            <div className={styles.informacoes}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, a fugiat. Non suscipit 
                impedit veritatis, iure laudantium accusamus necessitatibus eveniet saepe dignissimos vel facere est. 
                Enim eum sapiente voluptates accusamus.
              </p>       
            </div>  

            <div className={styles.informacoes}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, a fugiat. Non suscipit 
                impedit veritatis, iure laudantium accusamus necessitatibus eveniet saepe dignissimos vel facere est. 
                Enim eum sapiente voluptates accusamus.
              </p>       
            </div>    

            <div className={styles.informacoes}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, a fugiat. Non suscipit 
                impedit veritatis, iure laudantium accusamus necessitatibus eveniet saepe dignissimos vel facere est. 
                Enim eum sapiente voluptates accusamus.
              </p>       
            </div>                
          </div>
        </div>
      </div>   
    </>
  )
}
