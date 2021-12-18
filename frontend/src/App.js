import React, { /**useEffect,*/ useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'primereact/resources/themes/md-dark-deeppurple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Topbar from './components/Topbar'
import Content from './components/Content'
import userService from './services/userService'

function App() {
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newName, setNewName] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [login, setLogin] = useState(true)
  const [errorMessage, setErrorMessage] = useState([])

  const handleLogin = async event => {
    event.preventDefault()
    await userService.login({ username, password })
      .then(result => {
        setUser(result)
        setErrorMessage([])
      })
      .catch(error => setErrorMessage(error))
  }

  const handleSignup = async event => {
    event.preventDefault()
    await userService.createUser({ newUsername, newPassword, newName })
      .then(() => setErrorMessage([]))
      .catch(error => setErrorMessage(error))
  }

  const loginData = {
    username: username,
    setUsername: setUsername,
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
    loginData: loginData,
    user: user
  }

  const topBarData = {
    user: user
  }

  return <div>
    <Router basename={process.env.REACT_APP_ROUTER_BASENAME}>
      <Topbar topBarData={topBarData}></Topbar>
      <Content contentData={contentData}></Content>
    </Router>
  </div>
}

export default App
