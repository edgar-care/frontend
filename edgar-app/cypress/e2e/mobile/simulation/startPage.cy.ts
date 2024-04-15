import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';

describe('Simulation Start Page tests - Desktop', () => {
	let authToken: string;
	let noMedicalInfoAuthToken: string;

	describe('Init test', async () => {
		it('Create an account', async () => {
			const response = await createPatientAccount();
			authToken = response.authToken;
		});

		it('Create another account', async () => {
			const response = await createPatientAccount();
			noMedicalInfoAuthToken = response.authToken;
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
			cy.visit('/simulation/start').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-simulationStartPage]').should('have.length', 1);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-simulationStartPage]').should('have.length', 1);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-simulationStartPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 1);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-simulationStartPage]').should('have.length', 0);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-simulationStartPage-startSimulation-button').should(
					'contain.text',
					'Commencer ma simulation',
				);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good content for page title', () => {
				cy.get('#edgar-simulationStartPage-title-text').should(
					'contain.text',
					'Voilà, tout est prêt pour moi. Vous pouvez dès maitenant commencer votre simulation.',
				);
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Visible buttons', () => {
				cy.get('#edgar-simulationStartPage-startSimulation-button').should('be.visible');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Visible Edgar card text', () => {
				cy.get('#edgar-simulationStartPage-title-text').should('be.visible');
			});
		});
	});

	describe('Working page', () => {
		describe('Working states', () => {
			beforeEach(() => {
				cy.visit('/simulation/start').wait(1000);
				cy.viewport(390, 844);
			});

			it('Click on start simulation button', () => {
				cy.window().then((win) => win.localStorage.setItem('token', authToken));
				cy.get('#edgar-simulationStartPage-startSimulation-button')
					.click()
					.wait(1000)
					.url()
					.should('include', `${Cypress.env('url')}/simulation/chat?sessionId=`);
			});

			it('Check redirection to connection page when not logged', () => {
				cy.visit('/simulation/start').wait(1000);
				cy.url().should('eq', `${Cypress.env('url')}/simulation/connection`);
			});

			it('Check redirection to onboarding page when no medical info', () => {
				cy.window().then((win) => win.localStorage.setItem('token', noMedicalInfoAuthToken));
				cy.visit('/simulation/start').wait(1000);
				cy.url().should('eq', `${Cypress.env('url')}/onboarding/personal?redirect=simulation/start`);
			});
		});
	});
});
