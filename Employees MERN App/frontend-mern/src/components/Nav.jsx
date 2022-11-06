import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export const Nav = () => {
    const { user, logout } = useUser();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink to="/" className="navbar-brand">Inicio</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {
                    user.login ? 
                    (<div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/employee">
                                <i className='fas fa-user'></i>  Bienvenido {user.name}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={() => logout()}>
                                <i className='fas fa-user-times'></i>  Cerrar sesión
                            </NavLink>
                        </li>
                    </ul>
                </div>)
                :
                (<div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">
                                <i className='fas fa-user-plus'></i>  Registrarme
                            </NavLink>
                        </li>
                    </ul>
                </div>)
                }
            </div>
        </nav>
    )
}   