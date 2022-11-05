import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaTareas from './componentes/TablaTareas';
import ControlMostrar from './componentes/ControlMostrar';
import NavBar from './componentes/NavBar';
import CreadorTareas from './componentes/CreadorTareas';



function App() {

	const [ tareasItem, setTareasItem] = useState([])
	const [ showCompleted, setShowCompleted] = useState(false)
	const [ modoEdicion, setModoEdicion ] = useState(false)
	const [ editarObj, setEditarObj ] = useState([])

	function crearNuevaTarea(tareaNombre){
		if(!tareasItem.find(tarea => tarea.name === tareaNombre)){
			setTareasItem([...tareasItem, {name: tareaNombre, done: false}])
		} else {
			alert("Ya tienes una tarea con ese nombre")
		}
	}

	const actualizarTarea = tarea => {
		setTareasItem(
			tareasItem.map(t => (t.name === tarea.name) ? {...t, done: !t.done}: t)
		)
	}

	const eliminarTarea = tarea => {
		console.log(tareasItem)
		const tareasFiltradas = tareasItem.filter(t => t.name !== tarea)
		setTareasItem(tareasFiltradas)
	}

	const editar = tarea => {
		setModoEdicion(true)
		setEditarObj(tarea)
	}

	const editarTarea = (tarea, tareaVieja) =>{
		if(!tarea.trim()){
			// setError('No puedes editar a vacío')
			alert("No puedes dejar el campo en blanco")
			return
		} else {
			const arrayEditado = tareasItem.map(t => t.name === tareaVieja ? {name: tarea, done: t.done} : t)
			setTareasItem(arrayEditado)
			setModoEdicion(false)
		}
	}

	useEffect(() => {
		let data = localStorage.getItem('tareas')
		if(data){
			setTareasItem(JSON.parse(data))
		}
	}, [])

	const limpiarTareas = () =>{
		setTareasItem(tareasItem.filter(tarea => !tarea.done))
		setShowCompleted(false)
	}

	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tareasItem))
	}, [ tareasItem ])

	return (
		<main className="App vh-100">
				<NavBar />
			<div className="container col-md-4 offset-md-4 p-4">
				<CreadorTareas crearNuevaTarea = {crearNuevaTarea} modoEdicion = {modoEdicion} editarObj = {editarObj} editarTarea = {editarTarea}/>
				<TablaTareas tareas={tareasItem} toggleTask = {actualizarTarea} eliminarTarea = {eliminarTarea} editar = { editar }/>
				<ControlMostrar
				isChecked = {showCompleted}
				setShowCompleted = {(checked) => setShowCompleted(checked)}
				limpiarTareas = {limpiarTareas}
				/>
				{
					showCompleted && (
						<TablaTareas tareas={tareasItem} toggleTask = {actualizarTarea} showCompleted = {showCompleted} eliminarTarea = {eliminarTarea}/>
					)
				}
			</div>
		</main>
	);
}

export default App;
