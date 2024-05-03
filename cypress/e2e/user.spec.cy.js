/// <reference types="cypress" />

import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Login-Orange HRM Tests', () => {

  it('User Info Update', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(),chance.last(),chance.last())
    myInfoPage.fillEmployeeDetails(chance.string({ length: 10 }),chance.string({ length: 8 }),chance.string({ length: 7 }),'2024-10-10','1989-03-23')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
  })
})

