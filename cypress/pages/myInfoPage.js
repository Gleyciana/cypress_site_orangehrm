class MyInfoPage{

    selectorList(){
        const selector= {
            firstNameField:"[name='firstName']",
            middleNameField:"[name='middleName']",
            lastNameField:"[name='lastName']",
            genericField:".oxd-input--active",
            dateField:"[placeholder='yyyy-dd-mm']",
            genericCombobox:".oxd-select-text--arrow",
            secondItemCombobox:".oxd-select-dropdown > :nth-child(27)",
            thirdItemCombobox:".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton:'.--close',
            submitButton:"[type='submit']"
            

        }

        return selector
    }

    fillPersonalDetails(firstName,middleName,lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId,otherId,driversLicenseNumber,expiryDate,dateBirth){
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().genericField).eq(7).clear().type(dateBirth)
        cy.get(this.selectorList().dateCloseButton).click()
    
    }

    saveForm(){
        cy.get(this.selectorList().submitButton).eq(0).click({ force: true})
        cy.get('.oxd-toast-content').should('contain','Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorList().genericCombobox).eq(0).click({ force: true})
        cy.get(this.selectorList().secondItemCombobox).click()
        cy.get(this.selectorList().genericCombobox).eq(1).click({ force: true})
        cy.get(this.selectorList().thirdItemCombobox).click()
    }

}

export default MyInfoPage