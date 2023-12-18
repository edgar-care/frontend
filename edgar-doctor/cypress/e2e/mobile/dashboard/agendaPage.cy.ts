const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');
const authToken = Cypress.env('authToken');

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/agenda`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-dashboardAgendaPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-dashboardAgendaPage]').should('have.length', 25);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-dashboardAgendaPage]').should('have.length', 0);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 1);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-dashboardAgendaPage]').should('have.length', 0);
	});
});

describe('Good content for buttons - Desktop', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/agenda`);
	});

	it('Good content for open slot button', () => {
		cy.get('#edgar-dashboardAgendaPage-openSlot-button').should('contain.text', 'Ouvrir un créneau');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/agenda`);
	});

	it('Visible open slot button', () => {
		cy.get('#edgar-dashboardAgendaPage-openSlot-button').should('be.visible');
	});

	it('Visible day view button', () => {
		cy.get('#edgar-dashboardAgendaPage-dayView-button').should('not.exist');
	});

	it('Visible 3 days view button', () => {
		cy.get('#edgar-dashboardAgendaPage-3daysView-button').should('not.exist');
	});

	it('Visible week view button', () => {
		cy.get('#edgar-dashboardAgendaPage-weekView-button').should('not.exist');
	});
});
