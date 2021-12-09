import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL + '/users'
  : 'http://localhost:1234/api/users'

const createUser = async (username, password) => {
  console.log(username, password)
  try {
    return (await axios.post('/', { username: username, password: password }, { headers:{} })).data
  } catch(error) {
    return error.message
  }
}

export default {
  createUser
}