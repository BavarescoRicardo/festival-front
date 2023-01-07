import Head from 'next/head'
import styles from '../../styles/Login.module.css'
import Link from 'next/link'

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
                <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            </div>

            <form>
                <div className="mb-6">
                    <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="conta"
                    name='conta'
                    placeholder="Conta"
                    />
                </div>

                <div className="mb-6">
                    <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="senha"
                    name='senha'
                    placeholder="Senha"
                    />
                </div>

                <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                    <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"                        
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"></label>
                    
                    </div>
                    <a href="#!" className="text-gray-800">Esqueceu sua senha?</a>
                </div>

                <div className="text-center lg:text-left">
                    <button
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                    Login
                    </button>
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Não possui uma conta?
                    <a
                        href="#!"
                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                        Cadastrar conta
                    </a>
                    </p>
                </div>
            </form>    
        </div>
        </>
    )
}