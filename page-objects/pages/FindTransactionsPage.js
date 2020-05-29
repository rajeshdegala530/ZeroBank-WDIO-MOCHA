import Base from '../Base'

class FindTransactionsPage extends Base{
    get descriptionTextBox()
    {
        return $('#aa_description')
    }

    get FindButton()
    {
        return $('button[type="submit"]')
    }

    get resultsTable()
    {
        return $('#filtered_transactions_for_account')
    }

    get message(){
        return $('.well')
    }

    get tableData()
    {
        return $('#filtered_transactions_for_account > table > thead > tr > th:nth-child(1)')
    }

    enterDescription(text)
    {
        this.descriptionTextBox.waitForExist()
        this.descriptionTextBox.setValue(text)
    }

    clickFindButton(){
        this.FindButton.click()

    }

    noresultTableIsVisible()
    {
        this.resultsTable.waitForExist()
    }
    

}

export default new FindTransactionsPage()


