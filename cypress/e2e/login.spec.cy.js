/// <reference types="cypress" />

describe('Login-Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login - Invalid username and password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Teste')
    cy.get("[name='password']").type
  ('teste123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials')
  })
  it('Login - Invalid username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Gleyci')
    cy.get("[name='password']").type
  ('admin123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials')

  })
  it('Login - Invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type
  ('teste123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials')
  })
})

