import React from 'react'

export function Cards({ notas, eliminarNota }) {
    return (
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {
                    notas.map((item) => (
                        <div className="rounded overflow-hidden shadow-lg bg-yellow-100" key={item.id}>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{item.titulo}</div>
                                <p className="text-gray-700 text-base">
                                    {item.texto}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button type="button" onClick={()=> eliminarNota(item.id)} className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Eliminar nota</button>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}
