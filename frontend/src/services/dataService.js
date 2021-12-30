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
  try {
    const res = await axios.get(`${apiUrl}/users`, getConfig())
    setters.setUsers(res.data)
  } catch(error) {
    if (error.message.includes('403')) {
      setters.setErrorMessage(error.response.data.errors)
    }
  }
}

const getCoinData = async (dates, setters) => {
  try {
    if (dates.startDate && dates.endDate) {
      const res = await axios.get(`${apiUrl}/coin?startdate=${dates.startDate}&enddate=${dates.endDate}`, getConfig())
      setters.setCoinData(res.data)
    }
  } catch(error) {
    console.log(error)
  }
}

export default {
  setToken,
  getAllUsers,
  getCoinData
}