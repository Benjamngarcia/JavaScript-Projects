import React from 'react'
import {useState} from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from './Alert'


export function Register() {

    const [user, setUser] = useState({email: '', password: ''})

    const {signup} = useAuth()
    const navigate = useNavigate()
    const [ error, setError ] = useState()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/invalid-email"){
                setError('Correo inválido')
            } else if (error.code === "auth/weak-password"){
                setError('Formato de contraseña incorrecto')
            } else if (error.code === "auth/email-already-in-use") {
                setError('El correo electrónico ya se encuentra en uso')
            }else{
                setError(error.message)
            }
            // console.log(error.message)
        }
    }
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-blue-600 lg:block w-full md:w-1/2 xl:w-2/3 hidden h-screen">
                <img
                    src="https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div
                className="flex bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
            items-center justify-center"
            >
                <div className="w-full h-100">
                <Link to="/"><h1 className="text-xl font-bold text-yellow-500">NoteApp Benjamin</h1></Link>
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                        Crea una nueva cuenta
                    </h1>
                    {error && <Alert message={error} />}
                    <form className="mt-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="correo@ejemplo.xyz"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                                onChange={handleChange}
                                autofocus
                                autocomplete
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="******"
                                minlength="6"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500
                                focus:bg-white focus:outline-none"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full block bg-yellow-400 hover:bg-yellow-300 focus:bg-yellow-300 text-white font-semibold rounded-lg
                            px-4 py-2 mt-6"
                        >
                            Registrarse
                        </button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />
                    <p className="mt-8">
                        ¿Ya tienes una cuenta?
                        <Link to='/iniciar' className="text-yellow-500 hover:text-yellow-700 font-semibold">  Iniciar sesión</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}