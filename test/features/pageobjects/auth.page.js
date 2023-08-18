import writeRead from "../ReadOrWriteFile/writeRead";
import { expect } from "chai";
import Page from "./page";
import chai from "chai";
class AuthPage extends Page {
  get input_firstName() {
    return $("#firstname");
  }
  get input_lastName() {
    return $("#lastname");
  }
  get input_email() {
    return $("#email_address");
  }
  get input_password() {
    return $("#password");
  }
  get input_confirmPassword() {
    return $("#password-confirmation");
  }
  get input_emailLogin() {
    return $(`#email`);
  }
  get input_passWordLogin() {
    return $(`#pass`);
  }
  get btnSignIn() {
    return $(`#send2`);
  }

  get btnCreateAnAccount() {
    return $(`#form-validate > div > div.primary > button > span`);
  }

  get btnLogout_1() {
    return $(`//*[@class="customer-welcome"]/span/button`);
  }
  get btnSignOut() {
    return $(`//*[@class="customer-menu"]/ul/li[3]`);
  }
  get btnMyAccount() {
    return $(`//*[@class="customer-menu"]/ul/li[3]`);
  }
  createAccount = async (firstname, lastname, email, pw, cfpw) => {
    await this.input_firstName.setValue(firstname);
    await this.input_lastName.setValue(lastname);
    await this.input_email.setValue(email);
    await this.input_password.setValue(pw);
    await this.input_confirmPassword.setValue(cfpw);
    await browser.pause(2000);
    await this.btnCreateAnAccount.click();
    await browser.pause(2000);
  };

  signIn = async () => {
    let dataemail = `${process.cwd()}/data/user_pw_autorandom/userPassword.json`;
    let emailConvert = await writeRead.readFileWithCallback(dataemail);
    console.log(`email :${emailConvert}`);
    await this.input_emailLogin.setValue(emailConvert);
    await this.input_passWordLogin.setValue("1234asdf@");
    await browser.pause(2000);
    await this.btnSignIn.click();
    await browser.pause(3000);
  };
  signOut = async () => {
    await this.btnLogout_1.click();
    await browser.pause(1000);
    await this.btnSignOut.click();
  };
  async clickMyAccount() {
    await this.click(await this.btnLogout_1);
    await browser.pause(1000);
    await this.click(await this.btnMyAccount);
  }
  verifyLoginSuccefullNewAccount = async ()=>{
    const messageText = $('div*=Thank you for registering with Main Website Store.').getText();
    const textcomparise = "Thank you for registering with Main Website Store."
    await chai.expect(await messageText).to.equal(textcomparise);
  }

}
export default new AuthPage();
