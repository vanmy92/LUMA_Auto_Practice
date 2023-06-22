
class HomePage{
    // constructor() {
    //     super();
    //   }
    // webElement locator
    get btnSignUp(){
        return $(`//*[contains(text(),'Create an Account')]`)
    }
    get btnSignIn(){
        return $(`//*[contains(text(),'Sign In')]`)
    }
    get img_Logo(){
        return $(`//*[@class="logo"]//img`)
    }
 
    // Actions

    async navigateToSignUp(){
        await this.btnSignUp.click();
    }

    async navigateToSignIn(){
        await this.btnSignIn.click();
    }



}
export default new HomePage()