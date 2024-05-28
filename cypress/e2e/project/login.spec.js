describe('Log in to the website', () => {

    it('Successful Login', () => {
        cy.visit('/')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Asserties om te controleren of de login succesvol is
        cy.url().should('include', '/inventory')
        cy.get('#inventory_container').should('be.visible')
    })

    it('failed login: correct username - wrong password', () => {
        cy.visit('/')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('password')
        cy.get('#login-button').click()

        cy.get('.error-message-container.error').should('contain', 'Username and password do not match any user')
    })

    it('failed login: no username filled out - password filled out', () => {
        cy.visit('/')

        cy.get('#user-name').clear()
        cy.get('#password').type('password')
        cy.get('#login-button').click()

        cy.get('.error-message-container.error').should('contain', 'Username is required')
    })

    it('failed login: username filled out - no password filled out', () => {
        cy.visit('/')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').clear()
        cy.get('#login-button').click()

        cy.get('.error-message-container.error').should('contain', 'Password is required')
    })

    it('failed login: locked out user', () => {
        cy.visit('/')

        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('.error-message-container.error').should('contain', 'user has been locked out')
        cy.get('.error_icon').should('be.visible')
    })
})
