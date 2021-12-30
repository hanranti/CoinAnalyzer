const convertToUnix = (date) => {
  const dateAtMidnight = new Date(date)
  return dateAtMidnight.getTime() / 1000
}

const convertToDate = (timestamp) => {
  const date = new Date(timestamp).toLocaleDateString()
  return date
}

module.exports = {
  convertToUnix,
  convertToDate
}