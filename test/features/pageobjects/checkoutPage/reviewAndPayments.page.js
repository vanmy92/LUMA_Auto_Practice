import { expect } from "chai";
import Page from "../page";
import shippingAddressPage from "./shippingAddress.page";
class ReviewAndPaymentPage extends Page {
  get btnPlaceOrder() {
    return $(`//*[@class="action primary checkout"]`);
  }
 
 
  async clickPlaceOder(){
    await this.click(await this.btnPlaceOrder)
  }
  
  placeOder = async() =>{

    // await this.verifyPageHeadingCheckOut("Payment Method")
    await browser.pause(2000)
    await this.clickPlaceOder()
    
    await browser.pause(3000)
}



}

export default new ReviewAndPaymentPage();
