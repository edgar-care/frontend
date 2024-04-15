import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';

describe('Simulation Conditions Page tests - Desktop', () => {
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
			cy.visit('/simulation/conditions').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-simulationConditionsPage]').should('have.length', 1);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-simulationConditionsPage]').should('have.length', 1);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-simulationConditionsPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-simulationConditionsPage]').should('have.length', 0);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-simulationConditionsPage-next-button').should('contain.text', 'Continuer');
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for page title', () => {
				cy.get('#edgar-simulationConditionsPage-title-text').should(
					'contain.text',
					'Avant de commencer votre simulation, notez que cette simulation n’a pas pour but de diagnostiquer une maladie. A l’issue de la simulation, notre échange sera transmis à un médecin afin d’être examiné. Si votre rendez-vous n’est pas utile alors il sera annulé par le médecin et il vous conseillera des méthodes de soins.',
				);
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible buttons', () => {
				cy.get('#edgar-simulationConditionsPage-next-button').should('be.visible');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible Edgar card text', () => {
				cy.get('#edgar-simulationConditionsPage-title-text').should('be.visible');
			});
		});
	});

	describe('Working page', () => {
		describe('Working states', () => {
			beforeEach(() => {
				cy.window().then((win) => win.localStorage.setItem('token', authToken));
				cy.visit('/simulation/conditions').wait(1000);
				cy.viewport(1920, 1080);
			});

			it('Click on next button when logged', () => {
				cy.get('#edgar-simulationConditionsPage-next-button')
					.click()
					.wait(1000)
					.url()
					.should('eq', `${Cypress.env('url')}/simulation/start`);
			});

			it('Click on next button when not logged', () => {
				cy.clearLocalStorage();
				cy.get('#edgar-simulationConditionsPage-next-button')
					.click()
					.wait(1000)
					.url()
					.should('eq', `${Cypress.env('url')}/simulation/connection`);
			});
		});
	});
});
