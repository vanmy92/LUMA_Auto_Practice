class PanelHeader{
    get checkLogOutBtn (){
        return $(`//*[contains(text(),'Welcome,')]`)
    }
    get btnLogoutAccount() {
        return $(`//*[@class="customer-welcome"]/span/button`);
      }
    get btnMyAccount(){
        return $(`//*[@class="header links"]/li[1]/a`)
    }
    get getContactInfr(){
        return $(`//*[@class="box box-information"]/div/p`)
    }
    navigateMyAccount = async () => {
        await this.btnLogoutAccount.click();
        await browser.pause(1000)
        await this.btnMyAccount.click();

        console.log(await this.getContactInfr.getText())
    }
}
export default new PanelHeader()