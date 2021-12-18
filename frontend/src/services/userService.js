import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
  ? 'http://localhost:1234/api/users'
  : 'https://coinanalyzer.herokuapp.com/api/users'

const login = async (userDetails) => {
  try{
    return (await axios.post('/login', { username: userDetails.username, password: userDetails.password }, { headers:{} })).data
  }catch(error) {
    return error.errors
  }
}

const createUser = async (userDetails) => {
  try {
    return (await axios.post('/', { username: userDetails.newUsername, password: userDetails.newPassword, name: userDetails.newName }, { headers:{} })).data
  } catch(error) {
    return error.errors
  }
}

export default {
  login,
  createUser
}