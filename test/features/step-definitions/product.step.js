import {Given, When, Then} from "@wdio/cucumber-framework"
import navigationPage from "../pageobjects/navigationPage/navigation.page"
import productPagePage from "../pageobjects/productPage/productPage.page"
import authPage from "../pageobjects/auth.page"
import myaccountPage from "../pageobjects/myAccountPage/myaccount.page"
When(/^I Add below the product to cart$/, async (table) =>{
    
    // await navigationPage.clickBags()       test click()

    await productPagePage.addProduct(table)


})
Then(/^User changes the address of the checkout$/, async()=>{
    await authPage.clickMyAccount()
    await myaccountPage.clickManageAddresses()
    
})
Then(/^I shall validate shopping cart as below$/, async (table) =>{

})