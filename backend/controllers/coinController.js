const axios = require('axios')
const convertToDate = require('../utils/timestampConverter').convertToDate
const convertToUnix = require('../utils/timestampConverter').convertToUnix

const apiUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur'

const getCoinData = async (startDate, endDate) => {
  console.log('COINCONTROLLER')
  try {
    const coinData = await axios.get(`${apiUrl}&from=${convertToUnix(startDate)}&to=${convertToUnix(endDate)}`)
    console.log(coinData.data)
    return coinData.data.prices
      .map(dayData => [convertToDate(dayData[0]), dayData[1]])
  } catch(error) {
    return { error: [error] }
  }
}

module.exports = {
  getCoinData
}