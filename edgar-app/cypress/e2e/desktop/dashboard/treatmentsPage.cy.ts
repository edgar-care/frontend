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
				cy.get('button[id^=edgar-dashboardTreatmentsPage]').should('have.length', 4);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-dashboardTreatmentsPage]').should('have.length', 35);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-dashboardTreatmentsPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-dashboardTreatmentsPage]').should('have.length', 15);
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

			it('Good content for calendar tab button', () => {
				cy.get('#edgar-dashboardTreatmentsPage-calendarNavigation-button').should('contain.text', 'Calendrier');
			});

			it('Good content for current treatments tab button', () => {
				cy.get('#edgar-dashboardTreatmentsPage-currentTreatmentsNavigation-button').should(
					'contain.text',
					'Traitements en cours',
				);
			});

			it('Good content for old treatments tab button', () => {
				cy.get('#edgar-dashboardTreatmentsPage-passedTreatmentsNavigation-button').should(
					'contain.text',
					'Traitements finis',
				);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for Monday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-MONDAY-text').should('contain.text', 'Lundi');
			});

			it('Good content for Tuesday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-TUESDAY-text').should('contain.text', 'Mardi');
			});

			it('Good content for Wednesday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-WEDNESDAY-text').should('contain.text', 'Mercredi');
			});

			it('Good content for Thursday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-THURSDAY-text').should('contain.text', 'Jeudi');
			});

			it('Good content for Friday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-FRIDAY-text').should('contain.text', 'Vendredi');
			});

			it('Good content for Saturday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-SATURDAY-text').should('contain.text', 'Samedi');
			});

			it('Good content for Sunday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-SUNDAY-text').should('contain.text', 'Dimanche');
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

			it('Visible calendar tab button', () => {
				cy.get('#edgar-dashboardTreatmentsPage-calendarNavigation-button').should('be.visible');
			});

			it('Visible current treatments tab button', () => {
				cy.get('#edgar-dashboardTreatmentsPage-currentTreatmentsNavigation-button').should('be.visible');
			});

			it('Visible old treatments tab button', () => {
				cy.get('#edgar-dashboardTreatmentsPage-passedTreatmentsNavigation-button').should('be.visible');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible Monday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-MONDAY-text').should('be.visible');
			});

			it('Visible Tuesday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-TUESDAY-text').should('be.visible');
			});

			it('Visible Wednesday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-WEDNESDAY-text').should('be.visible');
			});

			it('Visible Thursday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-THURSDAY-text').should('be.visible');
			});

			it('Visible Friday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-FRIDAY-text').should('be.visible');
			});

			it('Visible Saturday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-SATURDAY-text').should('be.visible');
			});

			it('Visible Sunday label', () => {
				cy.get('#edgar-dashboardTreatmentsPage-dayTitle-SUNDAY-text').should('be.visible');
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
