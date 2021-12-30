const router = require('express').Router()

const coinController = require('../controllers/coinController')

router.get('/', async (req, res) => {
  try {
    const coinData = await coinController.getCoinData(req.query.startdate, req.query.enddate)
    console.log(coinData)
    res.status(200).json(coinData)
  } catch(error) {
    res.status(400).json(error)
  }
})

module.exports = router