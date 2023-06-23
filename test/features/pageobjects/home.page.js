import Page from "./page"
class HomePage extends Page{
    // constructor() {
    //     super();
    //   }
    // webElement locator
    get btnSignUp(){
        return $(`//*[contains(text(),'Create an Account')]`)
    }
    get btnSignIn(){
        return $(`//*[@class="panel header"]/ul/li[2]/a`)
    }
    get img_Logo(){
        return $(`//*[@class="logo"]//img`)
    }
    get btncartIcon(){
        return $(`//*[@class="minicart-wrapper"]/a`)
    }
    // Actions

    async navigateToSignUp(){
        await this.btnSignUp.click();
    }

    async navigateToSignIn(){
        await this.btnSignIn.click();
    }

    async clickCartIcon(){
        await this.click(await this.btncartIcon)
    }


}
export default new HomePage()