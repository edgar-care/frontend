import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';

describe('Simulation Confirmation Page tests - Desktop', () => {
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
			cy.visit('/simulation/confirmation').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-simulationConfirmationPage]').should('have.length', 1);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-simulationConfirmationPage]').should('have.length', 0);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-simulationConfirmationPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-simulationConfirmationPage]').should('have.length', 0);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for patient area button', () => {
				cy.get('#edgar-simulationConfirmationPage-patientArea-button').should(
					'contain.text',
					'Accéder à mon espace patient',
				);
			});
		});

		describe('Visible buttons', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible patient area button', () => {
				cy.get('#edgar-simulationConfirmationPage-patientArea-button').should('be.visible');
			});
		});
	});

	describe('Working page', () => {
		describe('Working states', () => {
			beforeEach(() => {
				cy.window().then((win) => win.localStorage.setItem('token', authToken));
				cy.visit('/simulation/confirmation').wait(1000);
				cy.viewport(1920, 1080);
			});

			it('Click on patient area button', () => {
				cy.get('#edgar-simulationConfirmationPage-patientArea-button')
					.click()
					.wait(1000)
					.url()
					.should('eq', `${Cypress.env('url')}/dashboard`);
			});
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
