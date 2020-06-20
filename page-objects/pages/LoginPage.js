import Base from '../Base'

class LoginPage extends Base {
	// this property to get the login form selector
	get loginForm() {
		return $('#login_form')
	}

	// This property is to get the user login selector
	get usernameInput() {
		return $('#user_login')
	}

	//This property is to get the user password selector
	get passwordInput() {
		return $('#user_password')
	}

	//This property is to get the submit button selector on Login form
	get submitButton() {
		return $('input[type="submit"]')
	}

	//This method is to check the Login Form is visible
	fromIsVisible() {
		this.loginForm.waitForExist()
	}
	//This method is to fill username and password on to the input selectors
	fillForm(username, password) {
		this.usernameInput.setValue(username)
		this.passwordInput.setValue(password)
	}

	//This is to submit the form by calling submitbutton selector property
	submitForm() {
		this.submitButton.click()
	}
	// this is to get the error message selector
	get error() {
		return $('.alert-error')
	}
	// This method is to reduce the lines of code for Entering login details and submit.
	login(username, password) {
		this.loginForm.waitForExist()
		this.usernameInput.setValue(username)
		this.passwordInput.setValue(password)
		this.submitForm()
	}
//--------------------------------------------------------------------------
	get forgotPasswordinput()
	{
		return $('#user_email')
	}

	 forgotEmailInput(email)
	{
		this.forgotPasswordinput.setValue(email)
	}

	get forgotpasswordpagetext()
	{
		return $('h3')
	}

	get forgotpasswordsubmittext()
	{
		return $('.row').getText()
	}

}

export default new LoginPage()
