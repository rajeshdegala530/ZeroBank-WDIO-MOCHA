import Base from '../Base'

class PayBillsPage extends Base{


    get SelPayee()
    {
        return $('#sp_payee')
    }

    get selAccount(){
        return  $('#sp_account')
    }

    get inputAmount()
    {
        return $('#sp_amount')
    }

    get inputDate()
    {
        return $('#sp_date')
    }

    get inputDescription()
    {
        return $('#sp_description')
    }

    get payButton()
    {
        return $('#pay_saved_payees')
    }

    get message()

    {
        return $('#alert_content')
    }

   
    fillinput(amount, date, desc){
this.inputAmount.setValue(amount)
this.inputDate.setValue(date)
this.inputDescription.setValue(desc)
    }

    submitPay()
    {
        this.payButton.click()
    }


}

export default new PayBillsPage()