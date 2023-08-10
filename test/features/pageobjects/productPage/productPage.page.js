import { expect } from "chai";
import Page from "../page";
import chai from "chai";
import popUpCart from "../popUpCart/popUpCart.page"
import calculatorPage from "../detailsPage/calculator.page";
class ProductPage extends Page {
  get btnSubCategory() {
    return $$(`//*[@id="narrow-by-list2"]/dd/ol/li/a`);
  }
  get txtProductTitle() {
    return $$(".product-item-link");
  }
  get inputQuantity() {
    return $("#qty");
  }
  get txtModel() {
    return $(`//*[@class="product attribute sku"]/div`);
  }

  get btnAddToCart() {
    return $(`#product-addtocart-button`);
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

      chai.expect(await this.txtModel.getText()).to.equal(element.model);
    //   expect(await this.txtModel.getText()).toEqual(element.model);
      await browser.pause(2000)
      // await browser.keys("Enter");
      await this.inputQuantity.setValue(element.quantity);
      await browser.pause(3000)
      // await calculatorPage.calculator()
      await this.btnAddToCart.click();
      


      await browser.pause(2000)
    }

  };

  


}

export default new ProductPage();
