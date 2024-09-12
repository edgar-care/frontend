import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';

describe('Treatments Page tests - Desktop', () => {
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
			cy.visit('/dashboard/treatments').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-dashboardTreatmentsPage]').should('have.length', 1);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-dashboardTreatmentsPage]').should('have.length', 5);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-dashboardTreatmentsPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-dashboardTreatmentsPage]').should('have.length', 5);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for add treatment button', () => {
				cy.get('#edgar-dashboardTreatmentsPage-addTreatment-button').should(
					'contain.text',
					'Ajouter un traitement',
				);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for Morning period labels', () => {
				cy.get('p[id=edgar-dashboardTreatmentsPage-dayTitle-MORNING-text]').each(($el) => {
					cy.wrap($el).should('contain.text', 'Matin');
				});
			});

			it('Good content for Noon period labels', () => {
				cy.get('p[id=edgar-dashboardTreatmentsPage-dayTitle-NOON-text]').each(($el) => {
					cy.wrap($el).should('contain.text', 'Midi');
				});
			});

			it('Good content for Evening period labels', () => {
				cy.get('p[id=edgar-dashboardTreatmentsPage-dayTitle-EVENING-text]').each(($el) => {
					cy.wrap($el).should('contain.text', 'Soir');
				});
			});

			it('Good content for Night period labels', () => {
				cy.get('p[id=edgar-dashboardTreatmentsPage-dayTitle-NIGHT-text]').each(($el) => {
					cy.wrap($el).should('contain.text', 'Nuit');
				});
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible add treatment button', () => {
				cy.get('#edgar-dashboardTreatmentsPage-addTreatment-button').should('be.visible');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible Morning period labels', () => {
				cy.get('p[id=edgar-dashboardTreatmentsPage-dayTitle-MORNING-text]').each(($el) => {
					cy.wrap($el).should('be.visible');
				});
			});

			it('Visible Noon period labels', () => {
				cy.get('p[id=edgar-dashboardTreatmentsPage-dayTitle-NOON-text]').each(($el) => {
					cy.wrap($el).should('be.visible');
				});
			});

			it('Visible Evening period labels', () => {
				cy.get('p[id=edgar-dashboardTreatmentsPage-dayTitle-EVENING-text]').each(($el) => {
					cy.wrap($el).should('be.visible');
				});
			});

			it('Visible Night period labels', () => {
				cy.get('p[id=edgar-dashboardTreatmentsPage-dayTitle-NIGHT-text]').each(($el) => {
					cy.wrap($el).should('be.visible');
				});
			});
		});
	});

	describe('Working page', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.visit('/dashboard/treatments').wait(1000);
		});

		beforeEach(() => {
			cy.viewport(1920, 1080);
		});

		it('Check a treatment', () => {
			cy.get('#edgar-dashboardTreatmentsPage-checkboxTreatment-input')
				.parent()
				.click()
				.should('have.attr', 'data-checked');
		});

		it('Uncheck a treatment', () => {
			cy.get('#edgar-dashboardTreatmentsPage-checkboxTreatment-input')
				.parent()
				.click()
				.should('not.have.attr', 'data-checked');
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
