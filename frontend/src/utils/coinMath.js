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

const whenToTimeTravel = coinData => {
  let dayToBuy = coinData[0][0]
  let dayToSell = coinData[0][0]
  let boughPrice = coinData[0][1]
  let soldPrice = coinData[0][1]
  let profit = 0
  for (let i = 0; i < coinData.length; i++) {
    if (coinData[i][1] > boughPrice) {
      continue
    }
    for (let j = i; j < coinData.length; j++) {
      if(soldPrice - boughPrice < coinData[j][1]-coinData[i][1]){
        dayToBuy = coinData[i][0]
        dayToSell = coinData[j][0]
        boughPrice = coinData[i][1]
        soldPrice = coinData[j][1]
        profit = coinData[j][1] / coinData[i][1]
      }
    }
  }
  if (profit > 0){
    return [dayToBuy, dayToSell, profit]
  } else {
    return false
  }
}

export default {
  longestDownwardTrend,
  highestTradingVolume,
  whenToTimeTravel
}