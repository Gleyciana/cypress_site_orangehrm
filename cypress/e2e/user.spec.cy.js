/// <reference types="cypress" />

import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Login-Orange HRM Tests', () => {

  const selectorList = {
    
   
    firstNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField:"[placeholder='yyyy-dd-mm']",
    genericCombobox:".oxd-select-text--arrow",
    secondItemCombobox:".oxd-select-dropdown > :nth-child(27)",
    thirdItemCombobox:".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton:".--close",
    submitButton:"[type='submit']"

  }

  it.only('User Info Update', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    
    cy.get(selectorList.firstNameField).clear().type('Gleyciana')
    cy.get(selectorList.middleNameField).clear().type('Campelo')
    cy.get(selectorList.lastNameField).clear().type('Sombra')
    cy.get(selectorList.genericField).eq(5).clear().type('123456789')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-07-23')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericField).eq(7).clear().type('1989-03-23')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click({ force: true})
    cy.get('.oxd-toast-content').should('contain','Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorList.genericCombobox).eq(0).click({ force: true})
    cy.get(selectorList.secondItemCombobox).click()
    cy.get(selectorList.genericCombobox).eq(1).click({ force: true})
    cy.get(selectorList.thirdItemCombobox).click()
    
  })
})

