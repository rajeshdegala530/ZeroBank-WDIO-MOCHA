import LoginPage from '../../page-objects/pages/LoginPage'
import App from '../../page-objects/App'
import Navbar from '../../page-objects/components/Navbar'
import InsideNavbar from '../../page-objects/components/InsideNavbar'
import PayBillsPage from '../../page-objects/pages/PayBillsPage'

describe('E2E- Pay', () => {
	it('Should Login to Application', () => {
		App.openLoginPage()
		LoginPage.login('username', 'password')
		Navbar.IsVisibleNavBar()

		// LoginPage.fromIsVisible()
		// LoginPage.fillForm('username', 'password')
		// LoginPage.submitForm()
		// browser.url('http://zero.webappsecurity.com/index.html')
		// browser.setWindowSize(1920, 1080)
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

	it('Should Make Payment', () => {
		InsideNavbar.clickPayBillsTab()

	
		const selectpayee = PayBillsPage.SelPayee
		selectpayee.waitForExist()
		selectpayee.selectByAttribute('value', 'bofa')
		const selectAccount = PayBillsPage.selAccount
		selectAccount.waitForExist()
		selectAccount.selectByVisibleText('Loan')
		PayBillsPage.fillinput('500', '2020-05-30', 'TestPay')
		PayBillsPage.submitPay()
		const message = PayBillsPage.message
		expect(message).toHaveText('The payment was successfully submitted.')

		//$('#pay_bills_tab').waitForExist()
		//$('#pay_bills_tab').click()
		//$('#sp_amount').setValue('500')
		//$('#sp_date').setValue('2020-05-30')
		//$('#sp_description').waitForExist()
		//$('#sp_description').setValue('TestPay')
		//$('#pay_saved_payees').click()
	
	})
})
