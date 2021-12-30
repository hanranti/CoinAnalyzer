const testUser1 = {
  username: 'Ash',
  password: 'Williams',
  name: 'Bruce Campbell'
}

const testUser2 = {
  username: 'tester',
  password: 'something',
  name: 'anything'
}

/**const testUser3 = {
  username: 'actualUser',
  password: 'strongPass',
  name: 'named'
}*/

const login = (username, password) => {
  cy.get('input[name=username]').eq(0).type(username, { force: true })
  cy.get('input[name=password]').eq(0).type(password, { force: true })
  cy.get('button[name=login]').click({ force: true })
  cy.wait(5000)
}

const createUser = (username, password, passwordCheck, name) => {
  cy.get('input[name=username]').eq(1).type(username)
  cy.get('input[name=password]').eq(1).type(password)
  cy.get('input[name=passwordCheck]').type(passwordCheck)
  cy.get('input[name=name]').type(name)
  cy.get('button[name=signup]').click()
  cy.wait(5000)
}

/**const logout = () => {
  cy.contains('Logout').click()
  cy.wait(5000)
}*/

describe('createUser tests', function() {
  beforeEach(function() {
    cy.visit('http://localhost:1234')
    cy.wait(5000)
  })

  it('can create user', function(){
    createUser(testUser1.username, testUser1.password, testUser1.password, testUser1.name)
  })

  it('can not log in to non created user', function() {
    login(testUser2.username, testUser2.password)
    cy.contains('Sign in', { timeout: 10000 })
    cy.contains('Sign up', { timeout: 10000 })
  })
})