import { Toolbar } from 'primereact/toolbar'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import React, { useState } from 'react'

const Topbar = ({ topbarData }) => {

  const [usersBar, setUsersBar] = useState(false)
  const [userFilter, setUserFilter] = useState('')

  const handleUserFilterChange = e => setUserFilter(e.target.value)

  const style = {
    backgroundColor: '#cc0000'
  }

  const logoStyle = {
    backgroundColor: '#E8FF01',
    color: '#EF9C0B',
    'fontSize': 'large',
    'borderRadius': '15px',
    'padding': '15px'
  }

  const userFieldStyle = {
    color: '#EF9C0B'
  }

  const logo = <div style={logoStyle}>CoinAnalyzer</div>

  const userField = <div style={userFieldStyle}>{topbarData.user.name}</div>

  const left = (
    <React.Fragment>
      {logo}
      {
        topbarData.user
          ? userField
          : <div></div>
      }
    </React.Fragment>
  )

  const right = (
    <React.Fragment>
      <Sidebar position='right' className='ui-sidebar-sm' visible={usersBar}
        onHide={() => setUsersBar(false)} >
        <div>
          <h3>Coin analyzers:</h3>
          <input type='text' onChange={handleUserFilterChange}></input>
          <ul>
            {topbarData.users
              .filter(coinAnalyzer => coinAnalyzer.username.includes(userFilter))
              .slice(0, 10)
              .map(u => (<li key={u.username}>{u.username}</li>))}
          </ul>
        </div>
      </Sidebar>
      <Button label='Users' disabled={usersBar} onClick={() => setUsersBar(true)} />
      <Button label="Logout" disabled={!topbarData.user} onClick={topbarData.handleLogout}/>
    </React.Fragment>
  )

  return <Toolbar left={left} right={right} style={style}></Toolbar>
}

export default Topbar