import { short , medium , long } from "../lib/timeouts"
import {mobile, tablet, desktop} from "../lib/devices"

describe('First steps with WebdriverIO', () => { //describe is used to let us know what are we doing in this file.
	it('Load Example Website', () => {       //This test is to load a website
        browser.url('http://www.example.com')
        browser.pause(short)
		expect(browser).toHaveUrl('http://www.example.com/')
		expect(browser).toHaveTitle('Example Domain')
	})

	it('H1 should be visible', () => {  //This test is to get H1 Value of the page
		// Get selector and save it a variable
        const h1 = $('h1')
        h1.waitForExist()
		// do assertion
		expect(h1).toBeVisible()
	})

	it('P tag should be visible', () => {   // This is to check P tag value 
        const p = $('p')
        p.waitForExist()
		expect(p).toBeVisible()
    })
    
    it('To check the link value', () => {   // This is to check href is displayed and get the value is right
        const link = $('a')
        link.waitForExist()
		expect(link).toHaveLink('https://www.iana.org/domains/example')
    })
    
    it('Get Element Text', () =>{                  // This is to get the element text and validate it
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example Domain')
    })

    it('Assert Attribute',() =>{     // This is to check the assert attribute is valid
        browser.url('https://devexpress.github.io/testcafe/example/')
        browser.pause(short)
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttributeContaining('type','submit')
    })

    it('Assert value',() =>{     // This is to check the assert attribute is valid
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('Save Screenshot',() =>{
        browser.saveScreenshot('your-name.png')
    })

    it('Change browser view port',() =>{
        browser.setWindowSize(1250,1000)
        browser.pause(short)
    })

    it('Set Mobile View ',() => {
        browser.setWindowSize(mobile[0],mobile[1])
        browser.pause(short)

    })
    it('Set Tablet View ',() => {
        browser.setWindowSize(tablet[0],tablet[1])
        browser.pause(short)
        
    })
    it('Set Desktop View ',() => {
        browser.setWindowSize(desktop[0],desktop[1])
        browser.pause(short)
        
    })
})
