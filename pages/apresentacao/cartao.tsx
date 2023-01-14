import Head from 'next/head'
import styles from '../../styles/Cartao.module.css'
import { useState } from 'react';

export default function Cartao(){

    const [cantor, setCantor] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
    const [foto, setFoto] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            
            <div className={styles.cantor}>                            
                {cantor.map(element => (
                
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/imagens/fotos/fotoF.jpg" alt="Foto cantor"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Cantor N# - {element}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Categoria - NNN</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" onClick={() => setShowModal(true)} className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dados da apresentação</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {showModal ? (
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Apresentação
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Categoria <br />
                                Notas <br />
                                Data <br />
                            </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Fechar
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Salvar alteração
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )

}