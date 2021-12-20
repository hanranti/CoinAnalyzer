import React, { /**useEffect,*/ useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'primereact/resources/themes/md-dark-deeppurple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Topbar from './components/Topbar'
import Content from './components/Content'
import loginService from './services/loginService'

function App() {
  const [user, setUser] = useState(false)
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
    await loginService.login({ username, password }, { setUser, setErrorMessage, setUsername, setPassword })
  }

  const handleLogout = async event => {
    event.preventDefault()
    window.localStorage.removeItem('loggedCoinAnalyzer')
    setUser(false)
  }

  const handleSignup = async event => {
    event.preventDefault()
    await loginService.createUser({ newUsername, newPassword, newName }, { setErrorMessage, setNewUsername, setNewPassword, setPasswordCheck, setNewName })
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
    handleSignup: handleSignup
  }

  const contentData = {
    loginData: loginData,
    user: user,
    errorMessage: errorMessage
  }

  const topbarData = {
    user: user,
    handleLogout: handleLogout
  }

  return <div>
    <Router basename={process.env.REACT_APP_ROUTER_BASENAME}>
      <Topbar topbarData={topbarData}></Topbar>
      <Content contentData={contentData}></Content>
    </Router>
  </div>
}

export default App
