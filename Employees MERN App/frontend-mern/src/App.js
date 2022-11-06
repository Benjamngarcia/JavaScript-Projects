import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Employee } from './components/Employee';
import Login from './components/Login';
import { Nav } from './components/Nav';
import Register from './components/Register';
import { useUser } from './context/UserContext';


axios.defaults.baseURL =  'http://localhost:4000'
function App() {

  const { user } = useUser()
  axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`

  const Public = ({children}) =>{
    return !user.login ? children : <Navigate to='/employee'></Navigate>
  }

  const Private = ({children}) =>{
    return user.login ? children : <Navigate to='/'></Navigate>
  }
  
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={
          <Public>
            <Login/>
          </Public>}
        />
        <Route path="/employee" element= {
          <Private>
            <Employee/>
          </Private>
        }/>
        <Route path="/register" element={
          <Public>
            <Register/>
          </Public>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
