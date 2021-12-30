const longestDownwardTrend = coinData => {
  let longestStart = coinData[0][0]
  let longestEnd = coinData[0][0]
  let currentStart = coinData[0][0]
  let longestTrendLength = 0
  let currentTrendLength = 0
  let previousValue = coinData[0][0]
  coinData.forEach(coin => {
    if (coin[1] <= previousValue) {
      if (longestTrendLength <= currentTrendLength) {
        longestTrendLength = currentTrendLength
        longestStart = currentStart
        longestEnd = coin[0]
      }
    } else {
      currentStart = coin[0]
      currentTrendLength = 0
    }
    currentTrendLength++
    previousValue = coin[1]
  })
  return [longestStart, longestEnd, longestTrendLength]
}

const highestTradingVolume = coinData => coinData.find(data => data[1] === Math.max(...coinData.map(coin => coin[1])))

export default {
  longestDownwardTrend,
  highestTradingVolume
}