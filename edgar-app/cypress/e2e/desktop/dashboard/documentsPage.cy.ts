const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');
const authToken = Cypress.env('authToken');

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/documents`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-dashboardDocumentsPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-dashboardDocumentsPage]').should('have.length', 0);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-dashboardDocumentsPage]').should('have.length', 0);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-dashboardDocumentsPage]').should('have.length', 1);
	});
});

describe('Good content for buttons - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/documents`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-dashboardDocumentsPage-addDocument-button').should('contain.text', 'Ajouter un document');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/documents`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-dashboardDocumentsPage-addDocument-button').should('be.visible');
	});

    it('Visible input', () => {
		cy.get('#edgar-dashboardDocumentsPage-searchBar-input').should('be.visible');
	});
});