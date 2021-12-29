import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
describe('App ', () => {
  let component

  beforeEach(() => {
    component = render(<App />)
  })
  test('renders login/signup form', () => {
    expect(component.container).toHaveTextContent('CoinAnalyzer')
    expect(component.container).toHaveTextContent('Logout')
    expect(component.container).toHaveTextContent('Switch login/signup')
    expect(component.container).toHaveTextContent('Sign in')
    expect(component.container).toHaveTextContent('Sign up')
    expect(component.container).toHaveTextContent('username:')
    expect(component.container).toHaveTextContent('password:')
    expect(component.container).toHaveTextContent('retype password:')
    expect(component.container).toHaveTextContent('name:')
  })
})
