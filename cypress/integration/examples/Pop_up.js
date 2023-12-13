describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Handling chid windio using jQuery
       cy.get("#opentab").invoke('removeAttr','target').click();
        // Cypress cannot support cross domine
        //New origin means redirect to other domine 
       cy.origin("https://www.qaclickacademy.com",()=>
       {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
 
       })

    });
 
});
 