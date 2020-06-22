import LoginPage from '../../page-objects/pages/LoginPage'
import App from '../../page-objects/App'
import Navbar from '../../page-objects/components/Navbar'

describe('E2E Tests - Forgot Password', () => {
	it('User Should see Forgot Password Page', () => {
		App.forgotPasswordPage()
		const message = LoginPage.forgotpasswordpagetext
		expect(message).toHaveText('Forgotten Password')
	})

	it('User should be able to password reset success text', () => {
		LoginPage.forgotEmailInput('test@test.com')
		LoginPage.submitForm()
		const successmessage = LoginPage.forgotpasswordsubmittext
		console.log(successmessage)
	})
})
