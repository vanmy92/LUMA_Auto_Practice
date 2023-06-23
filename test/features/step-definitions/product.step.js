import {Given, When, Then} from "@wdio/cucumber-framework"
import navigationPage from "../pageobjects/navigationPage/navigation.page"
import productPagePage from "../pageobjects/productPage/productPage.page"
import authPage from "../pageobjects/auth.page"
import myaccountPage from "../pageobjects/myAccountPage/myaccount.page"
import addressBookPage from "../pageobjects/addressBookPage/addressBook.page"
import faker from "faker";

When(/^I Add below the product to cart$/, async (table) =>{
    
    // await navigationPage.clickBags()       test click()

    await productPagePage.addProduct(table)


})
Then(/^User changes the address of the checkout$/, async()=>{
    // await authPage.clickMyAccount()
    await myaccountPage.clickManageAddresses()

    const address = {
        company: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        streetAddress_1: faker.address.streetAddress(),
        streetAddress_2: faker.address.secondaryAddress(),
        streetAddress_3: faker.address.country(),
        city: faker.address.city(),
        zip: faker.address.zipCode(),
      };
     await addressBookPage.enterAddress(address)
     await browser.debug()
      

    // await addressBookPage.randomStateAndCountry()
})
Then(/^I shall validate shopping cart as below$/, async (table) =>{

})