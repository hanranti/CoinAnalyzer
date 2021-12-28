import axios from 'axios'

const apiUrl = '/api'

let token = null

const setToken = newToken => token = `bearer ${newToken}`

const getConfig = () => ({
  headers: {
    Authorization: token
  }
})

const getAllUsers = async (setters) => {
  console.log(token)
  try {
    const res = await axios.get(`${apiUrl}/users`, getConfig())
    setters.setUsers(res.data)
  } catch(error) {
    if (error.message.includes('403')) {
      setters.setErrorMessage(error.response.data.errors)
    }
  }
}

export default {
  setToken,
  getAllUsers
}