import React from 'react'
//import { Switch, Route } from 'react-router-dom'
import Login from './Login'

const Content = ({ contentData }) => {

  const errorStyle = {
    'color': '#ff6400',
    'backgroundColor': '#9f0195',
    'textAlign': 'center'
  }

  const errorMessage = <div style={errorStyle}>
    <ul>
      {contentData.errorMessage.map(error => <li key={error}>{error}</li>)}
    </ul>
  </div>

  return <div className='body'>
    {
      contentData.errorMessage
        ? errorMessage
        : <div></div>
    }
    {
      contentData.user
        ? <div>
        </div>
        : <Login loginData={contentData.loginData} />
    }
  </div>
}

export default Content