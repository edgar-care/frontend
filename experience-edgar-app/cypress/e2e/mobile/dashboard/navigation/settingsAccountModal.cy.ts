import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';

describe('Settings Account Modal tests - Mobile', () => {
	let authToken: string;
	let email: string;

	describe('Init test', async () => {
		it('Create an account', async () => {
			const response = await createPatientAccount();
			authToken = response.authToken;
			email = response.email;
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
			cy.visit('/dashboard/appointments').wait(1000);
			cy.viewport(390, 844);
			cy.get('#edgar-dashboardNavbar-menu-button').click();
			cy.get('#edgar-dashboardNavbar-profileCard').click();
			cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
			cy.get('#edgar-settingsModal-ParamètreducompteSection-Compte-tab').click();
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
				cy.get('body').then(($body) => {
					if (!$body.find('#edgar-settingsAccountModal-headerTitle-text').length) {
						cy.get('#edgar-dashboardNavbar-menu-button').click();
						cy.get('#edgar-dashboardNavbar-profileCard').click();
						cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
						cy.get('#edgar-settingsModal-ParamètreducompteSection-Compte-tab').click();
					}
				});
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-settingsAccountModal]').should('have.length', 0);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-settingsAccountModal]').should('have.length', 16);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-settingsAccountModal]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-settingsAccountModal]').should('have.length', 0);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
				cy.get('body').then(($body) => {
					if (!$body.find('#edgar-settingsAccountModal-headerTitle-text').length) {
						cy.get('#edgar-dashboardNavbar-menu-button').click();
						cy.get('#edgar-dashboardNavbar-profileCard').click();
						cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
						cy.get('#edgar-settingsModal-ParamètreducompteSection-Compte-tab').click();
					}
				});
			});

			it('Good content for modal header title', () => {
				cy.get('#edgar-settingsAccountModal-headerTitle-text').should(
					'contain.text',
					'Personnalisation de votre compte',
				);
			});

			it('Good content for modal header subtitle', () => {
				cy.get('#edgar-settingsAccountModal-headerSubtitle-text').should(
					'contain.text',
					'Modifier, configurer et personnaliser toutes les options liées à votre compte.',
				);
			});

			it('Good content for patient name', () => {
				cy.get('#edgar-settingsAccountModal-profileFirstnameName-text').should('contain.text', 'Edgar PATIENT');
			});

			it('Good content for patient birthdate', () => {
				cy.get('#edgar-settingsAccountModal-profileBirthdate-text').should('contain.text', 'Né le 05/03/2015');
			});

			it('Good content for account settings section name', () => {
				cy.get('#edgar-settingsAccountModal-ParamètreducompteSection-name-text').should(
					'contain.text',
					'Paramètre du compte',
				);
			});

			it('Good content for account security section name', () => {
				cy.get('#edgar-settingsAccountModal-SécuritéducompteSection-name-text').should(
					'contain.text',
					'Sécurité du compte',
				);
			});

			it('Good content for account management section name', () => {
				cy.get('#edgar-settingsAccountModal-GestionducompteSection-name-text').should(
					'contain.text',
					'Gestion du compte',
				);
			});

			it('Good content for email tab name', () => {
				cy.get('#edgar-settingsAccountModal-ParamètreducompteSection-Email-tabName-text').should(
					'contain.text',
					'Email',
				);
			});

			it('Good content for email placeholder name', () => {
				cy.get('#edgar-settingsAccountModal-ParamètreducompteSection-Email-tabPlaceholder-text').should(
					'contain.text',
					email,
				);
			});

			it('Good content for password tab name', () => {
				cy.get('#edgar-settingsAccountModal-ParamètreducompteSection-Motdepasse-tabName-text').should(
					'contain.text',
					'Mot de passe',
				);
			});

			it('Good content for 2FA tab name', () => {
				cy.get(
					'#edgar-settingsAccountModal-SécuritéducompteSection-Doubleauthentification-tabName-text',
				).should('contain.text', 'Double authentification');
			});

			it('Good content for 2FA badge name', () => {
				cy.get(
					'#edgar-settingsAccountModal-SécuritéducompteSection-Doubleauthentification-tabBadge-text',
				).should('contain.text', 'Désactivée');
			});

			it('Good content for backup codes tab name', () => {
				cy.get('#edgar-settingsAccountModal-SécuritéducompteSection-Codesdesauvegarde-tabName-text').should(
					'contain.text',
					'Codes de sauvegarde',
				);
			});

			it('Good content for backup codes badge name', () => {
				cy.get('#edgar-settingsAccountModal-SécuritéducompteSection-Codesdesauvegarde-tabBadge-text').should(
					'contain.text',
					'Non consultés',
				);
			});

			it('Good content for disable account tab name', () => {
				cy.get('#edgar-settingsAccountModal-GestionducompteSection-Désactiverlecompte-tabName-text').should(
					'contain.text',
					'Désactiver le compte',
				);
			});

			it('Good content for delete account tab name', () => {
				cy.get('#edgar-settingsAccountModal-GestionducompteSection-Supprimerlecompte-tabName-text').should(
					'contain.text',
					'Supprimer le compte',
				);
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
				cy.get('body').then(($body) => {
					if (!$body.find('#edgar-settingsAccountModal-headerTitle-text').length) {
						cy.get('#edgar-dashboardNavbar-menu-button').click();
						cy.get('#edgar-dashboardNavbar-profileCard').click();
						cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
						cy.get('#edgar-settingsModal-ParamètreducompteSection-Compte-tab').click();
					}
				});
			});

			it('Modal header title visible', () => {
				cy.get('#edgar-settingsAccountModal-headerTitle-text').should('be.visible');
			});

			it('Modal header subtitle visible', () => {
				cy.get('#edgar-settingsAccountModal-headerSubtitle-text').should('be.visible');
			});

			it('Patient name visible', () => {
				cy.get('#edgar-settingsAccountModal-profileFirstnameName-text').should('be.visible');
			});

			it('Patient birthdate visible', () => {
				cy.get('#edgar-settingsAccountModal-profileBirthdate-text').should('be.visible');
			});

			it('Account settings section name visible', () => {
				cy.get('#edgar-settingsAccountModal-ParamètreducompteSection-name-text').should('be.visible');
			});

			it('Account security section name visible', () => {
				cy.get('#edgar-settingsAccountModal-SécuritéducompteSection-name-text').should('be.visible');
			});

			it('Account management section name visible', () => {
				cy.get('#edgar-settingsAccountModal-GestionducompteSection-name-text').should('be.visible');
			});

			it('Email tab name visible', () => {
				cy.get('#edgar-settingsAccountModal-ParamètreducompteSection-Email-tabName-text').should('be.visible');
			});

			it('Email placeholder name visible', () => {
				cy.get('#edgar-settingsAccountModal-ParamètreducompteSection-Email-tabPlaceholder-text').should(
					'be.visible',
				);
			});

			it('Password tab name visible', () => {
				cy.get('#edgar-settingsAccountModal-ParamètreducompteSection-Motdepasse-tabName-text').should(
					'be.visible',
				);
			});

			it('2FA tab visible', () => {
				cy.get(
					'#edgar-settingsAccountModal-SécuritéducompteSection-Doubleauthentification-tabName-text',
				).should('be.visible');
			});

			it('2FA badge visible', () => {
				cy.get(
					'#edgar-settingsAccountModal-SécuritéducompteSection-Doubleauthentification-tabBadge-text',
				).should('be.visible');
			});

			it('Backup codes tab name visible', () => {
				cy.get('#edgar-settingsAccountModal-SécuritéducompteSection-Codesdesauvegarde-tabName-text').should(
					'be.visible',
				);
			});

			it('Backup codes badge name visible', () => {
				cy.get('#edgar-settingsAccountModal-SécuritéducompteSection-Codesdesauvegarde-tabBadge-text').should(
					'be.visible',
				);
			});

			it('Disable account tab name visible', () => {
				cy.get('#edgar-settingsAccountModal-GestionducompteSection-Désactiverlecompte-tabName-text').should(
					'be.visible',
				);
			});

			it('Delete account tab name visible', () => {
				cy.get('#edgar-settingsAccountModal-GestionducompteSection-Supprimerlecompte-tabName-text').should(
					'be.visible',
				);
			});
		});

		describe('Good redirection on elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
				cy.get('body').then(($body) => {
					if (!$body.find('#edgar-settingsAccountModal-headerTitle-text').length) {
						cy.get('#edgar-dashboardNavbar-menu-button').click();
						cy.get('#edgar-dashboardNavbar-profileCard').click();
						cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
						cy.get('#edgar-settingsModal-ParamètreducompteSection-Compte-tab').click();
					}
				});
			});
		});
	});

	describe('Working page', () => {
		beforeEach(() => {
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.viewport(390, 844);
			cy.visit('/dashboard/appointments').wait(1000);
			cy.get('#edgar-dashboardNavbar-menu-button').click();
			cy.get('#edgar-dashboardNavbar-profileCard').click();
			cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
			cy.get('#edgar-settingsModal-ParamètreducompteSection-Compte-tab').click();
		});

		it('Return to the settings modal', () => {
			cy.get('#edgar-settingsAccountModal-returnButton-icon').click();
			cy.get('#edgar-settingsAccountModal-headerTitle-text').should('not.exist');
			cy.get('#edgar-settingsModal-headerTitle-text').should('exist');
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
