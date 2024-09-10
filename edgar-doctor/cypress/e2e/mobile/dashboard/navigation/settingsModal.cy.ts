import createDoctorAccount from 'utils/createDoctorAccount';

describe('Settings Modal tests - Mobile', () => {
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
			cy.viewport(390, 844);
			cy.get('#edgar-dashboardNavbar-menu-button').click();
			cy.get('#edgar-dashboardNavbar-profileCard').click();
			cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
				cy.get('body').then(($body) => {
					if (!$body.find('#edgar-settingsModal-headerTitle-text').length) {
						cy.get('#edgar-dashboardNavbar-profileCard').click();
						cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
					}
				});
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-settingsModal]').should('have.length', 0);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-settingsModal]').should('have.length', 6);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-settingsModal]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-settingsModal]').should('have.length', 0);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
				cy.get('body').then(($body) => {
					if (!$body.find('#edgar-settingsModal-headerTitle-text').length) {
						cy.get('#edgar-dashboardNavbar-profileCard').click();
						cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
					}
				});
			});

			it('Good content for modal header title', () => {
				cy.get('#edgar-settingsModal-headerTitle-text').should(
					'contain.text',
					'Personnalisation de votre expérience avec edgar',
				);
			});

			it('Good content for modal header subtitle', () => {
				cy.get('#edgar-settingsModal-headerSubtitle-text').should(
					'contain.text',
					'Modifier, configurer et personnaliser toutes les options liées à votre compte.',
				);
			});

			it('Good content for patient name', () => {
				cy.get('#edgar-settingsModal-profileFirstnameName-text').should('contain.text', 'Edgar MEDECIN');
			});

			it('Good content for account settings section name', () => {
				cy.get('#edgar-settingsModal-ParamètreducompteSection-name-text').should(
					'contain.text',
					'Paramètre du compte',
				);
			});

			it('Good content for account tab name', () => {
				cy.get('#edgar-settingsModal-ParamètreducompteSection-Compte-tabName-text').should(
					'contain.text',
					'Compte',
				);
			});

			it('Good content for devices tab name', () => {
				cy.get('#edgar-settingsModal-ParamètreducompteSection-Appareils-tabName-text').should(
					'contain.text',
					'Appareils',
				);
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
				cy.get('body').then(($body) => {
					if (!$body.find('#edgar-settingsModal-headerTitle-text').length) {
						cy.get('#edgar-dashboardNavbar-profileCard').click();
						cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
					}
				});
			});

			it('Modal header title visible', () => {
				cy.get('#edgar-settingsModal-headerTitle-text').should('be.visible');
			});

			it('Modal header subtitle visible', () => {
				cy.get('#edgar-settingsModal-headerSubtitle-text').should('be.visible');
			});

			it('Patient name visible', () => {
				cy.get('#edgar-settingsModal-profileFirstnameName-text').should('be.visible');
			});

			it('Account settings section name visible', () => {
				cy.get('#edgar-settingsModal-ParamètreducompteSection-name-text').should('be.visible');
			});

			it('Account tab name visible', () => {
				cy.get('#edgar-settingsModal-ParamètreducompteSection-Compte-tabName-text').should('be.visible');
			});

			it('Devices tab name visible', () => {
				cy.get('#edgar-settingsModal-ParamètreducompteSection-Appareils-tabName-text').should('be.visible');
			});
		});

		describe('Good redirection on elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
				cy.get('body').then(($body) => {
					if (!$body.find('#edgar-settingsModal-headerTitle-text').length) {
						cy.get('#edgar-dashboardNavbar-profileCard').click();
						cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
					}
				});
			});

			it('Good redirection for "Compte" tab', () => {
				cy.get('#edgar-settingsModal-ParamètreducompteSection-Compte-tab').click();
				cy.get('#edgar-settingsAccountModal-headerTitle-text').should('exist');
			});
		});
	});

	describe('Working page', () => {
		beforeEach(() => {
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.viewport(390, 844);
			cy.visit('/dashboard');
			cy.get('#edgar-dashboardNavbar-menu-button').click();
			cy.get('#edgar-dashboardNavbar-profileCard').click();
			cy.get('#edgar-dashboardNavbar-profileTab-Paramètres').click();
		});

		it('Close the modal', () => {
			cy.get('#edgar-settingsModal-closeButton-icon').click();
			cy.get('#edgar-settingsModal-headerTitle-text').should('not.exist');
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
