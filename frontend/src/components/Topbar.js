import { Toolbar } from 'primereact/toolbar'
//import { Sidebar } from 'primereact/sidebar'
//import { Button } from 'primereact/button'
import React/**, { useState }*/ from 'react'
//import { useHistory } from 'react-router-dom'
//import { InputSwitch } from 'primereact/inputswitch'

const Topbar = () => {

  //const [showFilters, setShowFilters] = useState(false)

  //let history = useHistory()

  const style = {
    backgroundColor: '#cc0000'
  }
  const left = (
    <React.Fragment>
    </React.Fragment>
  )

  const right = (
    <React.Fragment>
    </React.Fragment>
  )

  return <Toolbar left={left} right={right} style={style}></Toolbar>
}

export default Topbar