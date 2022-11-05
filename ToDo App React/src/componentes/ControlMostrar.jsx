const ControlMostrar = ({isChecked, setShowCompleted, limpiarTareas}) => {

    const handleDelete = () =>{
        if (window.confirm('Está seguro de querer eliminar las tareas?')){
            limpiarTareas()
        }
    }
    return (
        <div className="d-flex justify-content-between text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input type="checkbox"
                    className="form-check-input"
                    checked={isChecked}
                    onChange={e => setShowCompleted(e.target.checked)}
                />
                <label>Mostrar tareas hechas</label>
            </div>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">
                <i class="fas fa-trash"></i>  Limpiar tareas
            </button>
        </div>
    )
}

export default ControlMostrar