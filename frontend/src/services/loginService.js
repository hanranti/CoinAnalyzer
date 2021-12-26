import axios from 'axios'

const login = async (userDetails, setters) => {
  try{
    const data =  (await axios.post('/login', { username: userDetails.username, password: userDetails.password }, { headers:{} })).data
    setters.setToken(data.token)
    setters.setUser(data)
    console.log(data)
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