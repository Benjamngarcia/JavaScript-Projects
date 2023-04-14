import Eventos from './components/Eventos';
import  Parrafo from './components/Parrafo'
import Variables from './components/Variables';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className=" p-5 mt-5">
      <h1>Hola mundo</h1>
      <Parrafo />
      <Parrafo />
      <Parrafo />
      <Parrafo />
      <Parrafo />
      <Variables />
      <Eventos />
      <Contador /> 
      <Lista />
      <Formulario />
    </div>
  );
}

export default App;
