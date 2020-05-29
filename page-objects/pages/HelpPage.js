import Base from '../Base'

class HelpPage extends Base {
	get logintexttitle() {
		return $('.span8 > h3')
    }
    
    get transferFunds()
    {
        return $('*=transfer funds?')
    }

    get payBills(){
        return 	$('*=pay bills?')
    }

    clickTransferFundsLink()
    {
        this.transferFunds.waitForExist()
        this.transferFunds.click()

    }

    clickPayBillsLink()
    {
        this.payBills.waitForExist()
        this.payBills.click()
    }

}


export default new HelpPage()