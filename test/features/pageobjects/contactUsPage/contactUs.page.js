import { expect } from "chai";
import Page from "../page";
import footerPage from "../footerPage/footer.page";
import chai from "chai";
import utils from "../../utils/Utils"
class ContactUsPage extends Page {
  get inputPhone() {
    return $(`#telephone`);
  }
  get defaultName() {
    return $(`#name`);
  }
  get defaultEmail() {
    return $(`#email`);
  }
  get inputComment() {
    return $(`#comment`);
  }
  get submitbtn() {
    return $(`//*[@class="action submit primary"]`);
  }
  get txtThanks(){
    return $(`[data-bind="html: $parent.prepareMessageForHtml(message.text)"]`)
  }

  async clickSubmit() {
    await this.click(await this.submitbtn);
  }

  submitContactUs = async () => {
    await footerPage.clickContactUs();
    await browser.pause(3000);

    // await chai.expect(await this.defaultName.getText()).to.equal(global.ShareVariable.name);
    await chai
      .expect(await this.defaultEmail.getValue())
      .to.equal(utils.dynamicData.email);

    await this.inputPhone.setValue("09879789879");
    await this.inputComment.setValue(
      "hi there, \n" +
        "i got some issue with my product i bought yesterday. can you please help me with refund  the amount ! \n" +
        " thanks"
    );
    await this.clickSubmit();

    await browser.debug();
  };
  verifyAfterClickSubmit = async () => {
    let textThanks = await this.txtThanks.getText();
    let textToConfirm = "Thanks for contacting us with your comments and questions. We'll respond to you very soon."
    await chai.expect(textThanks).to.equal(textToConfirm)
    await browser.debug();


  }
}

export default new ContactUsPage();
