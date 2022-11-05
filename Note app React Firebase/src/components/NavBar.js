import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

export function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <header>
            <nav className="w-full bg-white shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link to="/">
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
                                <li className="text-gray-600 hover:text-yellow-500">
                                    <Link to="/">
                                        Inicio
                                    </Link>
                                </li>
                                {/* <li className="text-gray-600 hover:text-blue-600">
                                    <a href="javascript:void(0)">About US</a>
                                </li>
                                <li className="text-gray-600 hover:text-blue-600">
                                    <a href="javascript:void(0)">Contact US</a>
                                </li> */}
                                <li className="text-gray-600 hover:text-yellow-500">
                                    <Link to="/iniciar">
                                        Iniciar sesión
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}