import createDoctorAccount from 'utils/createDoctorAccount';

describe('Agenda Page tests - Mobile', () => {
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
			cy.visit('/dashboard/agenda');
			cy.viewport(390, 844);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
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

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good content for open slot button', () => {
				cy.get('#edgar-dashboardAgendaPage-openSlot-button').should('contain.text', 'Ouvrir un créneau');
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
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
	});
});
