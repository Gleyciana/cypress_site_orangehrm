/// <reference types="cypress" />

describe('Login-Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: ".oxd-alert-content > .oxd-text"

  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Invalid username and password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Teste')
    cy.get(selectorList.passwordField).type('teste123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).contains('Invalid credentials')
  })
  it('Login - Invalid username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Gleyci')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).contains('Invalid credentials')

  })
  it('Login - Invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('teste123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).contains('Invalid credentials')
  })
})

