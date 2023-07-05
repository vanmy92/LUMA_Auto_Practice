import { expect } from "chai";
import Page from "../page";

class ShippingAddressPage extends Page {
  get getItemsNumber() {
    return $(`//*[@class="cart item"]`);
  }
  
  async clickNextBtn(){
    await this.click(await this.btnNext)
  }
  addProduct = async (table) => {
    const tableRow = table.hashes();
    for (const element of tableRow) {
      // click category
      const btnCategory = $(
        `//*[@id="ui-id-2"]/li/a//*[contains(text(),'${element.category}')]`
      );
      console.log(`1111: ${element.category}`)
      await this.click(await btnCategory);
      await browser.pause(2000);

      // click subCategory
      await this.btnSubCategory.forEach(async (value) => {
        const subCat = await value.getText();
        console.log(`text abc: ${subCat}` )
        if (subCat === element.subCategory) {
          await value.click();
          await browser.pause(2000);
          return;
        }
      });
      // click name
      await this.txtProductTitle.forEach(async (value) => {
        const productName = await value.getText();
        if (productName === element.name) {
          await browser.pause(2000);
          await value.click();
          return;
        }
      });

      await chai.expect(await this.txtModel.getText()).to.equal(element.model);
    //   expect(await this.txtModel.getText()).toEqual(element.model);
      await browser.pause(2000)
      // await browser.keys("Enter");
      await this.inputQuantity.setValue(element.quantity);
      await browser.pause(2000)
      await this.btnAddToCart.click();
      await browser.pause(2000)
    }
    
  };

  verifyShopingCart = async (table)=>{

//    await Page.verifyPageHeadingCheckOut("verifyPageHeadingCheckOut")

   const tableRows = table.hashes();
   for(const row of tableRows){
    await this.listTitleName.forEach(async (value) =>{
        const titleName = await value.getText()
        if(titleName === row.name){
            chai.expect(titleName).to.equal(row.name);
            return
        }
    })

    await this.listQuantity.forEach(async (value) =>{
        const quanTity = await value.getText()
        if(quanTity === row.quantity){
            chai.expect(quanTity).to.equal(row.quantity);
            return
        }
    })


   }


  }



}

export default new ShippingAddressPage();
