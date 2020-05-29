import Base from '../Base'

class InsideNavbar extends Base {
	get accountActivityTab() {
		return $('#account_activity_tab')
	}
	get findTransactionsTab() {
		return $('#tabs > ul > li:nth-child(2) > a')
	}

	get paybillstab() {
		return $('#pay_bills_tab')
	}
	get purchaseForiegnCurrentyTab() {
		return $('#tabs > ul > li:nth-child(3) > a')
	}

	clickAccountTab() {
		this.accountActivityTab.waitForExist()
		this.accountActivityTab.click()
	}
	

	clickFindTransacctionsTab() {
		this.findTransactionsTab.waitForExist()
		this.findTransactionsTab.click()
	}

	clickPayBillsTab() {
		this.paybillstab.waitForExist()
		this.paybillstab.click()
    }
    clickPurchaseForiegnCurrentyTab() {
		this.purchaseForiegnCurrentyTab.waitForExist()
		this.purchaseForiegnCurrentyTab.click()
	}
}

export default new InsideNavbar()
