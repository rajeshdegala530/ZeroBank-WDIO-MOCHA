import Base from '../Base'

class ExchangePage extends Base {
	get selCurrency() {
		return $('#pc_currency')
	}
	get inputAmount() {
		return $('#pc_amount')
	}

	get dollarRadiobutton() {
		return $('#pc_inDollars_true')
	}

	get selectedCurrentyRadioButton() {
		return $('#pc_inDollars_false')
	}
	get calcuateButton() {
		return $('#pc_calculate_costs')
	}

	get purchaseButton() {
		return $('#purchase_cash')
	}

	get message() {
		return $('#alert_content')
	}

	amountInput(value) {
		this.inputAmount.setValue(value)
	}
	clickDollarRadioButtion() {
		this.dollarRadiobutton.click()
	}
	clickSelectedCurrentyRadioButton() {
		this.selectedCurrentyRadioButton.click()
	}
	clickCalculateButton() {
		this.calcuateButton.click()
	}
	clickPurchaseButton() {
		this.purchaseButton.click()
	}
}

export default new ExchangePage()
