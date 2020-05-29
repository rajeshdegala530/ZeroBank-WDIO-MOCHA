import Base from '../Base'

class Navbar extends Base {
	//--------------------To click signin button ----------------------
	get signInButton() {
		return $('#signin_button')
	}

	signInButtonIsVisible() {
		this.signInButton.waitForExist()
	}
	clickSignIn() {
		this.signInButton.waitForExist()
		this.signInButton.click()
	}
	//--------------------To Check Nav Bar is Visible----------------------
	get insideNavbar() {
		return $('.nav-tabs')
	}

	IsVisibleNavBar() {
		this.insideNavbar.waitForExist()
	}

	//------------------------To click Settings icon to navigate to Help page----------------------------------------------

	get settingsButton()
	{
return $('.icon-cog')
	}

	clickSettings()
	{
		this.settingsButton.waitForExist()
		this.settingsButton.click()
	}

	//--------------------- To Click Help Button/Link-----------------------------------------------------------------------
	get helpButton(){

		return $('#help_link')
	}
	
	clickHelpButton()
	{
		this.helpButton.waitForExist()
		this.helpButton.click()
	}

	//------------------------Get Search box Selector------------------------------------------------------------------------

	get searchBox(){
		return $('#searchTerm')
	}

	search(text){
		this.searchBox.waitForExist()
		this.searchBox.setValue(text)
		browser.keys('Enter')
	}
}

export default new Navbar()
