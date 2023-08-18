import { Given, When, Then } from "@wdio/cucumber-framework";
import authPage from "../pageobjects/auth.page";
import writeRead from "../ReadOrWriteFile/writeRead";
import faker from "faker";
import utils from "../utils/Utils";
import allureReporter from "@wdio/allure-reporter";
import homePage from "../pageobjects/home.page";
Then(/^Create an account with the random username$/, async () => {
  console.log("account creation");
  allureReporter.addStep("Create an account with the random username");
  const randomStr = Math.random().toString(36).substring(2, 5);
  const emailID = `mytest_${randomStr}@gmail.com`;
  allureReporter.addSeverity("critical");
  let filename = `${process.cwd()}/data/user_pw_autorandom/userPassword.json`;
  await writeRead.writeFileWithCallback(filename, emailID);
  // firstname, lastname, email, pw, cfpw

  const firstname = faker.name.firstName();
  const lastname = faker.name.lastName();

  const pw = "1234asdf@";
  const cfpw = pw;

  utils.dynamicData.email = emailID;
  utils.dynamicData.password = cfpw;

  await authPage.createAccount(firstname, lastname, emailID, pw, cfpw);
  await browser.debug()
});
Given(/^I am on the Sign In page$/, async () => {
  await authPage.signOut();

  await browser.pause(2000);
  await homePage.navigateToSignIn();
  await browser.pause(2000);
});

When(
  /^Login using newly created (dynamic|static) user credentials$/,
  async (cendentialType) => {
    let email = "";
    if (cendentialType === "dynamic") {
      email = utils.dynamicData.email;
    } else {
      email = utils.staticData.email;
    }
    await authPage.signIn();
    allureReporter.addSeverity("minor");
    await browser.pause(1000);
  }
);

Then(/^I loggin with the defualt username and password$/, async () => {
  await authPage.signIn();
  // allureReporter.addSeverity("minor")
  await browser.pause(1000);
});

Then(/^Verify user is logged user$/, async () => {
    await authPage.verifyLoginSuccefullNewAccount();
    // allureReporter.addSeverity("minor")
    await browser.pause(1000);
  });
  Then(/^Create a list account$/, async () => {
    await authPage.verifyLoginSuccefullNewAccount();
    // allureReporter.addSeverity("minor")
    await browser.pause(1000);
  });
  
  