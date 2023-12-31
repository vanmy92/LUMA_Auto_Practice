import {Given, When, Then} from "@wdio/cucumber-framework"
import navigationPage from "../pageobjects/navigationPage/navigation.page"
import productPagePage from "../pageobjects/productPage/productPage.page"
import authPage from "../pageobjects/auth.page"
import myaccountPage from "../pageobjects/myAccountPage/myaccount.page"
import addressBookPage from "../pageobjects/addressBookPage/addressBook.page"
import faker from "faker";
import popUpCart from "../pageobjects/popUpCart/popUpCart.page"
import shippingAddressPage from "../pageobjects/checkoutPage/shippingAddress.page"
import reviewAndPaymentsPage from "../pageobjects/checkoutPage/reviewAndPayments.page"
import shoppingCartPage from "../pageobjects/checkoutPage/shoppingCart.page"
import utils from "../utils/Utils"
When(/^I Add below the product to cart$/, async (table) =>{
    
    // await navigationPage.clickBags()       test click()

    await productPagePage.addProduct(table)
    await browser.pause(1000)
    await browser.debug()


})
Then(/^User changes the address of the checkout$/, async()=>{
    // await authPage.clickMyAccount()
    await myaccountPage.clickManageAddresses()

    const addresses = {
        company: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        streetAddress_1: faker.address.streetAddress(),
        streetAddress_2: faker.address.secondaryAddress(),
        streetAddress_3: faker.address.country(),
        city: faker.address.city(),  
        zip: faker.address.zipCode(),
      };

      utils.dynamicData.address = addresses

     await addressBookPage.enterAddress(addresses)
     await browser.pause(2000)
      

    // await addressBookPage.randomStateAndCountry()
      console.log(`11111111111`)
    console.log(utils.dynamicData.address)
    console.log(utils.dynamicData.email)
    console.log(utils.dynamicData.password)

    

})
Then(/^I shall validate shopping cart as below$/, async (table) =>{
    await popUpCart.clickYourCart()
    await popUpCart.clickProceedToCheckOut()
    await shippingAddressPage.verifyShopingCart(table)
   await browser.debug()
})
Then(/^I shall be able to buy the product$/, async () =>{
    
    await shippingAddressPage.clickNextBtn()
    await reviewAndPaymentsPage.placeOder()
   await browser.debug()
})

Then(/^User clicks on YourCart button$/, async () =>{
    
    await popUpCart.clickYourCart()
   await browser.pause(2000)
//    await browser.debug()

})

Then(/^User clicks on View And Edit button$/, async () =>{
    
    await popUpCart.clickViewAndEditCart()
   await browser.pause(2000)
    // await browser.debug()

})
When(/^Calculation each item in the shopping cart$/, async () =>{
    
    await shoppingCartPage.calculation()
    await browser.debug()


})
Then(/^Verify details information are correct$/, async (table) =>{
    
    await shoppingCartPage.verifyShopingCart(table)
    await browser.debug()

})
Then(/^Verify the total price calculation is correct with the page shown$/, async () =>{
    
    await shoppingCartPage.verifyCalculateTOSubTotal()
    await browser.debug()

})
Then(/^User clicks delete all items in YourCart$/, async () =>{
    
    await popUpCart.deleteAllItemsInYourCart()
    await browser.debug()

})

