import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import FindTransactionsPage from '../page-objects/pages/FindTransactionsPage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'

describe('E2E- FIND TRANSACTIONS', () => {
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

	it('Transaction Filter should work - No Results Page', () => {
		InsideNavbar.clickAccountTab()
		InsideNavbar.clickFindTransacctionsTab()
		FindTransactionsPage.enterDescription('Test')
		FindTransactionsPage.clickFindButton()
		FindTransactionsPage.noresultTableIsVisible()
		const message = FindTransactionsPage.message
		expect(message).toHaveText('No results.')

		// $('#account_activity_tab').click()
		// $('#tabs > ul > li:nth-child(2) > a').waitForExist()
		// $('#tabs > ul > li:nth-child(2) > a').click()
		//$('#aa_description').waitForExist()
		//$('#aa_description').setValue('Test')
		// $('button[type="submit"]').click()
		//  $('#filtered_transactions_for_account').waitForExist()
	})

	it('Transaction Filter should work - Results Page', () => {
		InsideNavbar.clickAccountTab()
		InsideNavbar.clickFindTransacctionsTab()
		FindTransactionsPage.clickFindButton()
		const text = FindTransactionsPage.tableData
		expect(text).toHaveText('Date')


		// 	const message = FindTransactionsPage.message
		// 	expect(message).toHaveText('No results.')
		// 	$('#account_activity_tab').click()
		// 	$('#tabs > ul > li:nth-child(2) > a').waitForExist()
		// 	$('#tabs > ul > li:nth-child(2) > a').click()
		// 	$('#aa_description').waitForExist()
		// 	$('#aa_description').setValue('Test')
		// 	$('button[type="submit"]').click()
		//     $('#filtered_transactions_for_account').waitForExist()
		//     filtered_transactions_for_account
		// 	const NoResults = $('.well')
		// 	expect(NoResults).toHaveText('No results.')
	})
})
