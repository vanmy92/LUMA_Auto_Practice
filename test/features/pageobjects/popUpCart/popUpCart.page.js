import Page from "../page";
import chai from "chai";
import calculatorPage from "../detailsPage/calculator.page";
import detailPage from "../detailsPage/detail.page";
class PopUpCart extends Page {
  get btnProceedToCheckout() {
    return $(`#top-cart-btn-checkout`);
  }
  get txtTotalNumItems() {
    return $(`//*[@class="count"]`);
  }
  get txtTotalPrice() {
    return $(`//*[@class="subtotal"]/div/span/span`);
  }
  get txtEachPriceItems() {
    return $$(
      `//*[@class="minicart-items-wrapper"]/ol/li/div//*[@class="price"]`
    );
  }
  get txtEachQtyItems() {
    return $$(
      `//*[@class="minicart-items-wrapper"]/ol/li/div//*[@data-item-qty]/input`
    );
  }

  get txtEachNameItem() {
    return $$(`//*[@class="minicart-items-wrapper"]/ol/li/div/div/strong/a`);
  }

  get numberItems() {
    return $$(`//*[@class="product"]`);
  }

  get btnYourCart() {
    return $(`//*[@class="action showcart"]`);
  }
  // Actions

  async clickProceedToCheckOut() {
    await this.click(await this.btnProceedToCheckout);
  }
  async clickYourCart() {
    await this.click(await this.btnYourCart);
  }
  convertTotalPrice = async () => {
    let totalPriceUI = await this.txtTotalPrice.getText();
    let convertTotal = parseFloat(totalPriceUI.replace(/[^0-9.-]+/g, ""));
    console.log(convertTotal);
    return convertTotal;
  };
  verifyGenerallyInfor = async (table) => {
    const tableRow = table.hashes();

    for (const elment of tableRow) {
      const numerItems = await this.txtTotalNumItems.getText();
      console.log(`1`);
      await chai.expect(numerItems).to.equal(elment.totalItems);

      const totalPrice = await calculatorPage.calculatorAllItem();
      const convertNumTotalPrice = await detailPage.separatePrice(totalPrice);
      console.log(`2`);
      console.log(convertNumTotalPrice);
      console.log(elment.totalPrices);
      console.log(`3`);
      // let numItem = await this.numberItems.length;
      // console.log(typeof numItem);
      // let conNumItem = parseInt(numItem);
      // console.log(typeof conNumItem);
      // console.log(conNumItem);
      // await chai.expect(conNumItem).to.equal(elment.items);

      let numItem = await this.numberItems.length;

      console.log(typeof numItem);
      let conNumItem = await parseInt(numItem);
      console.log(typeof conNumItem);
      console.log(conNumItem);
      let itemscn = await parseInt(elment.items);
      await chai.expect(conNumItem).to.equal(itemscn);

      console.log(`4`);
      let totalAll = await this.convertTotalPrice();
      let b = await parseInt(elment.totalPrices);
      chai.expect(totalAll).to.equal(b);
    }

    // await chai.expect(numerItems).to.equal(tableRow.totalItems)

    // await chai.expect(convertNumTotalPrice).to.equal(tableRow.totalPrices)
    //   await chai.expect(await this.txtModel.getText()).to.equal(element.model);
  };

  verifyDetailsInfor = async (table) => {
    const tableRow = table.hashes();

    for (const row of tableRow) {
      await this.txtEachNameItem.forEach(async (value) => {
        const titleName = await value.getText();
        if (titleName === row.name) {
          chai.expect(titleName).to.equal(row.name);
          return;
        }
      });
      await this.txtEachQtyItems.forEach(async (value) => {
        const txtQty = await value.getValue();
        if (txtQty === row.quantity) {
          chai.expect(txtQty).to.equal(row.quantity);
          return;
        }
      });

      await this.txtEachPriceItems.forEach(async (value) => {
        const txtQty = await value.getText();
        const convertNum = txtQty.substring(1);
        if (convertNum === row.quantity) {
          chai.expect(convertNum).to.equal(row.price);
          return;
        }
      });
    }
  };

  _updateQuantity = async (table) => {
    console.log(`123134`);
    const tableRow = table.hashes();
    console.log(tableRow);
    for (const row of tableRow) {
      await this.txtEachNameItem.forEach(async (value) => {
        const titleName = await value.getText();
        console.log(`1`);
        console.log(titleName);
        if (titleName === row.name) {
          const setInput = $(
            `//*[@class="product"]//*[contains(text(),'${row.name}')]/../..//*[@data-item-qty]`
          );
          await this.click(await setInput);
          await browser.keys(["Control", "A"]);
          await browser.keys(["Control", "C"]);
          await browser.keys("Delete");
          await setInput.setValue(row.quantity);
          const btnUpdate = await $(
            `//*[@class="product"]//*[contains(text(),'${row.name}')]/../..//*[@class="details-qty qty"]/button`
          );
          await browser.pause(2000);
          await this.click(await btnUpdate);
          await browser.pause(2000);
          await chai.expect(titleName).to.equal(row.name);
          return;
        }
      });

      // let a = await this.txtEachNameItem.leng;
      // let  b= await parseInt(a)
      // console.log(typeof b)
      // for (const row_2 of await this.txtEachNameItem) {
      //   const titleName = await row_2.getText();
      //   console.log(`1`);
      //   console.log(titleName);
      //   if (titleName === row.name) {
      //     console.log(`2`);
      //     console.log(row.name);
      //     await chai.expect(titleName).to.equal(row.name);
      //     return;
      //   }
      // }
    }
  };
  get updateQuantity() {
    return this._updateQuantity;
  }
  set updateQuantity(value) {
    this._updateQuantity = value;
  }

  // DONE
  // updateQuantity_2 = async () => {
  //   console.log(`123134`);

  //   const setInput =  $(`//*[@class="product"]//*[contains(text(),'Push It Messenger Bag')]/../..//*[@data-item-qty]`)

  //   const btnUpdate =  $(`//*[@class="product"]//*[contains(text(),'Push It Messenger Bag')]/../..//*[@class="details-qty qty"]/button`)
  //   await setInput.setValue(123);
  //   await browser.pause(2000)
  //   await click(btnUpdate)
  //   await browser.pause(2000)

  // };
}
export default new PopUpCart();
