import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';

describe('Document Page tests - Desktop', () => {
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
			cy.visit('/dashboard/documents').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-dashboardDocumentsPage]').should('have.length', 1);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-dashboardDocumentsPage]').should('have.length', 0);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-dashboardDocumentsPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-dashboardDocumentsPage-addDocument-button').should(
					'contain.text',
					'Ajouter un document',
				);
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible buttons', () => {
				cy.get('#edgar-dashboardDocumentsPage-addDocument-button').should('be.visible');
			});
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
