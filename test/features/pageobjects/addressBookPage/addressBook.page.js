import Page from "../page"
import faker from "faker"
import writeRead from "../../ReadOrWriteFile/writeRead"
class AddressBook extends Page{
   
    get inputCompany(){
        return $(`#company`)
    }
    get inputPhone(){
        return $(`#telephone`)
    }
    get inputAddress_1(){
        return $(`#street_1`)
    }
    get inputAddress_2(){
        return $(`#street_2`)
    }
    get inputAddress_3(){
        return $(`#street_3`)
    }
    get inputCity(){
        return $(`#city`)
    }
    get inputZip(){
        return $(`#zip`)
    }
    get checkStat_Province(){
        return $(`#region_id`)
    }
    
    get btnSaveAddress(){
        return $(`#form-validate > div > div.primary > button`)
    }

    async enterAddress(){
        const address ={
            company: faker.company.companyName,
            phoneNumber :faker.phone.phoneNumber,
            streetAddress_1 :faker.address.address,

        }
    }

    
    
   
    // Actions

    async clickProceedToCheckOut(){
        await this.click(await this.btnProceedToCheckout)
    }


}
export default new AddressBook()