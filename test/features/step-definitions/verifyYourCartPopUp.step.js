import {Given, When, Then} from "@wdio/cucumber-framework"
import calculatorPage from "../pageobjects/detailsPage/calculator.page"
Then(/^Calculate all the products$/, async () =>{
   await calculatorPage.calculatorAllItem()
    await browser.debug()
})
