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
      `//*[@class="minicart-items-wrapper"]/ol/li/div//*[@data-item-qty]`
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
      let numItem = await this.numberItems.length;
      console.log(typeof numItem);
      let conNumItem = parseInt(numItem);
      console.log(typeof conNumItem);
      console.log(conNumItem);
      await chai.expect(conNumItem).to.equal(elment.items);

      console.log(`4`);
      let totalAll = await this.convertTotalPrice();
      console.log(totalAll);
      chai.expect(totalAll).to.equal(elment.totalPrices);
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

  updateQuantity = async (table) => {
    const tableRow_1 =await table.hashes();

    for (const row of tableRow_1) {
      await this.txtEachNameItem.forEach(async (value) => {
        const titleName = await value.getText();
        console.log(`titleName ${titleName}`)
        console.log(`row name ${row.name}`)
        console.log(`title name ${titleName}`)
        if (titleName === row.name) {
          chai.expect(titleName).to.equal(row.name);
          //await this.txtEachQtyItems.forEach(async (value) => {
            //await value.setValue
            // const txtQty = await value.getValue();
            // if (txtQty === row.quantity) {
            //   chai.expect(txtQty).to.equal(row.quantity);
            //   return;
            // }
          //}
          //);
          let index = value.index()
          console.log(`index: ${index}`)
          await (await this.txtEachQtyItems[index]).setValue(row.quantity)
          return;
        }
      });

      await browser.pause(2000)

    }
  };
}
export default new PopUpCart();
