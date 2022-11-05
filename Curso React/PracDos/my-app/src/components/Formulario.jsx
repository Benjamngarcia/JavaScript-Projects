import React from 'react'

function Formulario() {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) =>{
        e.preventDefault();
        
        if(!fruta.trim()){
            console.log('está vacío el campo frutas')
            return
        }

        if(!descripcion.trim()){
            console.log('está vacío el campo descripción')
            return
        }

        console.log('procesando datos...' + fruta + ' ' + descripcion)


        setLista([
            ...lista, {fruta: fruta, descripcion: descripcion}
        ])

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }
    return (
        <div>
            <h2>formulario</h2>
            <form onSubmit={ guardarDatos }>
                <input type="text" placeholder="Ingrese Frutas" className="form-control mb-3" onChange={ (e) => setFruta(e.target.value) }/>
                <input type="text" placeholder="Ingrese Descripción" className="form-control mb-3" onChange={ (e) => setDescripcion(e.target.value) }/>
                <button className="btn btn-primary w-100" type="submit">REGISTRAR</button>
            </form>
            <ul>
                {
                    lista.map((item, index) =>(
                        <li key={index}>{item.fruta} - {item.descripcion}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
