import { Routes, Route } from 'react-router-dom'
import { Bienvenida } from './components/Bienvenida'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Register } from './components/Register'
import { AuthProvider } from './context/authContext'


function App() {
	return (
	<div className="">
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/notas' element={
					<ProtectedRoute>
						<Bienvenida/>
					</ProtectedRoute>
				}/>
				<Route path='/iniciar' element={<Login/>}/>
				<Route path='/registrar' element={<Register/>}/>
			</Routes>
		</AuthProvider>
	</div>
	);
}

export default App;
