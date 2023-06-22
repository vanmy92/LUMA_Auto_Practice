class CommonPage {
  openHomepage() {
    browser.url("https://magento.softwaretestingboard.com/");
    console.log("Navigate to  URL https://magento.softwaretestingboard.com/");
    const browserTitle = browser.getTitle();
    // browser.getTitle()
  }
  
  
  // verifyPageHeading = async ()=>{    }
}
export default new CommonPage();
