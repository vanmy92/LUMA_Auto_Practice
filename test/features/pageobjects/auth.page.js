class AuthPage{

    get input_firstName(){
        return $('#firstname')
    }
    get input_lastName(){
        return $('#lastname')
    }
    get input_email(){
        return $('#email_address')
    }
    get input_password(){
        return $('#password')
    }
    get input_confirmPassword(){
        return $('#password-confirmation')
    }
    get input_emailLogin(){
        return $(`#email`)
    }
    get input_passWordLogin(){
        return $(`#pass`)
    }
    get btnSignIn(){
        return $(`#send2`)
    }
    
    get btnCreateAnAccount(){
        return $(`#form-validate > div > div.primary > button > span`)
    }
    
    createAccount = async (firstname, lastname, email, pw, cfpw)=>{
        await this.input_firstName.setValue(firstname);
        await this.input_lastName.setValue(lastname);
        await this.input_email.setValue(email);
        await this.input_password.setValue(pw);
        await this.input_confirmPassword.setValue(cfpw)
        await browser.pause(2000)

        await this.btnCreateAnAccount.click()
    }

    signIn = async (email, pw)=>{
       
        await this.input_emailLogin.setValue(email)
        await this.input_passWordLogin.setValue(pw)
        await browser.pause(2000)
        await this.btnSignIn.click()
    }
     

}
export default new AuthPage()