import Base from '../Base'

class AccountSummaryPage extends Base {

    get cashAccounttext() {
        return $('div > h2:nth-child(1)')
    }
    get savingLinkSelect() {
        return $('div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a')
    }
    get savingsSelect() {
        return $('#aa_accountId > option:nth-child(1)')
    }

    get Investmenttext() {
        return $('div > h2:nth-child(3)')
    }
    get brokerageLinkSelect() {
        return $('div:nth-child(4) > div > table > tbody > tr > td:nth-child(1) > a')
    }
    get brokerageSelect() {
        return $('#aa_accountId > option:nth-child(6)')
    }

    get creditAccountText() {
        return $('div > h2:nth-child(5)')
    }

    get creditAccountLink() {
        return $('div:nth-child(6) > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a')
    }

    get creditAccountselect() {
        return $('#aa_accountId > option:nth-child(2)')
    }

    get loanAccountText() {
        return $('div > h2:nth-child(7)')
    }

    get loanAccountLink() {
        return $('div:nth-child(8) > div > table > tbody > tr > td:nth-child(1) > a')
    }

    get loanAccountSelect() {
        return $('#aa_accountId > option:nth-child(4)')
    }
    clickSavingsLink() {

        this.savingLinkSelect.click()
    }

    clickBrokerageLink() {
        this.brokerageLinkSelect.click()
    }

    clickCreditAccounLink() {
        this.creditAccountLink.click()
    }

    clickLoanAccounLink() {
        this.loanAccountLink.click()
    }








}

export default new AccountSummaryPage()