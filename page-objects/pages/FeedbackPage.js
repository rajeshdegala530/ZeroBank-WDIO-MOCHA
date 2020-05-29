import Base from '../Base'

class FeedbackPage extends Base {
	get form() {
		return $('form')
	}

	formIsVisible() {
		this.form.waitForExist()
	}

	get name() {
		return $('#name')
	}

	get email() {
		return $('#email')
	}

	get subject() {
		return $('#subject')
	}

	get comment() {
		return $('#comment')
    }
    get submitButton()
    {
        return $('input[type="submit"]')
    }
    get resetButton(){
        return $('input[type="reset"]')
    }

   fillForm(name, email, subject, comment){

    this.name.setValue(name)
    this.email.setValue(email)
    this.subject.setValue(subject)
    this.comment.setValue(comment)

   }

   submitForm(){
       this.submitButton.click()
   }
   resetForm(){
       this.resetButton.click
       ()
   }
}

export default new FeedbackPage()
