/// <reference types="cypress" />

import userData from '../fixtures/users/userData.json';

describe('Login-Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert-content > .oxd-text",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    firstNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField:"[placeholder='yyyy-dd-mm']",
    dateCloseButton:".--close",
    submitButton:"[type='submit']"

  }

  it.only('User Info Update', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('Gleyciana')
    cy.get(selectorList.middleNameField).clear().type('Campelo')
    cy.get(selectorList.lastNameField).clear().type('Sombra')
    cy.get(selectorList.genericField).eq(5).clear().type('123456789')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-07-23')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericField).eq(7).clear().type('1989-03-23')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('.oxd-toast-content').should('contain','Successfully Updated')
  })



  it('Login - Invalid username and password', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).contains('Invalid credentials')
  })
  it('Login - Invalid username', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).contains('Invalid credentials')

  })
  it('Login - Invalid password', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).contains('Invalid credentials')
  })
})

