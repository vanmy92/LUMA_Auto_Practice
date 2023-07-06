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
    // let total = await this.calculator();
    console.log(`total one item: ${total}`);
    let a = utils.prices; 
    console.log(`one price after assign`);
    console.log(a)
    console.log(a.push(total));
    console.log(`1`)
    let c = a;
    utils.prices = c;
    console.log(`2`)
    console.log(utils.prices);
    console.log(`3`);
  };
  calculatorAllItem = async () => {
    let c = utils.prices
    console.log(`list of prices: ${c}`)
    let sum = 0;
    for (let i = 0; i < c.length; i++) {
      sum += c[i];
    }
    console.log(`total all price: ${sum}`)
    return sum
  };
}
export default new CalculatorPage();
