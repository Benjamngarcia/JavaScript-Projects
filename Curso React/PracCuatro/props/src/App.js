import Comentario from "./components/Comentario";
// import Saludo from "./components/Saludo";


function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto nuevo</h1>
      {/* <Saludo persona = 'arias' edad={30}/>
      <Saludo persona = 'benjamin' edad={20}/>
      <Saludo persona = 'montero' edad={15}/> */}
      <hr />
      <h3>Cajita de comentarios:</h3>
      <Comentario url='https://picsum.photos/200' persona='arias' texto='asjajakadkala'/>
      <Comentario url='https://picsum.photos/200' persona='montero' texto='uehyehefbef'/>
      <Comentario url='https://picsum.photos/200' persona='benjamin' texto='ñasldjwdfb'/>

    </div>
  );
}

export default App;
