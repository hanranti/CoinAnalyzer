import axios from 'axios'

const login = async (userDetails, setters) => {
  try{
    const data =  (await axios.post('/login', { username: userDetails.username, password: userDetails.password }, { headers:{} })).data
    window.localStorage.setItem(
      'loggedCoinAnalyzer', JSON.stringify(data)
    )
    setters.setUser(data)
    setters.setErrorMessage([])
    setters.setUsername('')
    setters.setPassword('')
  }catch(error) {
    setters.setErrorMessage(error.response.data.errors)
  }
}

const createUser = async (userDetails, setters) => {
  try {
    const data = (await axios.post('/signup', { username: userDetails.newUsername, password: userDetails.newPassword, name: userDetails.newName }, { headers:{} })).data
    setters.setErrorMessage([])
    setters.setNewUsername('')
    setters.setNewPassword('')
    setters.setPasswordCheck('')
    setters.setNewName('')
    return data
  } catch(error) {
    setters.setErrorMessage(error.response.data.errors)
  }
}

export default {
  login,
  createUser
}