import React from 'react'
import { Chart } from 'primereact/chart'
import coinMath from '../utils/coinMath'

const CoinChart = ({ coinChartData }) => {
  const chartData = {
    labels: [...coinChartData.coinData.map(coin => coin[0])],
    datasets: [
      {
        label: 'Trading volume in euros€',
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
            <h3>Longest downward trend:</h3>
            {coinMath.longestDownwardTrend(coinChartData.coinData)[0]}
            {coinMath.longestDownwardTrend(coinChartData.coinData)[1]}
            {coinMath.longestDownwardTrend(coinChartData.coinData)[2]}
          </div>
            :<h3>Please select start and end dates</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default CoinChart