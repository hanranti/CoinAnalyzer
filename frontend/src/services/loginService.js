import axios from 'axios'

axios.defaults.baseURL = 'http://localhost/api/users'

const createUser = async (userDetails) => {
  try {
    return (await axios.post('/', { username: userDetails.newUsername, password: userDetails.newPassword, name: userDetails.newName }, { headers:{} })).data
  } catch(error) {
    return error.message
  }
}

export default {
  createUser
}