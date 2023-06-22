import {Given, When, Then}  from '@wdio/cucumber-framework'
import authPage from '../pageobjects/auth.page'
import writeRead from '../ReadOrWriteFile/writeRead'
import faker from "faker"
Then(/^Create an account with the random username$/, async  () =>{

    const randomStr = Math.random().toString(36).substring(2,5)
    const emailID = `mytest_${randomStr}@gmail.com`
    let filename = `${process.cwd()}/data/user_pw_autorandom/userPassword.json`;
    fs.writeFileSync(filename, email);
    // firstname, lastname, email, pw, cfpw
   
    const firstname= faker.name.firstName()
    const   lastname= faker.name.lastName()
    
    const   pw= "1234asdf@"
    const cfpw = pw


    global.ShareVariable.email = emailID
    global.ShareVariable.password = cfpw

    await authPage.createAccount(firstname, lastname, emailID, pw, cfpw)

    
})