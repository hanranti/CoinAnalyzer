import React, { /**useEffect,*/ useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'primereact/resources/themes/md-dark-deeppurple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Topbar from './components/Topbar'
import Content from './components/Content'
import loginService from './services/loginService'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newName, setNewName] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [login, setLogin] = useState(true)
  const [errorMessage, setErrorMessage] = useState([])

  const handleLogin = event => {
    event.preventDefault()
    console.log('logged in')
  }

  const handleSignup = async event => {
    event.preventDefault()
    console.log('handleSignup')
    await loginService.createUser({ newUsername, newPassword, newName })
      .then(result => console.log(result))
      .catch(error => console.log(error))
    setErrorMessage([])
  }

  const loginData = {
    username: username,
    serUsername: setUsername,
    password: password,
    setPassword: setPassword,
    newUsername: newUsername,
    setNewUsername: setNewUsername,
    newPassword: newPassword,
    setNewPassword: setNewPassword,
    newName: newName,
    setNewName: setNewName,
    passwordCheck: passwordCheck,
    setPasswordCheck: setPasswordCheck,
    login: login,
    setLogin: setLogin,
    handleLogin: handleLogin,
    handleSignup: handleSignup,
    errorMessage: errorMessage
  }

  const contentData = {
    loginData: loginData
  }

  return <div>
    <Router basename={process.env.REACT_APP_ROUTER_BASENAME}>
      <Topbar></Topbar>
      <Content contentData={contentData}></Content>
    </Router>
  </div>
}

export default App
