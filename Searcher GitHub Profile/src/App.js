import { Fragment, useEffect, useState } from 'react'
import { Searcher } from './components/searcher/Searcher'
import { Container } from '@mui/material'
import { gettingUsers } from './services/users';
import { UserCard } from './containers/UserCard/';
import './App.css';

function App() {
  const [inputUser, setInputUser] = useState('benjamngarcia');
  const [userStater, setUserStater] = useState('userState');
  const [notFound, setNotFound] = useState(false);

  const getUser = async (user) => {
    const profileGitHub = await gettingUsers(user)

    if (profileGitHub.message === 'Not Found') {
      setInputUser('benjamngarcia')
      setNotFound(true)
    } else {
      setUserStater(profileGitHub);
    }
  }

  useEffect(() => {
    getUser(inputUser)
  }, [inputUser])

  if(notFound){
    return(
      <Container sx={{
        background: '#ffb3b3',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Searcher setInputUser={setInputUser} notFound={notFound}/>
        <UserCard userStater={userStater} />
      </Container>
    )
  } else{
    return(
      <Container sx={{
        background: '#dee4e7',
        width: {xs:"90vw", md: "80vw"},
        height: {xs:"100%", md: "80vh", lg:"500px"},
        borderRadius: '16px',
        marginTop: {xs:"15px", md: "30px", lg:"40px"},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: {xs:"1rem", sm: "3rem", lg:"0"}
      }}>
        <Searcher setInputUser={setInputUser} />
        <UserCard userStater={userStater} />
      </Container>
    )
  }
}

export default App;
