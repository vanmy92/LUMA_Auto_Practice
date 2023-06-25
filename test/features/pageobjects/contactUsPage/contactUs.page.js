import { expect } from "chai";
import Page from "../page";
import footerPage from "../footerPage/footer.page";
import chai from "chai";
class ContactUsPage extends Page {
  get inputPhone() {
    return $(`#telephone`);
  }
  get defaultName(){
    return $(`#name`)
  }
  get defaultEmail(){
    return $(`#email`)
  }
  get inputComment() {
    return $(`#comment`);
  }
  get submitbtn() {
    return $(`//*[@class="action submit primary"]`);
  }
  

  
 
  async clickSubmit(){
    await this.click(await this.submitbtn)
  }
  
  submitContactUs = async() =>{
    await footerPage.clickContactUs();
    await browser.pause(3000)

    // await chai.expect(await this.defaultName.getText()).to.equal(global.ShareVariable.name);
    await chai.expect(await this.defaultEmail.getText()).to.equal(global.ShareVariable.email);

    await this.inputPhone.setValue("09879789879")
    await this.inputComment.setValue(
        "hi there, \n" +
        "i got some issue with my product i bought yesterday. can you please help me with refund  the amount ! \n" +
        " thanks"
    )
    await this.clickSubmit()
    
    await browser.debug()
}



}

export default new ContactUsPage();
