const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');
const authToken = Cypress.env('authToken');

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/agenda`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-dashboardAgendaPage]').should('have.length', 4);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-dashboardAgendaPage]').should('have.length', 46);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-dashboardAgendaPage]').should('have.length', 0);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-dashboardAgendaPage]').should('have.length', 0);
	});
});

describe('Good content for buttons - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/agenda`);
	});

	it('Good content for open slot button', () => {
		cy.get('#edgar-dashboardAgendaPage-openSlot-button').should('contain.text', 'Ouvrir un créneau');
	});

	it('Good content for day view button', () => {
		cy.get('#edgar-dashboardAgendaPage-dayView-button').should('contain.text', 'Jour');
	});

	it('Good content for 3 days view button', () => {
		cy.get('#edgar-dashboardAgendaPage-3daysView-button').should('contain.text', '3 Jours');
	});

	it('Good content for week view button', () => {
		cy.get('#edgar-dashboardAgendaPage-weekView-button').should('contain.text', 'Semaine');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/agenda`);
	});

	it('Visible open slot button', () => {
		cy.get('#edgar-dashboardAgendaPage-openSlot-button').should('be.visible');
	});

	it('Visible day view button', () => {
		cy.get('#edgar-dashboardAgendaPage-dayView-button').should('be.visible');
	});

	it('Visible 3 days view button', () => {
		cy.get('#edgar-dashboardAgendaPage-3daysView-button').should('be.visible');
	});

	it('Visible week view button', () => {
		cy.get('#edgar-dashboardAgendaPage-weekView-button').should('be.visible');
	});
});

describe('Working page - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/agenda`);
	});

	it('Changing view to day', () => {
		cy.get('#edgar-dashboardAgendaPage-dayView-button').click();
		cy.get('p[id=edgar-dashboardAgendaPage-calendarWeekDay-text]').should('have.length', 0);
	});

	it('Changing view to 3 days', () => {
		cy.get('#edgar-dashboardAgendaPage-3daysView-button').click();
		cy.get('p[id=edgar-dashboardAgendaPage-calendarWeekDay-text]').should('have.length', 3);
	});

	it('Changing view to week', () => {
		cy.get('#edgar-dashboardAgendaPage-dayView-button').click();
		cy.get('#edgar-dashboardAgendaPage-weekView-button').click();
		cy.get('p[id=edgar-dashboardAgendaPage-calendarWeekDay-text]').should('have.length', 7);
	});
});
