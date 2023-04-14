import TareaFila from './TareaFila';

const TablaTareas = ({tareas, toggleTask, eliminarTarea, editar, showCompleted = false}) => {

    const tablasEstilos = (showCompleted) =>{
        if (showCompleted === false){
            return(
                <tr className="table-danger">
                    <th>Tareas sin completar</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            )
        } else {
            return(
                <tr className="table-success">
                    <th>Tareas completadas</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            )
        }
    }

    const tablaTareasFilas = (doneValue) =>{
        return(
            tareas
            .filter(tarea => tarea.done === doneValue)
            .map(tarea => (
                <TareaFila tarea={tarea} key={tarea.name} toggleTask = {toggleTask} eliminarTarea= {eliminarTarea} editar = {editar}/>
            ))
        )
    }

    return (
        <table className="table table-hover table-striped">
            <thead className="text-center">
                {
                    tablasEstilos(showCompleted)
                }
            </thead>
            <tbody>
                {
                tablaTareasFilas(showCompleted)
                }
            </tbody>
        </table>
    )
}

export default TablaTareas
