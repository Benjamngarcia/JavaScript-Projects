import React, { Fragment,  useState } from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('chinguesumadre')

    const eventoClick = () =>{
        console.log('me diste click')
        setTexto('cambiando texto....')
    }
    return (
        <Fragment>
        <hr/>
            <h2>{ texto }</h2>
            <button onClick={ () => eventoClick ()}>Click</button>
        </Fragment>
    )
}

export default Eventos
