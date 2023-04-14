import React, { useState } from 'react'


const CreadorTareas = ({crearNuevaTarea, modoEdicion, editarObj, editarTarea}) => {

	const [ nuevaTareaNombre, setNuevaTareaNombre ] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault()
		if(!nuevaTareaNombre.trim()){
			alert("No puedes dejar el campo en blanco")
			return
		} else{
			crearNuevaTarea(nuevaTareaNombre)
			setNuevaTareaNombre("")
		}
	}

	const editarSubmit = (e) => {
		e.preventDefault()
		setNuevaTareaNombre("")
		editarTarea(nuevaTareaNombre, editarObj.name)
	}

    return (
        <form onSubmit={modoEdicion ? editarSubmit : handleSubmit} className="my-2 row">
			<div class="input-group mb-3">
				{
					modoEdicion ? (
						<input type="text" placeholder="Edite el nombre de la tarea"
						defaultValue={editarObj.name}
						onChange={(e) => setNuevaTareaNombre(e.target.value)}
						className="form-control"
						/>
					) : (
						<input type="text" placeholder="Ingrese una tarea"
						value={nuevaTareaNombre}
						onChange={(e) => setNuevaTareaNombre(e.target.value)}
						className="form-control"
						/>
					)
				}
				
				{
					modoEdicion ? (
						<button className="btn btn-outline-warning btn-sm input-group-text"> 
							<i class="fas fa-edit"></i>  Editar tarea
						</button>
					) : (
						<button className="btn btn-outline-success btn-sm input-group-text"> 
							<i class="fas fa-save"></i>  Guardar tarea
						</button>
					)
				}
			</div>
		</form>
    )
}

export default CreadorTareas
