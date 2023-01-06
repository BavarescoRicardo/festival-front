import Head from 'next/head'
import styles from '../../styles/Login.module.css'

export default function Login(){

    return (
        <> 
            <Head>
                <title>Página de login</title>    
            </Head>                        


            <div className={styles.login}>
                <div className={styles.loginmenu}>
                    <h1>Login</h1>
                </div>

                <div className="login-body">
                    <form action="">
                        <label htmlFor="conta">Conta</label>
                        <input type="text" name='conta' id='conta'/>

                        <label htmlFor="senha">Senha</label>
                        <input type="password" name='senha' id='senha'/>

                        <div className="login-botoes">
                            <button>Entrar</button>
                            <button>Cadastrar</button>
                        </div>
                        
                    </form>    
                </div>    
            </div>   
        </>
    )
}