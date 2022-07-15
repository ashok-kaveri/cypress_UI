class Visitgooglepage{
    get searchText(){
        return cy.get('.gLFyf');
    }

    enterText(searchText){
        this.searchText.type(searchText)
    }
}

module.exports = new Visitgooglepage();