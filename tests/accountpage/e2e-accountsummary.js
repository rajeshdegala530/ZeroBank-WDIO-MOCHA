import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import AccountSummaryPage from '../page-objects/pages/AccountSummaryPage'

describe('E2E - CHECK ACCOUNT SUMMARY PAGE SCENARIOS', () => {
	it('Should display Account Summary Tab', () => {
		App.openHomepage()
		App.openHomepage()
		Navbar.clickSignIn()
		LoginPage.fromIsVisible()
		LoginPage.fillForm('username', 'password')
		LoginPage.submitForm()
		Navbar.IsVisibleNavBar()
	})

	it('Should open Cash Accounts Links', () => {
		const Cashaccount = AccountSummaryPage.cashAccounttext
		expect(Cashaccount).toHaveText('Cash Accounts')
		AccountSummaryPage.clickSavingsLink()
		const CashAccountSelector = AccountSummaryPage.savingsSelect
        expect(CashAccountSelector).toHaveText('Savings')
        InsideNavbar.clickAccountSummaryTab()
	})

	it('Should Open Investment Account Links', () => {
		const InvestmentLink = AccountSummaryPage.Investmenttext
		expect(InvestmentLink).toHaveText('Investment Accounts')
		AccountSummaryPage.clickBrokerageLink()
		const InvestSelector = AccountSummaryPage.brokerageSelect
		expect(InvestSelector).toHaveText('Brokerage')
		InsideNavbar.clickAccountSummaryTab()
	})

	it('Should Open Credit Account Links', () => {
		const creditaccoutText = AccountSummaryPage.creditAccountText
		expect(creditaccoutText).toHaveText('Credit Accounts')
		AccountSummaryPage.clickCreditAccounLink()
		const CreditAccountSelector = AccountSummaryPage.creditAccountselect
		expect(CreditAccountSelector).toHaveText('Checking')
        InsideNavbar.clickAccountSummaryTab()
	})
	it('Should Open Loan Account Links', () => {
		const loanText = AccountSummaryPage.loanAccountText
		expect(loanText).toHaveText('Loan Accounts')
		AccountSummaryPage.clickLoanAccounLink()
		const loanselector = AccountSummaryPage.loanAccountSelect
		expect(loanselector).toHaveText('Loan')
        InsideNavbar.clickAccountSummaryTab()
	})
})
