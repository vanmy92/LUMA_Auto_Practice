import Page from "../page";
import writeRead from "../../ReadOrWriteFile/writeRead";
class AddressBook extends Page {
  get inputCompany() {
    return $(`#company`);
  }
  get inputPhone() {
    return $(`#telephone`);
  }
  get inputAddress_1() {
    return $(`#street_1`);
  }
  get inputAddress_2() {
    return $(`#street_2`);
  }
  get inputAddress_3() {
    return $(`#street_3`);
  }
  get inputCity() {
    return $(`#city`);
  }
  get inputZip() {
    return $(`#zip`);
  }
  get checkStat_Province() {
    return $(`#region_id`);
  }
  get checkCountry(){
    return $(`#country`)
  }
  get btnSaveAddress() {
    return $(`#form-validate > div > div.primary > button`);
  }

  async randomStateAndCountry() {

    const options = await this.checkStat_Province.$$("option");
    const values = [];
    for (const option of options) {
      const value = await option.getText();
      values.push(value);
    }
    values.shift();
    // console.log(values);
    const length_value = values.length;
    let locate = Math.floor(Math.random() * length_value);
    await this.checkStat_Province.selectByIndex(2)


    const options_2 = await this.checkCountry.$$("option");
    const values_2 = [];
    for (const option of options_2) {
      const value = await option.getText();
      values_2.push(value);
    }
    values_2.shift();
    // console.log(values);
    const length_value_2 = values_2.length;
    let locate_2 = Math.floor(Math.random() * length_value_2);
    await this.checkStat_Province.selectByIndex(locate_2)
    await browser.pause(5000);
    await this.checkCountry.selectByIndex(locate_2)

    await browser.pause(5000);
    

  }
  


  async enterAddress(address) {
    await this.inputCompany.setValue(address.company);
    await this.inputPhone.setValue(address.phoneNumber);
    await this.inputAddress_1.setValue(address.streetAddress_1);
    await this.inputAddress_2.setValue(address.streetAddress_2);
    await this.inputAddress_3.setValue(address.streetAddress_3);
    await this.inputCity.setValue(address.city);
    await this.inputZip.setValue(address.zip);
    await this.randomStateAndCountry()
    await browser.pause(3000);

    await this.click(await this.btnSaveAddress)
    await browser.pause(3000);



    // const address = {
    //   company: faker.company.companyName(),
    //   phoneNumber: faker.phone.phoneNumber(),
    //   streetAddress_1: faker.address.streetAddress(),
    //   streetAddress_2: faker.address.secondaryAddress(),
    //   streetAddress_3: faker.address.country(),
    //   city: faker.address.city(),
    //   zip: faker.address.zipCode(),
    // };

  }

  // Actions

  async clickProceedToCheckOut() {
    await this.click(await this.btnProceedToCheckout);
  }
}
export default new AddressBook();
