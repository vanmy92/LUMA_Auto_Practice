import Page from "../page"

class PopUpCart extends Page{
   
    get btnProceedToCheckout(){
        return $(`#top-cart-btn-checkout`)
    }
   
    get btnYourCart(){
        return $(`//*[@class="action showcart"]`)
    }
    // Actions

    async clickProceedToCheckOut(){
        await this.click(await this.btnProceedToCheckout)
    }
    async clickYourCart(){
        await this.click(await this.btnYourCart)
    }

    

}
export default new PopUpCart()