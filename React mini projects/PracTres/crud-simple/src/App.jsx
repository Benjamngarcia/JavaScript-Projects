import React from 'react';
import { nanoid } from 'nanoid'

function App() {

  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState('')
  const [error, setError] = React.useState(null)

  const agregarTarea = (e) =>{
    e.preventDefault()
    
    if(!tarea.trim()){
      setError('Para guardar algo, debes insertarlo en el formulario.')
      return
    }
    console.log(tarea)
    setTareas([
      ...tareas,
      {id: nanoid(), nombreTarea: tarea}
    ])
    setTarea('')
    setError(null)
  }

  const eliminarTarea = (id) =>{
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }

  const editar = (item) =>{
    setModoEdicion(true)
    setTarea(item.nombreTarea)
    setId(item.id)
  }

  const editarTarea = (e) =>{
    e.preventDefault()
    
    if(!tarea.trim()){
      setError('No puedes editar a vacío')
      return
    }
    const arrayEditado = tareas.map(item => item.id === id ? {id: id, nombreTarea:tarea} : item)
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId('')
    setError(null)
  }

  return (
    <div className="container">
      <h1 className="text-center">CRUD SIMPLE</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4> 
          <ul className="list-group">
          {
            tareas.length === 0 ? (
              <li className="list-group-item">No hay tareas</li>
            ) : (
              tareas.map((item) =>(
              <li key={item.id} className="list-group-item">
              <span>{item.nombreTarea}</span>
              <span className="float-end">
                <button className="btn btn-danger btn-sm mx-2" onClick={()=> eliminarTarea(item.id)}>Eliminar</button>
                <button className="btn btn-warning btn-sm" onClick={()=> editar(item)}>Editar</button>
              </span>
            </li>
            ))
            )
          }
          </ul>
        </div>
        <div className="col-4">
        <h4 className="text-center">
        {
          modoEdicion ? 'Editar tarea' : 'Agregar tarea'
        }
        </h4> 
        <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
          <input type="text" className="form-control mb-3" placeholder="Ingrese tareas" onChange={e => setTarea(e.target.value)} value={tarea}/>
          {
            error ? <span className="text-danger">{error}</span> : null
          }
          {
            modoEdicion ? (
              <button className="btn btn-warning w-100 mt-1" type="submit">Editar</button>
            ) : (
              <button className="btn btn-dark w-100 mt-1" type="submit">Agregar</button>
            )
          }
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
