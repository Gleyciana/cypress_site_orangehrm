/// <reference types="cypress" />

import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {

  it('Login-Success',()=>{
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })

  it('Login-Fail',()=>{
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAcessInvalid()
  })
})

