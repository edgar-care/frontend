import createDoctorAccount from 'utils/createDoctorAccount';

describe('Appointments Page - Desktop', () => {
	let authToken: string;

	describe('Init test', async () => {
		it('Create an account', async () => {
			const response = await createDoctorAccount();
			authToken = response.authToken;
		});
	});

	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.visit('/dashboard/appointments');
			cy.viewport(1920, 1080);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
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

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-dashboardAppointmentsPage-appointments-button').should(
					'contain.text',
					'Consulter mon agenda',
				);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible buttons', () => {
				cy.get('#edgar-dashboardAppointmentsPage-appointments-button').should('be.visible');
			});
		});
	});
});
