import Page from "../page"

class DetailsPage extends Page{
   
    get txtPriceOfItem(){
        return $(`//*[@class="product-info-price"]//*[contains(text(),'$')]`)
    }
    get txtQty(){
        return $(`#qty`)
    }


    separatePrice = async ()=>{
        let price =await this.txtPriceOfItem.getText()
        let convertPrice = price.substring(1)
        console.log(`convertPrice: ${convertPrice}`)
        return convertPrice
    }
   
    

}
export default new DetailsPage()