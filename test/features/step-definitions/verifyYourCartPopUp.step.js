import {Given, When, Then} from "@wdio/cucumber-framework"
import calculatorPage from "../pageobjects/detailsPage/calculator.page"
import popUpCartPage from "../pageobjects/popUpCart/popUpCart.page"
Then(/^Calculate all the products$/, async () =>{
   await calculatorPage.calculatorAllItem()
    await browser.debug()
})

Then(/^I verify generally all the information is correct in the popup$/, async (table) =>{
    // await calculatorPage.calculatorAllItem()
    await popUpCartPage.clickYourCart()
    await browser.pause(1000)
    await popUpCartPage.verifyGenerallyInfor(table)
    await browser.debug()
 })


 Then(/^I verify details information are correct in the popup$/, async (table) =>{
    await popUpCartPage.verifyDetailsInfor(table)
    await browser.debug()
 })

 Then(/^I want to update some quantity in each items in the popup$/, async (table) =>{
    await popUpCartPage.updateQuantity(table)
    await browser.debug()
 })
