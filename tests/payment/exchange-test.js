import App from '../../page-objects/App'
import LoginPage from '../../page-objects/pages/LoginPage'
import ExchangePage from '../../page-objects/pages/ExchangePage'
import Navbar from '../../page-objects/components/Navbar'
import InsideNavbar from '../../page-objects/components/InsideNavbar'

describe('E2E Tests - Currency Exchange', () => {
	it('Should Login to Application', () => {
		App.openLoginPage()
		LoginPage.login('username', 'password')
		Navbar.IsVisibleNavBar()

		// App.openLoginPage()
		// LoginPage.fromIsVisible()
		// LoginPage.fillForm('username', 'password')
		// LoginPage.submitForm()
		// Navbar.IsVisibleNavBar()

		// browser.url('http://zero.webappsecurity.com/index.html')
		// browser.setWindowSize(1600, 1200)
		// const button = $('#signin_button')
		// const loginpage = $('#login_form')
		// button.waitForExist()
		// button.click()
		// // browser.pause(short)
		// loginpage.waitForExist()
		// $('#user_login').setValue('username')
		// $('#user_password').setValue('password')
		// $('input[type="submit"]').click()
		// $('.nav-tabs').waitForExist()
	})

	it('User Should make currency exchange', () => {
		InsideNavbar.clickPayBillsTab()
		InsideNavbar.clickPurchaseForiegnCurrentyTab()

		const currencyselect = ExchangePage.selCurrency
		currencyselect.waitForExist()
		currencyselect.selectByAttribute('value', 'GBP')
		ExchangePage.amountInput('100')
		ExchangePage.clickDollarRadioButtion()
		ExchangePage.clickCalculateButton()
		ExchangePage.clickPurchaseButton()
		const message = ExchangePage.message
		expect(message).toHaveText(
			'Foreign currency cash was successfully purchased.'
		)
		
		//$('#pay_bills_tab').waitForExist()
		// $('#pay_bills_tab').click()
		//$('#tabs > ul > li:nth-child(3) > a').waitForExist()
		//$('#tabs > ul > li:nth-child(3) > a').click()
		//$('#pc_amount').setValue('100')
		//	$('#pc_inDollars_true').click()
		//$('#pc_calculate_costs').click()
		//$('#purchase_cash').click()
	})
})
