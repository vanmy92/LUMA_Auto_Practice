import { expect } from "chai";
import Page from "../page";

class FooterPage extends Page {
  get btncontactUs() {
    return $(`//a[text()="Contact Us"]`);
  }
 
  

  
 
  async clickContactUs(){
    await this.click(await this.btncontactUs)
  }


}

export default new FooterPage();
