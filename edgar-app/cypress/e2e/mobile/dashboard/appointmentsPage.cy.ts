describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.window().then((win) => win.localStorage.setItem('token', Cypress.env('authToken')));
		cy.visit('/dashboard/appointments');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-dashboardAppointmentsPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-dashboardAppointmentsPage]').should('have.length', 2);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-dashboardAppointmentsPage]').should('have.length', 0);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 1);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-dashboardAppointmentsPage]').should('have.length', 0);
	});
});

describe('Good content for buttons - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.window().then((win) => win.localStorage.setItem('token', Cypress.env('authToken')));
		cy.visit('/dashboard/appointments');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-dashboardAppointmentsPage-appointments-button').should('contain.text', 'Prendre un rendez-vous');
	});
});

describe('Good content for texts - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.window().then((win) => win.localStorage.setItem('token', Cypress.env('authToken')));
		cy.visit('/dashboard/appointments');
	});

	it('Good content for Next Appointments', () => {
		cy.get('#edgar-dashboardAppointmentsPage-nextAppointments-text').should(
			'contain.text',
			'Mes prochains rendez-vous',
		);
	});

	it('Good content for Done Appointments', () => {
		cy.get('#edgar-dashboardAppointmentsPage-doneAppointments-text').should(
			'contain.text',
			'Mes rendez-vous passés',
		);
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.window().then((win) => win.localStorage.setItem('token', Cypress.env('authToken')));
		cy.visit('/dashboard/appointments');
	});

	it('Visible buttons', () => {
		cy.get('#edgar-dashboardAppointmentsPage-appointments-button').should('be.visible');
	});
});

describe('Visible texts - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.window().then((win) => win.localStorage.setItem('token', Cypress.env('authToken')));
		cy.visit('/dashboard/appointments');
	});

	it('Next Appointments', () => {
		cy.get('#edgar-dashboardAppointmentsPage-nextAppointments-text').should('be.visible');
	});

	it('Done Appointments', () => {
		cy.get('#edgar-dashboardAppointmentsPage-doneAppointments-text').should('be.visible');
	});
});
