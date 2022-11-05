import React from 'react'

export function Landing() {
    return (
        <div className="flex flex-col justify-center items-center">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">
				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Bienvenido a</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black text-yellow-500 mb-8">NoteApp by Benjamin</h1>
				<p className="text-base md:text-lg lg:text-2xl mb-8">Tu lugar seguro para notas y recordatorios</p>
			</main>
			<footer className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Construido por <a target="_blank" href='https://github.com/Benjamngarcia'>Benjamín García</a></p>
					<div className="flex -mx-6">
						<a href="https://www.dictamigos.xyz" target="_blank" className="mx-3 hover:opacity-80 hover:text-blue-500 duration-150">DICTAMIGOS</a>
					</div>
				</div>
			</footer>
		</div>	
    )
}