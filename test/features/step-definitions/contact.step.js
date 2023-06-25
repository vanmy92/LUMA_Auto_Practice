import { Given, When, Then } from "@wdio/cucumber-framework";
import contactUsPage from "../pageobjects/contactUsPage/contactUs.page";

When(/^I am on the contact page$/, async () => {
    contactUsPage.submitContactUs();
  await browser.debug()
});

// When(/^I send refund request to customer care for prev. oder$/, async () => {
//   homePage.navigateToSignUp();
//   await browser.pause(2000)

// });
