import React from 'react'

const Saludo = (props) => {
    return (
        <div>
            <h2>Saludando a {props.persona} de {props.edad} años</h2>
        </div>
    )
}

export default Saludo
