import Page from "../page"

class PopUpCart extends Page{
   
    get btnProceedToCheckout(){
        return $(`#top-cart-btn-checkout`)
    }
   
    // Actions

    async clickProceedToCheckOut(){
        await this.click(await this.btnProceedToCheckout)
    }


}
export default new PopUpCart()