import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : 'http://localhost:1234/api/users'

const createUser = async (userDetails) => {
  console.log(process.env.REACT_APP_API_URL)
  try {
    return (await axios.post('/', { username: userDetails.newUsername, password: userDetails.newPassword, name: userDetails.newName }, { headers:{} })).data
  } catch(error) {
    return error.message
  }
}

export default {
  createUser
}