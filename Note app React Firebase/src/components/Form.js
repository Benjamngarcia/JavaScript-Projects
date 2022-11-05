import React from 'react'

export function Form({ agregarNota }) {
    return (
        <div className="flex h-full justify-center items-center">
            <form onSubmit={agregarNota} className="w-full rounded px-12 pt-6 pb-10 mb-4 mt-3">
                <h1 className='font-bold text-xl text-center my-5 text-gray-700'>Agrega una nota</h1>
                <div className="mb-4 w-full">
                    <label htmlFor="titulo" className="block
                    text-gray-700 text-sm font-bold mb-2">Título</label>
                    <input className="w-full px-4 py-3 rounded-lg mt-1 border focus:border-green-500 focus:bg-white focus:outline-none"
                        type="text" name="titulo" id="titulo" placeholder="Título de tu nota" />
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="texto" className="block
                    text-gray-700 text-sm font-bold mb-2">Nota</label>
                    <input className="w-full px-4 py-3 rounded-lg mt-1 border focus:border-green-500 focus:bg-white focus:outline-none"
                        type="text" name="texto" id="texto" placeholder="Escribe aquí tu nota" />
                </div>
                <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold
                py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guardar nota</button>
            </form>
        </div>
    )
}