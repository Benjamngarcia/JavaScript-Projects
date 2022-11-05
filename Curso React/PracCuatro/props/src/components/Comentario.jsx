import React from 'react'
import Imagen from './Imagen'

const Comentario = (props) => {
    return (
        <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
                <Imagen url={props.url}/>
            </div>
            <div className="flex-grow-1 ms-3">
                <h5>{props.persona}</h5>
                {props.texto}
            </div>
        </div>

    )
}

export default Comentario
