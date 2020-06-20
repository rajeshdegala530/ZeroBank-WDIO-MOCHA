class App{

    openHomepage()
    {
        browser.url('http://zero.webappsecurity.com/index.html')
        browser.setWindowSize(1920, 1080)
    }

    logout()
    {
        browser.url('http://zero.webappsecurity.com/logout.html')
        
    }

    openLoginPage()
    {
        browser.url('http://zero.webappsecurity.com/login.html')
        browser.setWindowSize(1920, 1080)
    }

    openFeedbackPage()
    {
        browser.url('http://zero.webappsecurity.com/feedback.html')
        browser.setWindowSize(1920, 1080)
    }

    forgotPasswordPage()
    {
        browser.url('http://zero.webappsecurity.com/forgot-password.html')
        browser.setWindowSize(1920, 1080)

    }
}

export default new App()    

// This app page is used for storing the urls which are used in the site for example global levels such as urls 