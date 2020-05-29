import { short, medium, long } from '../lib/timeouts'

describe('Browser Actions', () => {
	it('Inputs', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const input = $('#developer-name')
		input.waitForExist()
		input.setValue('Rajesh')
		browser.pause(short)
		input.clearValue()
		browser.pause(short)
		input.addValue('Degala')
		browser.pause(short)
	})

	it('Clicks', () => {
		const buttonPopulate = $('#populate')
		buttonPopulate.waitForExist()
		buttonPopulate.click()
	})

	it('CheckBox Selection', () => {
		const checkboxbutton = $('#remote-testing')
		checkboxbutton.waitForExist()
		checkboxbutton.click()
		browser.pause(short)
	})

	it('Radio buttons', () => {
		const radiobutton = $('#linux')
		radiobutton.waitForExist()
		radiobutton.click()
		browser.pause(short)
	})

	it('Select Box', () => {
		const select = $('#preferred-interface')
		select.waitForExist()
		select.selectByVisibleText('JavaScript API')
		browser.pause(short)
	})
})
