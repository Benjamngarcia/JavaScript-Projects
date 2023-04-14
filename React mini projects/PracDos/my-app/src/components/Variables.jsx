import React from 'react'

const Variables = () => {
    const saludo = 'hola desde constante'
    const imagen = 'https://ximagen.com/images/2019/02/11/imagenes-muy-lindas-para-descargar.jpg'

    return (
        <div>
            <h2>Nuevo componente {saludo}</h2>
            <img src={imagen} alt=""/>
        </div>
    )
}

export default Variables
