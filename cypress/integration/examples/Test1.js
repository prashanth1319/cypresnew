/// <reference  types = "cypress"/>

describe('My first test suite', function()
{

    it('My Firsttest case',function()
    {
        //test step
        cy.visit("https://optus-tenant-staging.blr0.geekydev.com/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F")
        //fixture
        cy.get("input[placeholder='Enter Email']").type("gerry+hqn@optusapp.com")
        cy.get("input[placeholder='Enter password']").type("123456@")
        cy.get("input[type='checkbox']").click()
        //cy.wait(5000)
        //cy.scrollTo('bottom')
        cy.get("section button[class='btn px-12 text-base bg-primaryColor md:min-h-[44px] h-[36px] rounded-xl text-white hover:bg-primaryColor justify-center items-center  md:font-semibold w-full md:text-xl hover:bg-primaryColor md:h-[7rem]  whitespace-nowrap']").click()
       // cy.xpath("//button[text()='Log in']").click()
       cy.xpath("//button[contains(@aria-label,'close')]//*[name()='svg']").click
        cy.xpath("//span[text()='Repair']").click()
        cy.xpath("//h1[text()='Repair Request']").click()
        cy.xpath("//body//div//div[@role='tabpanel']//div//div[1]//button[1]").click()
        cy.wait(3000)
        cy.xpath("//body//div//div[@role='tabpanel']//div//div[1]//button[1]").click()
        cy.wait(3000)
        cy.xpath("//body//div//div[contains(@role,'tabpanel')]//div//div[1]//button[1]").click()
        cy.wait(3000)
        cy.xpath("//body//div//div[@role='tabpanel']//div//div//div[2]//button[1]").click()
        cy.get("textarea[placeholder='Please give details']").type("Enter anything")
        cy.xpath("//div[text()='Select repair location']").click()
        cy.wait(20000)
        cy.xpath("//button[text()='Submit']").click()
    })





    it('My seconf case',function()
    {
        
        //handle mousehover in element
        //Visit web site
        //cy.get("selecter").invoke('show')
        //cy.contains('Top').click()
        //cy.url().should('inclide', 'top')
    })

})