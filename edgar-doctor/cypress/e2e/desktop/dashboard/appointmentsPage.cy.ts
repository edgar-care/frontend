const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');
const authToken = Cypress.env('authToken');

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/appointments`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-dashboardAppointmentsPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-dashboardAppointmentsPage]').should('have.length', 0);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-dashboardAppointmentsPage]').should('have.length', 0);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-dashboardAppointmentsPage]').should('have.length', 0);
	});
});

describe('Good content for buttons - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/appointments`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-dashboardAppointmentsPage-appointments-button').should('contain.text', 'Consulter mon agenda');
	});
});

describe('Good content for texts - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/appointments`);
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/appointments`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-dashboardAppointmentsPage-appointments-button').should('be.visible');
	});
});

describe('Visible texts - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/appointments`);
	});
});