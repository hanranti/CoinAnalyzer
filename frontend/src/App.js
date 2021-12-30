import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'primereact/resources/themes/md-dark-deeppurple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Topbar from './components/Topbar'
import Content from './components/Content'
import loginService from './services/loginService'
import dataService from './services/dataService'

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
  const [users, setUsers] = useState([])
  const [coinData, setCoinData] = useState([])
  const [startDate, setStartDate] = useState(false)
  const [endDate, setEndDate] = useState(false)

  useEffect(() => {
    dataService.getCoinData({ startDate, endDate }, { setCoinData, setErrorMessage })
  }, [startDate, endDate])

  useEffect(() => {
    const localUser = window.localStorage.getItem('loggedCoinAnalyzer')
    localUser ? setUser(JSON.parse(localUser)) : false
  }, [])

  useEffect(() => {
    if (user){
      dataService.getAllUsers({ setUsers, setErrorMessage })
    }
  }, [user])

  useEffect(() => {
    if(errorMessage !== ''){
      setTimeout(() => setErrorMessage([]), 10000)
    }
  }, [errorMessage])

  const handleLogin = async event => {
    event.preventDefault()
    await loginService.login({ username, password }, { setUser, setErrorMessage, setUsername, setPassword, setToken: dataService.setToken })
    window.localStorage.setItem(
      'loggedCoinAnalyzer', JSON.stringify(user)
    )
  }

  const handleLogout = async event => {
    event.preventDefault()
    window.localStorage.removeItem('loggedCoinAnalyzer')
    dataService.setToken('')
    setUser(false)
    setUsers([])
  }

  const handleSignup = async event => {
    event.preventDefault()
    await loginService.createUser({ newUsername, newPassword, passwordCheck, newName }, { setErrorMessage, setNewUsername, setNewPassword, setPasswordCheck, setNewName })
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

  const coinChartData = {
    coinData: coinData,
    startDate: startDate,
    endDate: endDate,
    setStartDate: setStartDate,
    setEndDate: setEndDate
  }

  const contentData = {
    loginData: loginData,
    coinChartData: coinChartData,
    user: user,
    errorMessage: errorMessage
  }

  const topbarData = {
    user: user,
    handleLogout: handleLogout,
    users: users
  }

  return <div>
    <Router basename={process.env.REACT_APP_ROUTER_BASENAME}>
      <button onClick={() => setUser({ token: 'beagle', username: 'beagle' })}>beaglebutton</button>
      <Topbar topbarData={topbarData}></Topbar>
      <Content contentData={contentData}></Content>
    </Router>
  </div>
}

export default App
