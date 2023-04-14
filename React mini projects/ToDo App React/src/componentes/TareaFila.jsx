const TareaFila = ({tarea, toggleTask, eliminarTarea, editar}) => {
    return (
        <tr key={tarea.name}>
            <td className="">
                {tarea.name}
            </td>
            <td>
            <input type="checkbox"
                    className="form-check-input"
                    checked={tarea.done}
                    onChange={() => toggleTask(tarea)}
                />
            </td>
            <td>
                <button class="btn btn-danger" onClick={() => eliminarTarea(tarea.name)}>
                    <i class="fas fa-trash"></i>
                </button>
            </td>
            <td>
                <button class="btn btn-warning" onClick={() => editar(tarea)}>
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    )

}

export default TareaFila