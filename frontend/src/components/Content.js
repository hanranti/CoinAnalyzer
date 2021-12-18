import React from 'react'
//import { Switch, Route } from 'react-router-dom'
import Login from './Login'

const Content = ({ contentData }) => {

  return <div className='body'>
    {
      contentData.user
        ? <div>
        </div>
        : <Login loginData={contentData.loginData} />
    }
  </div>
}

export default Content