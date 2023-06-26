import Page from "../page";
import detailPage from "./detail.page";
import utils from "../../utils/Utils";
class CalculatorPage extends Page {
  calculator = async () => {
    let price = await detailPage.separatePrice();
    console.log(`--------`);
    console.log(price);
    let qty = await detailPage.txtQty.getValue();
    console.log(`qty: ${qty}`);
    console.log(qty);
    let total = price * qty;
    return total;
  };
  calculatorAllItem = async () => {
    let total = await this.calculator();
    console.log(`total: ${total}`);
    let a = utils.prices;
    console.log(`one price`);
    console.log(a.push(total));
    let c = a;
    utils.prices = c;
    console.log(utils.prices);
    console.log(`one price`);
    let sum = 0;
    for (let i = 0; i < c.length; i++) {
      sum += c[i];
    }
    console.log(`total price: ${sum}`)

  };
}
export default new CalculatorPage();
