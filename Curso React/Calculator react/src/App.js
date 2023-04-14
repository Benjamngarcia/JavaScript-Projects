import './App.css';
import { useState } from 'react';
/* eslint no-eval: 0 */

function App() {
	const [calc, setCalc] = useState("");
	const [resultado, setResultado] = useState("");
	const [darkMode, setDarkMode] = useState(false);

	const ops = ['+','-','*','/','.','%'];

	const updateCalc = value =>{
		if(
			((ops.includes(value)) && calc === '') ||
			((ops.includes(value)) && (ops.includes(calc.slice(-1))))
		) {
			return;
		}
		setCalc(calc + value);

		if(!ops.includes(value)){
			setResultado(eval(calc + value).toString());
		}
	}

	const crearNumeros = () => {
		const numeros = []

		for(let i = 1; i < 4; i++){
			numeros.push(
				<button onClick={() => updateCalc(i.toString())} key={i} class="input-button">{i}</button>
			)
		}
		return numeros;
	}

	const crearNumeros2 = () => {
		const numeros2 = []

		for(let i = 4; i < 7; i++){
			numeros2.push(
				<button onClick={() => updateCalc(i.toString())} key={i} class="input-button">{i}</button>
			)
		}
		return numeros2;
	}

	const crearNumeros3 = () => {
		const numeros3 = []

		for(let i = 7; i < 10; i++){
			numeros3.push(
				<button onClick={() => updateCalc(i.toString())} key={i} class="input-button">{i}</button>
			)
		}
		return numeros3;
	}

	const calcular = () =>{
		setCalc(eval(calc).toString());
	}

	const eliminar = () => {
		if (calc === ''){
			return;
		}
		const value = calc.slice(0, -1);

		setCalc(value);
	}

	const eliminarTodo = () => {
		if (calc === ''){
			return;
		}
		setCalc("");
		setResultado("");
	}

	return (
	<div className={darkMode ? 'dark-mode' : 'light-mode'}>
		<div className="calculator">
			<div className="container">
				<span style={{color: darkMode ? 'gray' : 'yellow'}}><i class="fas fa-sun"></i></span>
				<div className="switch-checkbox">
					<label className="switch">
						<input type="checkbox" 
						onChange={() => setDarkMode(!darkMode)}/>
						<span className="slider round"></span>
					</label>
					
				</div>
				<span style={{color: darkMode ? '#c96dfd' : 'gray'}}><i class="fas fa-moon"></i></span>
			</div>
			<div className="display">
				<span>{resultado ? '(' + resultado + ')' : ''}</span> {calc || 0}
			</div>
			<div className="buttons">
				<button onClick={eliminarTodo} id="clear">AC</button>
				<button onClick={eliminar} id="erase"><i class="fa-solid fa-delete-left"></i></button>
				<button onClick={() => updateCalc('/')} class="input-button">/</button>
				<button onClick={() => updateCalc('*')} class="input-button">X</button>
				{crearNumeros3()}
				<button onClick={() => updateCalc('-')} class="input-button">-</button>
				{crearNumeros2()}
				<button onClick={() => updateCalc('+')} class="input-button">+</button>
				{crearNumeros()}
				<button onClick={calcular} id="equal">=</button>
				<button onClick={() => updateCalc('0')} class="input-button cero">0</button>
				<button onClick={() => updateCalc('.')} class="input-button">.</button>
			</div>
		</div>
	</div>
	);
}

export default App;
