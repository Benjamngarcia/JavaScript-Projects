import React from 'react'
import { useState } from 'react'
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'
import { Loading } from './Loading';

const Login = () => {

    const { actions } = useUser();
    const navigate = useNavigate();
    const [dataUser, setDataUser] = useState({ correo: '', password: '' });
    const [loading, setLoading] = useState(false);


    const login = async (e) => {
        e.preventDefault();
        setLoading(true);
        await actions(dataUser, navigate);
        setLoading(false);
    }

    const handleChange = (e) => {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value })
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="container text-center mt-3">
                            <i className="fa-solid fa-user fa-5x"></i>
                        </div>
                        <div className="card-header text-center mt-3">
                            <h4>Inicio de sesión de jefe</h4>
                        </div>
                        <div className="card-body">
                            {
                                loading ? (
                                    <Loading/>
                                ): (
                                    <form onSubmit={login}>
                                        <div className="mb-3">
                                            <label className="form-label">Correo electrónico</label>
                                            <input type="email"
                                                name="correo"
                                                className="form-control"
                                                autoFocus
                                                required
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Contraseña</label>
                                            <input type="password"
                                                name="password"
                                                className="form-control"
                                                required
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                        <button className="btn btn-primary w-100" type="submit">Iniciar sesión</button>
                                    </form>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login