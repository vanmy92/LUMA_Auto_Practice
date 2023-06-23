import Page from "../page"
class NavigationPage extends Page{
    get checkLogOutBtn (){
        return $(`//*[contains(text(),'Welcome,')]`)
    }
    get btnGear(){
        return $(`//*[@id="ui-id-2"]/li/a//*[contains(text(),'Gear')]`)
    }
    get btnBags(){
        return $(`//*[@id="ui-id-2"]/li/ul//*[contains(text(),'Bags')]`)
    }
    get btnFitnessEquipment(){
        return $(`//*[@id="ui-id-2"]/li/ul//*[contains(text(),'Fitness Equipment')]`)
    }

    async clickBags(){
        await this.click(await this.btnGear); 
        await browser.debug() 
    }
    

    
}
export default new NavigationPage()