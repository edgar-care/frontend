import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';

describe('Navigation tests - Mobile', () => {
	let authToken: string;

	describe('Init test', async () => {
		it('Create an account', async () => {
			const response = await createPatientAccount();
			authToken = response.authToken;
		});

		it('Create the medical info', async () => {
			await setupMedicalInfo(authToken);
		});
	});

	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.visit('/dashboard').wait(6000);
			cy.get('#edgar-notificationsModal-no-button').click();
			cy.viewport(390, 844);
			cy.get('#edgar-dashboardNavbar-menu-button').click();
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-dashboardNavbar]').should('have.length', 1);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-dashboardNavbar]').should('have.length', 6);
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
				cy.viewport(390, 844);
			});

			it('Good content for "Accueil" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-home-text').should('contain.text', 'Accueil');
			});

			it('Good content for "Rendez-vous" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-appointments-text').should('contain.text', 'Rendez-vous');
			});

			it('Good content for "Documents" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-documents-text').should('contain.text', 'Documents');
			});

			it('Good content for "Dossier médical" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-medical-text').should('contain.text', 'Dossier médical');
			});

			it('Good content for "Aide" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-help-text').should('contain.text', 'Aide');
			});

			it('Good content for Username Profile Card', () => {
				cy.get('#edgar-dashboardNavbar-profileCard-userName-text').should('contain.text', 'Nom Prénom');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('"Accueil" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-home-text').should('be.visible');
			});

			it('"Rendez-vous" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-appointments-text').should('be.visible');
			});

			it('"Documents" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-documents-text').should('be.visible');
			});

			it('"Dossier médical" tab visible', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-medical-text').should('be.visible');
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
				cy.viewport(390, 844);
			});

			it('Good redirection for "Accueil" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-home')
					.click()
					.url()
					.should('be.equal', `${Cypress.env('url')}/dashboard`);
			});

			it('Good redirection for "Rendez-vous" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-appointments')
					.click()
					.url()
					.should('be.equal', `${Cypress.env('url')}/dashboard/appointments`);
			});

			it('Good redirection for "Documents" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-documents')
					.click()
					.url()
					.should('be.equal', `${Cypress.env('url')}/dashboard/documents`);
			});

			it('Good redirection for "Dossier médical" tab', () => {
				cy.get('#edgar-dashboardNavbar-navbarTab-medical')
					.click()
					.url()
					.should('be.equal', `${Cypress.env('url')}/dashboard/medical`);
			});
		});
	});

	describe('Working page', () => {
		beforeEach(() => {
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.viewport(390, 844);
			cy.visit('/dashboard').wait(6000);
			cy.get('#edgar-notificationsModal-no-button').click();
			cy.get('#edgar-dashboardNavbar-menu-button').click();
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
