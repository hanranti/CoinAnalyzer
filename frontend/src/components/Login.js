import React from 'react'
import { InputSwitch } from 'primereact/inputswitch'

const Login = ({ loginData }) => {

  const formStyle = {
    'clear': 'both',
    'fontFamily': 'Times New Roman',
    'marginLeft': '15px',
    'marginRight': '15px'
  }

  const usedStyle = {
    'backgroundColor': '#e6e600'
  }

  const cancelledStyle = {
    'color': '#8c8c8c',
    'backgroundColor': '#d9d9d9'
  }

  const loginStyle = {
    'float': 'left',
    'textAlign': 'left',
    'width': '500px',
    'height': '1000px',
    'borderRadius': '10px',
    'padding': '50px'
  }

  const signupStyle = {
    'float': 'right',
    'textAlign': 'left',
    'width': '500px',
    'height': '1000px',
    'borderRadius': '10px',
    'padding': '50px'
  }

  const usedLoginStyle = loginData.login
    ? Object.assign(loginStyle, cancelledStyle)
    : Object.assign(loginStyle, usedStyle)

  const usedSignupStyle = !loginData.login
    ? Object.assign(signupStyle, cancelledStyle)
    : Object.assign(signupStyle, usedStyle)

  return <div style={formStyle}>
    <div style={{ 'textAlign': 'center' }}>
      <p>Switch login/signup</p>
      <InputSwitch checked={loginData.login} onChange={() => loginData.setLogin(!loginData.login)} />
    </div>
    <form onSubmit={loginData.handleLogin} style={usedLoginStyle}>
      <h3>Login</h3>
      <p>username:</p>
      <input type='text' value={loginData.username} name='username' onChange={({ target }) => loginData.setUsername(target.value)} />
      <br />
      <p>password:</p>
      <input type='password' value={loginData.password} name='password' onChange={({ target }) => loginData.setPassword(target.value)} />
      <button type="submit">login</button>
    </form>
    <form onSubmit={loginData.handleSignup} style={usedSignupStyle}>
      <h3>Signup</h3>
      <p>username:</p>
      <input type='text' value={loginData.newUsername} name='username' onChange={({ target }) => loginData.setNewUsername(target.value)} />
      <br />
      <p>password:</p>
      <input type='password' value={loginData.newPassword} name='password' onChange={({ target }) => loginData.setNewPassword(target.value)} />
      <br/>
      <p>retype password:</p>
      <input type='password' value={loginData.passwordCheck} name='password' onChange={({ target }) => loginData.setPasswordCheck(target.value)} />
      <p>your name:</p>
      <input type='text' value={loginData.newName} name='name' onChange={({ target }) => loginData.setNewName(target.value)} />
      <button type="submit">sign up</button>
    </form>
  </div>
}

export default Login