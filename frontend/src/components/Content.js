import React from 'react'
//import { Switch, Route } from 'react-router-dom'
import Login from './Login'

const Content = ({ contentData }) => {

  console.log(contentData)

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
          <h3>Coin analyzers:</h3>
          <ul>
            {contentData.users.map(u => (<li key={u.username}>{u.username}</li>))}
          </ul>
        </div>
        : <Login loginData={contentData.loginData} />
    }
  </div>
}

export default Content