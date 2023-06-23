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
  }
  
  module.exports = Page;