const longestDownwardTrend = (coinData) => {
  let longestStart = coinData[0][0]
  let longestEnd = longestStart
  let currentStart = longestStart
  let previousDate = coinData[0][0]
  let longest = 0
  let current = longest
  let previous = coinData[0]
  coinData.forEach(coin => {
    if (coin[0] !== coinData[0][0] &&coin[1] <= previous[1]) {
      current++
      previousDate = coin[0]
    } else if (longest < current){
      longestStart = currentStart
      longestEnd = previousDate
      longest = current
      current = 0
      currentStart = coin[0]
    }
  })
  return [longestStart, longestEnd, longest]
}

export default {
  longestDownwardTrend
}