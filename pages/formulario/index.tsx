import Head from 'next/head'
import styles from '../../styles/Formulario.module.css'

export default function Formulario() {
  return (
    <>
        <Head>
            <title>Inscrição</title>   
            <meta name="viewport" content="width=device-width, initial-scale=1" /> 
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

                <label htmlFor=""> Nascimento</label>
                <input type="text" />

                <label htmlFor=""> Responsável</label>
                <input type="date" />                

                <div className={styles.selecaoness}>
                    <p>Nescessidade</p>
                    <div className={styles.selecaonessopcoes}>
                        <label htmlFor="ness"> Sim </label> <input type="radio" name="ness" id="ness" value='sim' /> 
                        <label htmlFor="ness"> Não </label> <input type="radio" name="ness" id="ness" value='nao'/> 
                    </div>
                </div>

                <hr />

                <div className={styles.musica}>
                    <h2>Música</h2>

                    <label htmlFor=""> Apresentação </label>
                    <input type="text" />                    
                </div>

                <button type='submit'>Confirmar Inscrição</button>
            </form>
                
        </div> 
      
    </>
  )
}
