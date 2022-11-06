import axios from 'axios'
import Swal from 'sweetalert2'
import { createContext, useState, useContext, useEffect } from 'react'

const UserContext = createContext()
const initialState = {login: false, token: '', name: ''}

export const UserProvider = (props) =>{
    const [user, setUser] = useState(initialState)

    useEffect(() => {
        const initial = JSON.parse(localStorage.getItem("user"));
        initial ? initial.login && setUser(initial) : setUser(initialState)
    }, [])


    const actions = async(dataUser, navigate) =>{
        try {
            let resp = {}
            dataUser.nombre ? (
                resp = await axios.post('http://localhost:4000/register', dataUser)
            ) : (
                resp = await axios.post('http://localhost:4000/login', dataUser)
            )
            //login success
            //data is a propetie, see like postman peticion
            // const {data} = await axios.post('http://localhost:4000/login', dataUser)
            if(resp.data.ok){
                const userLogin = {
                    login: true,
                    token: resp.data.data.token,
                    name: resp.data.data.nombre
                };
                localStorage.setItem("user", JSON.stringify(userLogin));
                setUser(userLogin)
                navigate('/employee')
                Swal.fire({
                    icon: 'success',
                    title: resp.data.message,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        } catch (error) {
            if(!error.response.data.ok){
                return Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
            console.log("Error en la función login", error.message)
        }
    }


    const logout = () => {
        setUser(initialState)
        localStorage.removeItem("user")
    }


    const value = {
        actions,
        user,
        logout
    }

    return <UserContext.Provider value={value} {...props}/>
}


export function useUser(){
    const context = useContext(UserContext)
    if(!context){
        throw new Error('useUser error')
    }
    return context
}