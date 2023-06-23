import Page from "../page"
class MyAccount extends Page{
    get btnSignUp(){
        return $(`//*[contains(text(),'Create an Account')]`)
    }
    get btnManageAddresses(){
        return $(`//*[@class="block-title"]/a/span`)
    }

    async clickManageAddresses(){
        await this.click(await this.btnManageAddresses)
    }
    
}
export default new MyAccount()