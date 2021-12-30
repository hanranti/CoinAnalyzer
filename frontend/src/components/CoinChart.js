import React from 'react'
import { Chart } from 'primereact/chart'
import coinMath from '../utils/coinMath'

const CoinChart = ({ coinChartData }) => {
  const chartData = {
    labels: [...coinChartData.coinData.map(coin => coin[0])],
    datasets: [
      {
        label: 'Bitcoin value in euros€',
        data: [...coinChartData.coinData.map(coin => coin[1])]
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

  const setStartDate = (e) => {
    coinChartData.setStartDate(e.target.value)
  }
  const setEndDate = (e) => {
    coinChartData.setEndDate(e.target.value)
  }

  const downwardTrend = coinChartData.coinData.length > 0
    ? coinMath.longestDownwardTrend(coinChartData.coinData)
    : []

  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const getMonth = (number) => months[number]

  return (
    <div className="p-col-12 p-lg-8">
      <div className="p-shadow-1" style={containerStyle}>
        <div className="card" style={cardStyle}>
          <h2>CoinChart</h2>
          <Chart type='line' data={chartData} options={chartOptions} />
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
          </div>
            :<h3>Please select start and end dates</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default CoinChart