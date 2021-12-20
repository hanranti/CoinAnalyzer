import { Toolbar } from 'primereact/toolbar'
//import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import React/**, { useState }*/ from 'react'
//import { useHistory } from 'react-router-dom'
//import { InputSwitch } from 'primereact/inputswitch'

const Topbar = ({ topbarData }) => {

  //const [showFilters, setShowFilters] = useState(false)

  //let history = useHistory()

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
      <Button label="Logout" disabled={!topbarData.user} onClick={topbarData.handleLogout}/>
    </React.Fragment>
  )

  return <Toolbar left={left} right={right} style={style}></Toolbar>
}

export default Topbar