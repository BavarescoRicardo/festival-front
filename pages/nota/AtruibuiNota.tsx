import { useState } from 'react'
import Paginacao from '../../componentes/Paginacao'

export default function AtruibuiNota(props: any) {
    const [showModal, setShowModal] = useState(false);
    return (
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                        Nota do cantor X
                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => props.setShowModal(1)}
                    >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <Paginacao/>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Quesitos das notas <br />
                        </p>
                        <table>
                            <tr>
                                <th>Ritmo</th>
                                <th>Afinação</th>
                                <th>Interpretação</th>
                                <th>Ritmo</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>10</td>
                                <td>0</td>
                                <td>10</td>
                            </tr>                                                        
                    </table>                         
                    
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => props.setShowModal(1)}
                    >
                        Close
                    </button>
                    <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Save Changes
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}