
import {Given, When, Then}  from '@wdio/cucumber-framework'
import myaccountPage from '../pageobjects/myAccountPage/myaccount.page'
import panelHeaderPage from '../pageobjects/headerPage/panelHeader.page'
Then(/^I shall verify that the user information$/, async  () =>{

    await panelHeaderPage.navigateMyAccount()
    await browser.pause(2000)


  
})