import Head from 'next/head'
import styles from '../../styles/Cartao.module.css'
import ComponenteModal from "../../componentes/ModalComponente"
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
                <ComponenteModal showModal = {showModal} setShowModal = {setShowModal}/>
            ) : null}
        </>
    )

}