import { Given, When, Then } from "@wdio/cucumber-framework";
import contactUsPage from "../pageobjects/contactUsPage/contactUs.page";

When(/^I am on the contact page$/, async () => {
  await contactUsPage.submitContactUs();
  await browser.pause(2000);
});

When(/^I send refund request to customer care for prev. oder$/, async () => {
  await contactUsPage.verifyAfterClickSubmit();

  await browser.debug();
});
