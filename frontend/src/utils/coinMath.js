const longestDownwardTrend = (coinData) => {
  let longestStart = coinData[0][0]
  let longestEnd = longestStart
  let currentStart = longestStart
  let previousDate = coinData[0][0]
  let longestTrend = -1
  let daysGone = longestTrend
  let previousValue = coinData[0][1]
  coinData.forEach(coin => {
    if (coin[1] > previousValue && longestTrend < daysGone){
      longestStart = currentStart
      longestEnd = previousDate
      longestTrend = daysGone
      daysGone = 0
      currentStart = coin[0]
    } else if(coin[1] > previousValue && longestTrend >= daysGone) {
      daysGone = 0
      currentStart = coin[0]
    } else if (coin[1] <= previousValue && longestTrend < daysGone) {
      daysGone++
    }
    previousDate = coin[0]
    previousValue = coin[1]
  })
  return [longestStart, longestEnd, longestTrend]
}

export default {
  longestDownwardTrend
}