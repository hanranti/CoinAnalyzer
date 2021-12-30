import React from 'react'
import { Chart } from 'primereact/chart'
import coinMath from '../utils/coinMath'

const CoinChart = ({ coinChartData }) => {
  const valueChartData = {
    labels: [...coinChartData.coinData.map(coin => coin[0])],
    datasets: [
      {
        label: 'Bitcoin value in euros€',
        data: [...coinChartData.coinData.map(coin => coin[1])]
      }
    ]
  }

  const volumeChartData = {
    labels: [...coinChartData.volumeData.map(coin => coin[0])],
    datasets: [
      {
        label: 'Total volume by day',
        data: [...coinChartData.volumeData.map(coin => coin[1])]
      }
    ]
  }

  const chartOptions = {
    scales: {
      xAxes: [{
        type: 'time',
      }]
    },
    animation: false
  }

  const containerStyle = {
    backgroundColor: '#1bff00',
    marginBottom: '35px'
  }

  const cardStyle = {
    paddingTop: '10px',
    paddingBottom: '10px',
    marginLeft: '25px',
    marginRight: '25px'
  }

  const dontTravelStyle = {
    color: 'red'
  }

  const setStartDate = (e) => {
    e.preventDefault()
    coinChartData.setStartDate(e.target.value)
  }

  const setEndDate = (e) => {
    e.preventDefault()
    coinChartData.setEndDate(e.target.value)
  }

  const downwardTrend = coinChartData.coinData.length > 0
    ? coinMath.longestDownwardTrend(coinChartData.coinData)
    : []

  const highestVolume = coinChartData.volumeData.length > 0
    ? coinMath.highestTradingVolume(coinChartData.volumeData)
    : []

  const timeTravelInstructions = coinChartData.coinData.length > 0
    ? coinMath.whenToTimeTravel(coinChartData.coinData)
    : false

  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  const getMonth = (number) => months[number]

  return (
    <div className="p-col-12 p-lg-8">
      <div className="p-shadow-1" style={containerStyle}>
        <div className="card" style={cardStyle}>
          <h2>Bitcoin value:</h2>
          <Chart type='line' data={valueChartData} options={chartOptions} />
          <Chart type='line' data={volumeChartData} options={chartOptions} />
          startDate:
          <input className="p-inputtext p-component" type="date"
            value={coinChartData.startDate} onChange={setStartDate}></input>
          endDate:
          <input className="p-inputtext p-component" type="date"
            value={coinChartData.endDate} onChange={setEndDate}></input>
          {coinChartData.coinData.length > 0 ? <div>
            <h3>Longest downward trend happened between:</h3>
            <p>
              {new Date(downwardTrend[0]).getDate()} of {getMonth(new Date(downwardTrend[0]).getMonth())} in {new Date(downwardTrend[0]).getFullYear()} and {new Date(downwardTrend[1]).getDate()} of {getMonth(new Date(downwardTrend[1]).getMonth())} in {new Date(downwardTrend[1]).getFullYear()}
            </p>
            <h5>{downwardTrend[2]} days in total!</h5>
            <h3>Highest trading volume:</h3>
            <p>
                happened in {new Date(highestVolume[0]).getDate()} of {getMonth(new Date(highestVolume[0]).getMonth())} in {new Date(highestVolume[0]).getFullYear()}
            </p>
            <h4>with a worth of <b>{Math.round(highestVolume[1])}€</b></h4>
            <h3>Instructions for time travellers:</h3>
            {
              timeTravelInstructions
                ? <div>
                    This section contains instructions to use
                    time machine to get maximum profits by buying
                    and selling bitcoin. Buy desired amount
                    of bitcoin in the first time that you travel
                    into. Then travel forward in time into another
                    point in the past to sell everything that you
                    bought on that earlier day. For your current
                    selection {new Date(timeTravelInstructions[0]).getDate()} {getMonth(new Date(timeTravelInstructions[0]).getMonth())} {new Date(timeTravelInstructions[0]).getFullYear()} seems
                    to be the best point in time to buy and {new Date(timeTravelInstructions[1]).getDate()} {getMonth(new Date(timeTravelInstructions[1]).getMonth())} {new Date(timeTravelInstructions[1]).getFullYear()} to
                    sell your bitcoins. You will
                    gain {Math.round(timeTravelInstructions[2] * 100 - 100)}%
                    profit!
                </div>
                : <div style={dontTravelStyle}>
                  <h4>Please do not use time travel to gain profit in this timeline!</h4>
                  <h4>Bitcoin decrearses in value in this timeline!</h4>
                </div>
            }
          </div>
            :<h3>Please select start and end dates</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default CoinChart