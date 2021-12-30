const axios = require('axios')
const convertToDate = require('../utils/timestampConverter').convertToDate
const convertToUnix = require('../utils/timestampConverter').convertToUnix

const apiUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur'

const getCoinData = async (startDate, endDate) => {
  console.log('COINCONTROLLER')
  try {
    const coinData = await axios.get(`${apiUrl}&from=${convertToUnix(startDate)}&to=${convertToUnix(endDate)}`)
    const dates = [...new Set(coinData.data.prices
      .map(dayData => convertToDate(dayData[0])))]
    const coinDataBybyDate = coinData.data.prices
      .map(dayData => [convertToDate(dayData[0]), dayData[1]])
    const singleDateData = dates
      .map(date => coinDataBybyDate.find(data => data[0] === date))
    const volumeDates = [...new Set(coinData.data.total_volumes
      .map(dayData => convertToDate(dayData[0])))]
    const volumeByDate = coinData.data.total_volumes
      .map(dayData => [convertToDate(dayData[0]), dayData[1]])
    const singleDateVolumes = volumeDates
      .map(date => volumeByDate.find(data => data[0] === date))
    return [singleDateData, singleDateVolumes]
  } catch(error) {
    return { error: [error] }
  }
}

module.exports = {
  getCoinData
}