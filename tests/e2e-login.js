import LoginPage from '../page-objects/pages/LoginPage'
import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Login - Logout Flow', () => {
	it('User Should not Login with Invalid Credentials', () => {
		App.openHomepage()
		Navbar.clickSignIn()
		LoginPage.pauseShort()
		LoginPage.fromIsVisible()
		LoginPage.fillForm('Invalid Username', 'Invalid Password')
		LoginPage.submitForm()
		const message = LoginPage.error
		expect(message).toHaveText('Login and/or password are wrong.')

		// browser.url('http://zero.webappsecurity.com/index.html')
		// $('#signin_button').waitForExist()
		// $('#signin_button').click()
		// $('#login_form').waitForExist()
		// $('#user_login').setValue('invalid')
		// $('#user_password').setValue('invalid')
		// $('input[type="submit"]').click()
		// $('#signin_button').waitForExist()
		// $('#signin_button').click()
	})

	it('User Should Login with Valid Credentials', () => {
		App.openHomepage()
		Navbar.clickSignIn()
		LoginPage.fromIsVisible()
		LoginPage.fillForm('username', 'password')
		LoginPage.submitForm()
		Navbar.IsVisibleNavBar()

		// browser.url('http://zero.webappsecurity.com/index.html')
		// $('#signin_button').waitForExist()
		// $('#signin_button').click()
		// $('#login_form').waitForExist()
		// $('#user_login').setValue('invalid')
		// $('#user_password').setValue('invalid')
		// $('input[type="submit"]').click()
		// $('#signin_button').waitForExist()
		// $('#signin_button').click()
		//$('.nav-tabs').waitForExist()
	})

	it('User Should be able to Logout', () => {
		App.logout()
		Navbar.signInButtonIsVisible()

		// $('.icon-user').waitForExist()
		// $('.icon-user').click()
		// $('#logout_link').waitForExist()
		// $('#logout_link').click()
		//$('#signin_button').waitForExist()
	})
})
