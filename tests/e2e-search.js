import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Search Functionality', () => {
	it('Should Load Home Page', () => {
		App.openHomepage()
		//browser.url('http://zero.webappsecurity.com/index.html')
		//browser.setWindowSize(1600, 1200)
		//$('#searchTerm').waitForExist()
	})

	it('User Should Submit Search Form', () => {
		//$('#searchTerm').setValue('Bank')
		//browser.keys('Enter')
		Navbar.search('bank')
		const resultstitle = $('h2')
		resultstitle.waitForExist()
		expect(resultstitle).toHaveText('Search Results:')
	})
})
