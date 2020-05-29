import LoginPage from '../page-objects/pages/LoginPage'
import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import HelpPage from '../page-objects/pages/HelpPage'

describe('E2E Tests - Help', () => {
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

	it('should load help page', () => {

		Navbar.clickSettings()
		Navbar.clickHelpButton()
		const title = HelpPage.logintexttitle
		expect(title).toHaveText('How do I log into my account?')
		HelpPage.clickTransferFundsLink()
		expect(title).toHaveText('How do I transfer funds?')
		HelpPage.clickPayBillsLink()
		expect(title).toHaveText('How do I pay bills?')


		//$('.icon-cog').click()		
		//$('#help_link').waitForExist()
		//	$('#help_link').click()		
		//$('*=transfer funds?').click() //partial text	
		//$('*=pay bills?').click()
	
	})
})
