import createDoctorAccount from 'utils/createDoctorAccount';

describe('Navigation tests - Desktop', () => {
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
			cy.visit('/dashboard');
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-dashboardNavbar]').should('have.length', 0);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-dashboardNavbar]').should('have.length', 7);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-dashboardNavbar]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-dashboardNavbar]').should('have.length', 0);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for "Agenda" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-agenda-text').should('contain.text', 'Agenda');
			});

			it('Good content for "Rendez-vous" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-appointments-text').should('contain.text', 'Rendez-vous');
			});

			it('Good content for "Patients" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-patients-text').should('contain.text', 'Patients');
			});

			it('Good content for "Diagnostics" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-diagnostics-text').should('contain.text', 'Diagnostics');
			});

			it('Good content for "Messagerie" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-chat-text').should('contain.text', 'Messagerie');
			});

			it('Good content for "Aide" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-help-text').should('contain.text', 'Aide');
			});

			it('Good content for Username Profile Card', () => {
				cy.get('#edgar-dashboardNavbar-profileCard-userName-text').should('contain.text', 'Medecin Edgar');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('"Agenda" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-agenda-text').should('be.visible');
			});

			it('"Rendez-vous" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-appointments-text').should('be.visible');
			});

			it('"Patients" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-patients-text').should('be.visible');
			});

			it('"Diagnostics" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-diagnostics-text').should('be.visible');
			});

			it('"Messagerie" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-chat-text').should('be.visible');
			});

			it('"Aide" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-help-text').should('be.visible');
			});

			it('Username Profile Card visible', () => {
				cy.get('#edgar-dashboardNavbar-profileCard-userName-text').should('be.visible');
			});
		});

		describe('Good redirection on elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good redirection for "Agenda" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-agenda')
					.click()
					.url()
					.should('be.equal', `${Cypress.env('url')}/dashboard/agenda`);
			});

			it('Good redirection for "Rendez-vous" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-appointments')
					.click()
					.url()
					.should('be.equal', `${Cypress.env('url')}/dashboard/appointments`);
			});

			it('Good redirection for "Patients" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-patients')
					.click()
					.url()
					.should('be.equal', `${Cypress.env('url')}/dashboard/patients`);
			});

			it('Good redirection for "Diagnostics" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-diagnostics')
					.click()
					.url()
					.should('be.equal', `${Cypress.env('url')}/dashboard/diagnostics`);
			});

			it('Good redirection for "Messagerie" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-chat')
					.click()
					.url()
					.should('be.equal', `${Cypress.env('url')}/dashboard/chat`);
			});
		});
	});

	describe('Working page', () => {
		beforeEach(() => {
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.viewport(1920, 1080);
			cy.visit('/dashboard');
		});

		it('Logout working', () => {
			cy.get('#edgar-dashboardNavbar-profileCard').click();
			cy.get('#edgar-dashboardNavbar-profileTab-Déconnexion-text').click();
			cy.visit('/dashboard')
				.url()
				.should('be.equal', `${Cypress.env('url')}/login`);
		});

		it('Opening Profile Card works', () => {
			cy.get('#edgar-dashboardNavbar-profileCard').click();
			cy.get('#edgar-dashboardNavbar-profileTab-Déconnexion-text').should('be.visible');
		});

		it('Opening then closing Profile Card works', () => {
			cy.get('#edgar-dashboardNavbar-profileCard').click();
			cy.get('#edgar-dashboardNavbar-profileCard-userName').click();
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
