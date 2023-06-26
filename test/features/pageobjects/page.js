import chai from "chai";

class Page {
  constructor() {}

  async navigateTo(path) {
    await browser.url(path);
  }

  async click(ele) {
    await ele.waitForClickable({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.click();
  }

  async typeInto(ele, text) {
    await ele.waitForDisplayed({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.setValue(text);
  }

  async typeIntoNumber(ele, text) {
    await ele.waitForDisplayed({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.setValue(text);
  }
  async verifyPageHeadingCheckOut(title) {
    await browser.waitUntil(
      async () =>
        (await $(
          '//*[@class="checkout-shipping-address"]/div[1]'
        ).getText() === title) ,
      {
        timeout: 1000,
        timeoutMsg: "expected text to different after 10s",
      }
    );
    const headingTitle = await $(
      '//*[@class="checkout-shipping-address"]/div[1]'
    );
    await chai.expect(await headingTitle.getText()).to.equal(title);
  }

  async verifyPageHeadingCheckOut_2(title) {
    await browser.waitUntil(
      async () =>
        (await $(
          '//*[@class="items payment-methods"]/div/div[1]'
        ).getText() === title) ,
      {
        timeout: 1000,
        timeoutMsg: "expected text to different after 10s",
      }
    );
    const headingTitle = await $(
      '//*[@class="items payment-methods"]/div/div[1]'
    );
    await chai.expect(await headingTitle.getText()).to.equal(title);
  }

  

  
}

module.exports = Page;
