import React from 'react'

function Contador() {

    const [numero, setNumero] = React.useState(0);

    // const aumentar = () =>{
    //     console.log('click')
    //     setNumero(numero + 1)
    // }
    return (
        <div>
            <h2>contador</h2>
            <h3>Nuestro número aumentado: { numero }</h3>
            <h4>
                {
                    numero > 2 ? 'es mayor a dos' : 'es menor a dos' 
                }
            </h4>
            {/* <button onClick={() => aumentar()}>Aumentar</button> */}
            <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
        </div>
    )
}

export default Contador
