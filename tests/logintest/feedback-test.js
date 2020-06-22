import App from '../../page-objects/App'
import FeedbackPage from '../../page-objects/pages/FeedbackPage'
describe('E2E Tests - FeedBack Form', () => {
	it('User Should be able to click and load Feedback Form', () => {
		App.openFeedbackPage()
		FeedbackPage.formIsVisible()

		//browser.url('http://zero.webappsecurity.com/index.html')
		//browser.setWindowSize(1600, 1200)
		// $('#feedback').waitForExist()
		// $('#feedback').click()
		//$('form').waitForExist()
		// App.openFeedbackPage()
		// FeedbackPage.formIsVisible()
	})

	it('User Should Submit Feedback Form', () => {
		FeedbackPage.fillForm('Name', 'test@test.com', 'Subject', 'Message')
		FeedbackPage.submitForm()
		expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
		// $('#name').waitForExist()
		// $('#name').setValue('Alhpa')
		// $('#email').setValue('alpha@beta.com')
		// $('#subject').setValue('Test Form')
		// $('#comment').setValue('Automation Testing Tutorial')
		// $('input[type="submit"]').click()
	})

	it('User Should be able to clear Feedback Form', () => {
		App.openFeedbackPage()
		FeedbackPage.fillForm('Name', 'test@test.com', 'Subject', 'Message')
		FeedbackPage.resetForm()
		expect(browser).toHaveUrl('http://zero.webappsecurity.com/feedback.html')
		//browser.url('http://zero.webappsecurity.com/index.html')
		//	browser.setWindowSize(1600, 1200)
		// $('#feedback').waitForExist()
		// $('#feedback').click()
		// $('form').waitForExist()
		// $('#name').waitForExist()
		// $('#name').setValue('Alhpa')
		// $('#email').setValue('alpha@beta.com')
		// $('#subject').setValue('Test Form')
		// $('#comment').setValue('Automation Testing Tutorial')
		// $('input[type="reset"]').click()
	})
})
