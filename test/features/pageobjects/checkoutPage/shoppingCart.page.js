import { expect } from "chai";
import Page from "../page";
import chai from "chai";
import detailPage from "../detailsPage/detail.page";
class shoppingCartPage extends Page {
  get getItemsNumber() {
    return $$(`//*[@class="cart item"]`);
  }
  get listTitleName() {
    return $$(`//*[@class="cart item"]//*[@class="product-item-name"]/a`);
  }
  get listQuantity(){
    return $$(`//*[@class="col qty"]/div/div/label/input`)
  }
  get listPrices(){
    return $$(`//*[@class="col price"]//*[contains(text(),'$')]`)
  }

  get getNumberItem() {
    return this.getItemsNumber.length;
  }

  addProduct = async (table) => {
    const tableRow = table.hashes();
    for (const element of tableRow) {
      // click category
      const btnCategory = $(
        `//*[@id="ui-id-2"]/li/a//*[contains(text(),'${element.category}')]`
      );
      console.log(`1111: ${element.category}`);
      await this.click(await btnCategory);
      await browser.pause(2000);

      // click subCategory
      await this.btnSubCategory.forEach(async (value) => {
        const subCat = await value.getText();
        console.log(`text abc: ${subCat}`);
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
      await browser.pause(2000);
      // await browser.keys("Enter");
      await this.inputQuantity.setValue(element.quantity);
      await browser.pause(2000);
      await this.btnAddToCart.click();
      await browser.pause(2000);
    }
  };

  calculation = async () =>{
    let checkItems = await this.getNumberItem;
    console.log(checkItems);
    for(let i = 0; i < checkItems.length; i++){
      await this.listPrices.forEach(async (price) => {

        const getPrice = await price.getText()
        let convertPrice = await getPrice.substring(1)
        console.log(`each price: ${convertPrice}`)

      })
    }
  }

  verifyShopingCart = async (table) => {
    //    await Page.verifyPageHeadingCheckOut("verifyPageHeadingCheckOut")

    const tableRows = table.hashes();
    let checkItems = await this.getNumberItem;
    console.log(`1`);
    console.log(checkItems);
    console.log(`2`);
    const tableRow = table.hashes();
    console.log(tableRow);

    for (const row of tableRows) {

      

      await this.listTitleName.forEach(async (value) => {
        const titleName = await value.getText();
        if (titleName === row.name) {
          chai.expect(titleName).to.equal(row.name);
          return;
        }
      });

      await this.listQuantity.forEach(async (value) => {
        const quanTity = await value.getText();
        if (quanTity === row.quantity) {
          chai.expect(quanTity).to.equal(row.quantity);
          return;
        }
      });

      await this.listPrices.forEach(async (value) => {
        const prices = await value.getText();
        if (prices === row.price) {
          chai.expect(prices).to.equal(row.price);
          return;
        }
      });
    }
  };
}

export default new shoppingCartPage();
