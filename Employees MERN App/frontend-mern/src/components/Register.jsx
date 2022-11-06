import React from 'react'
import { useState } from 'react'
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();
    const { actions } = useUser()
    const [dataUser, setDataUser] = useState({ correo: '', password: '', nombre: '' });


    const register = (e) =>{
        e.preventDefault();
        actions(dataUser, navigate);
    }

    const handleChange = (e) =>{
        setDataUser({ ...dataUser, [e.target.name]: e.target.value })
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="container text-center mt-3">
                            <i className="fa-solid fa-user-plus fa-5x"></i>
                        </div>
                        <div className="card-header text-center mt-3">
                            <h4>Registro de jefe</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={register}>
                            <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" 
                                        name="nombre" 
                                        className="form-control" 
                                        autoFocus 
                                        required
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Correo electrónico</label>
                                    <input type="email" 
                                        name="correo" 
                                        className="form-control" 
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
                                <button className="btn btn-primary w-100" type="submit">Registrarme</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register