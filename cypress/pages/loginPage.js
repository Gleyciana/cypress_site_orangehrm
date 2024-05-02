class loginPage {
    selectorList () {
      const selector = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        wrongCredentialAlert: ".oxd-alert-content > .oxd-text",
      }

      return selector

    }

    acessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username,password){
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()

    }
}

export default loginPage