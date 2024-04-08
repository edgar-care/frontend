import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';

describe('Medical Page tests - Desktop', () => {
	let authToken: string;

	describe('Init test', async () => {
		it('Create an account', async () => {
			const response = await createPatientAccount();
			authToken = response.authToken;
		});

		it('Create the medical info', () => {
			setupMedicalInfo(authToken);
		});
	});

	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.visit('/dashboard/medical').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-dashboardMedicalPage]').should('have.length', 1);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-dashboardMedicalPage]').should('have.length', 10);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-dashboardMedicalPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-dashboardMedicalPage]').should('have.length', 0);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-dashboardMedicalPage-updateInformations-button').should(
					'contain.text',
					'Mettre à jour mes informations',
				);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for Update Informations #1', () => {
				cy.get('#edgar-dashboardMedicalPage-updateInformations1-text').should(
					'contain.text',
					'Des informations manquantes ?',
				);
			});

			it('Good content for Update Informations #2', () => {
				cy.get('#edgar-dashboardMedicalPage-updateInformations2-text').should(
					'contain.text',
					'Des changements médicaux ?',
				);
			});

			it('Good content for Name', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-name-text').should('contain.text', 'Nom:');
			});

			it('Good content for Firstname', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-firstname-text').should('contain.text', 'Prénom:');
			});

			it('Good content for birthdate', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-birthdate-text').should(
					'contain.text',
					'Date de naissance:',
				);
			});

			it('Good content for Sex', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-sex-text').should('contain.text', 'Sexe:');
			});

			it('Good content for height', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-height-text').should('contain.text', 'Taille:');
			});

			it('Good content for Weight', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-weight-text').should('contain.text', 'Poids:');
			});

			it('Good content for Doctor name', () => {
				cy.get('#edgar-dashboardMedicalPage-healthInfoCard-primaryDoctorId-text').should(
					'contain.text',
					'Médecin traitant:',
				);
			});

			it('Good content for Medical antecedents', () => {
				cy.get('#edgar-dashboardMedicalPage-healthInfoCard-medicalAntecedents-text').should(
					'contain.text',
					'Antécédents médicaux:',
				);
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible buttons', () => {
				cy.get('#edgar-dashboardMedicalPage-updateInformations-button').should('be.visible');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible Update Informations #1', () => {
				cy.get('#edgar-dashboardMedicalPage-updateInformations1-text').should('be.visible');
			});

			it('Visible Update Informations #2', () => {
				cy.get('#edgar-dashboardMedicalPage-updateInformations1-text').should('be.visible');
			});

			it('Visible Name', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-name-text').should('be.visible');
			});

			it('Visible Firstname', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-firstname-text').should('be.visible');
			});

			it('Visible birthdate', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-birthdate-text').should('be.visible');
			});

			it('Visible Sex', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-sex-text').should('be.visible');
			});

			it('Visible height', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-height-text').should('be.visible');
			});

			it('Visible Weight', () => {
				cy.get('#edgar-dashboardMedicalPage-personalInfoCard-weight-text').should('be.visible');
			});

			it('Visible Doctor name', () => {
				cy.get('#edgar-dashboardMedicalPage-healthInfoCard-primaryDoctorId-text').should('be.visible');
			});

			it('Visible Medical antecedents', () => {
				cy.get('#edgar-dashboardMedicalPage-healthInfoCard-medicalAntecedents-text').should('be.visible');
			});
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
