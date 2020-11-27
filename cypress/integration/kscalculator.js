/// <reference types="Cypress" />

var config = require('../config/ws.json')

describe('KiwiSaver Retirement Calculator', function()  
{
    it('Click Current Age info icon to displaye the info message', function() 
    {
        cy.visit(config.url)
            
        cy.get('#ubermenu-section-1-6-ps').trigger('mouseover')
        cy.get('.sw-ubermenu-column-items')
            // .get('.sw-ubermenu-column-item.Primary')
            .get('#ubermenu-item-cta-kiwisaver-calculators-ps').click({multiple: true})
        
        cy.get('.sw-sidenav-item-link.link')
            .get('.sw-sidenav-item-link-text.last:visible').click()


        cy.get('.icon-target.icon-target-help-toggle.icon-btn.icon-btn-info.ir.ng-scope')
            // .get('').click()
        // cy.wait(1000)
    })

    it('Calculate projected balances where age = 30, employed, @82000pa, @4%, and Defensive Risk ', function() 
    {
        cy.get('.wpnib-field-current-age.field-group.ng-isolate-scope')
            // .get('.text').type(config.tc[0].age)

    })

    // it('Calculate projected balances where age = 45, self-employed, @100000pa, voluntary contribution 90fn, Conservative Risk, saving goal 290,000', function() 
    // {
    //     cy.get('')
    //         // .get('.text').type('45')

    // })

    // it('Calculate projected balances where age = 55, not-employed, current balance 140,000, voluntary contribution 10pa, Balance Risk, saving goal 200,000', function() 
    // {
    //     cy.get('')
    //     // .get('.text').type('45')

    // })
})