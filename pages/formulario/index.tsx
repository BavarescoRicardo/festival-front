import Head from 'next/head'
import styles from '../../styles/Formulario.module.css'

export default function Formulario() {
  return (
    <>
        <Head>
            <title>Inscrição</title>    
        </Head>
        <div className={styles.formulario}>
            <div className="formulario-titulo">
                <h1> Inscrições dos Participantes</h1>
                <div className="formulario-titulo-imagem">
                    <img src="" alt="" />
                </div>
            </div>

            <form action="" method="post">

                <label htmlFor=""> Nome inscritos</label>
                <input type="text" />

                <label htmlFor=""> Email</label>
                <input type="text" />

                <label htmlFor=""> Telefone</label>
                <input type="text" />

                <label htmlFor=""> Documento</label>
                <input type="text" />

                <label htmlFor=""> Responsável</label>
                <input type="text" />

                <hr />
                nova area
                
            </form>
                
        </div> 
      
    </>
  )
}
