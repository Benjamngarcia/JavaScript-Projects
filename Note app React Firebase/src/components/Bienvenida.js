import { useAuth } from '../context/authContext'
import { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";
import { NavBarLog } from './NavBarLog';
import { Cards } from './Cards';
import { Form } from './Form';



export function Bienvenida() {

    const [arrayNotas, setArrayNotas] = useState(null);

    const { user, logout, loading, firestore, doc, getDoc, setDoc, updateDoc } = useAuth()

    const notas = [{id: 1, titulo: "EJEMPLO DE NOTA", texto: "Puedes escribir lo que quieras en las notas."}]

    async function buscarDocOrCrearDoc(idDocumento){
        try {
            //crear referencia al documento
            const docRef = doc(firestore, `usuarios/${idDocumento}`)
            //buscar documento
            const consulta = await getDoc(docRef)
            //reivsar si existe
            if (consulta.exists()){
                //si sí existe
                const infoDoc = consulta.data()
                return infoDoc.notas
            } else {
                //si no existe
                await setDoc(docRef, {notas: [...notas]})
                const consulta = await getDoc(docRef)
                const infoDoc = consulta.data()
                return infoDoc.notas
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        async function fetchTareas(){
            const notasFetch = await buscarDocOrCrearDoc(user.email)
            setArrayNotas(notasFetch)
        }
        fetchTareas();
    }, [])

    async function eliminarNota(idNota){
        const nvoArrayNotas = arrayNotas.filter((objetoNota) => objetoNota.id !== idNota)
        //actualizar bd
        const docRef = doc(firestore, `usuarios/${user.email}`)
        updateDoc(docRef, {notas: [...nvoArrayNotas]})
        //acutalizar state
        setArrayNotas(nvoArrayNotas)
    }

    async function agregarNota(e){
        e.preventDefault();
        const titulo = e.target.titulo.value;
        const texto = e.target.texto.value;
        const nvoArrayNotas = [...arrayNotas, {id: + new Date(), titulo: titulo, texto: texto}]
        //actualizar bd
        const docRef = doc(firestore, `usuarios/${user.email}`)
        updateDoc(docRef, {notas: [...nvoArrayNotas]})
        //actualizar estado
        setArrayNotas(nvoArrayNotas)

    }

    if (loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <NavBarLog user = {user} logout = {logout}/>
            {
                arrayNotas ? (
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                            <Form agregarNota = {agregarNota}/>
                        </div>
                        <div className="md:w-2/3">
                            <Cards notas={arrayNotas} key={arrayNotas.id} eliminarNota = {eliminarNota}/>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/3">
                            <Form/>
                        </div>
                        <div className="md:w-1/3 flex justify-center items-center h-size">
                            <h1 className='font-bold text-xl text-center'>No hay notas para mostrar</h1>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
