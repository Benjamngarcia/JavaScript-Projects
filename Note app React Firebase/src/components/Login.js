import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Login() {
    const [user, setUser] = useState({ email: "", password: "" });

    const { login, logingoogle, resetPassword } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            navigate("/notas");
        } catch (error) {
            console.log(error.code);
            if (error.code === "auth/invalid-email") {
                setError("Correo inválido");
            } else if (error.code === "auth/weak-password") {
                setError("Formato de contraseña incorrecto");
            } else if (error.code === "auth/wrong-password") {
                setError("Contraseña incorrecta");
            } else if (error.code === "auth/user-not-found") {
                setError("El correo no existe");
            } else {
                setError(error.message);
            }
            // console.log(error.message)
        }
    };

    const handleGoogleSignin = async () => {
        try {
            await logingoogle();
            navigate("/notas");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async () => {
        if (!user.email) return setError("Ingresa tu correo electrónico");

        try {
            await resetPassword(user.email);
            setError("Te hemos enviado un email para restablecer tu contraseña");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-blue-600 md:block w-full md:w-1/2 xl:w-2/3 hidden h-screen">
                <img
                    src="https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                        Inicia sesión con tu cuenta
                    </h1>
                    {error && <Alert message={error} />}
                    <form className="mt-6 w-100" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="correo@ejemplo.xyz"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                                onChange={handleChange}
                                autoFocus
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
                                minLength="6"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500
                                focus:bg-white focus:outline-none"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="text-right mt-2">
                            <a
                                href="#!"
                                className="text-sm font-semibold text-gray-700 hover:text-yellow-700 focus:text-yellow-700"
                                onClick={handleResetPassword}
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full block bg-yellow-400 hover:bg-yellow-300 focus:bg-yellow-300 text-white font-semibold rounded-lg
                            px-4 py-2 mt-6"
                        >
                            Iniciar sesión
                        </button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />
                    <button type="button" className=" w-full flex justify-between px-5 my-4 py-3 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={handleGoogleSignin}>
                        <i class="fab fa-google"></i>
                        Iniciar sesión con Google
                    </button>
                    <p className="mt-8">
                        ¿No tienes cuenta?
                        <Link to='/registrar' className="text-yellow-500 hover:text-yellow-700 font-semibold">  Crear una</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
