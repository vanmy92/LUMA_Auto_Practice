import { Given, When, Then } from "@wdio/cucumber-framework";
import commonPage from "../pageobjects/common.page";
import homePage from "../pageobjects/home.page";
import { expect } from "chai";

Given(/^I am on the home page$/, async () => {
  commonPage.openHomepage();
  await browser.pause(2000)
});

When(/^Navigate to SignUp page$/, async () => {
  homePage.navigateToSignUp();
  await browser.pause(2000)

});
