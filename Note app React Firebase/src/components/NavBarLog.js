import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function NavBarLog( { user,logout }) {
    const [navbar, setNavbar] = useState(false);

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header>
                <nav className="w-full bg-white shadow">
                    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <Link to="/notas">
                                    <h2 className="text-2xl font-bold text-yellow-500">NoteApp Benjamin</h2>
                                </Link>
                                <div className="md:hidden">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <i className="fas fa-times"></i>
                                        ) : (
                                            <i className="fas fa-bars"></i>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    <li className="text-gray-600">
                                        {user.email}
                                    </li>
                                    <li className="text-gray-600 hover:text-yellow-500">
                                        <button type="button" onClick={handleLogout} className="cursor-pointer">Cerrar sesión</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    )
}