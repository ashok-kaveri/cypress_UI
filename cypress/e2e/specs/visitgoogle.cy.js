const Visitgooglepage = require("../pageobjects/visitgoogle.page");


describe('Visit to google site', () => {
    beforeEach(() => {
     
      cy.visit('https://google.co.in')
    })

    it('displays Gmail Link', () => {
      cy.get('.gb_7d > .gb_e:nth-child(1)').should('have.text', 'Gmail')
    });  

    it('displays Images Link', () => {
      cy.get('.gb_7d > .gb_e:nth-child(2)').should('have.text', 'Images')
    });

    // it('enters text in search box', () => {
    //   cy.get('.gLFyf').type('Ashok')
    // });
  
    it('enters search', () => {
        Visitgooglepage.enterText('AshokKumar');
    });
})