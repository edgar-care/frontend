import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';

describe('Login Page tests - Mobile', () => {
	let email: string;
	let authToken: string;

	it('Create an account', async () => {
		const response = await createPatientAccount();
		email = response.email;
		authToken = response.authToken;
	});

	it('Create the medical info', async () => {
		await setupMedicalInfo(authToken);
	});

	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.visit('/login').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-loginPage]').should('have.length', 2);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-loginPage]').should('have.length', 3);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-loginPage]').should('have.length', 2);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 0);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-loginPage]').should('have.length', 2);
			});
		});

		describe('Good content on elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-loginPage-signup-button').should('contain.text', 'Créez un compte');
				cy.get('#edgar-loginPage-form-button').should('contain.text', 'Se connecter');
			});

			it('Good content for texts', () => {
				cy.get('#edgar-loginPage-EdgarCard-title-text').should(
					'contain.text',
					'Bienvenue sur la plateforme edgar',
				);
				cy.get('#edgar-loginPage-title-text').should(
					'contain.text',
					'Connectez-vous avec votre compte pour accéder à votre espace patient, gérer vos rendez-vous et bien plus',
				);
				cy.get('#edgar-loginPage-signup-title-text').should('contain.text', "Vous n'êtes pas encore inscrit ?");
				cy.get('#edgar-loginPage-formEmail-text').should('contain.text', 'Adresse mail');
				cy.get('#edgar-loginPage-formPassword-text').should('contain.text', 'Mot de passe');
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-loginPage-signup-button').should('be.visible');
				cy.get('#edgar-loginPage-form-button').should('be.visible');
			});

			it('Good content for texts', () => {
				cy.get('#edgar-loginPage-EdgarCard-title-text').should('be.visible');
				cy.get('#edgar-loginPage-title-text').should('be.visible');
				cy.get('#edgar-loginPage-signup-title-text').should('be.visible');
				cy.get('#edgar-loginPage-formEmail-text').should('be.visible');
				cy.get('#edgar-loginPage-formPassword-text').should('be.visible');
			});
		});

		describe('Good redirection on elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good redirection on buttons', () => {
				cy.get('#edgar-loginPage-signup-button')
					.click()
					.url()
					.should('eq', `${Cypress.env('url')}/signup`);
			});
		});
	});

	describe('Working page', () => {
		describe('Error states', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
				cy.visit('/login').wait(1000);
			});

			it('No email address', () => {
				cy.get('#edgar-loginPage-form-button').click();
				cy.get('#edgar-loginPage-formEmailError-text').should('be.visible');
				cy.get('#edgar-loginPage-formEmailError-text').should('contain.text', 'Adresse mail invalide');
			});

			it('No password', () => {
				cy.get('#edgar-loginPage-formEmail-input').click().type('prenom.nom@test.fr');
				cy.get('#edgar-loginPage-form-button').click();
				cy.get('#edgar-loginPage-formPasswordError-text').should('be.visible');
				cy.get('#edgar-loginPage-formPasswordError-text').should('contain.text', 'Mot de passe invalide');
			});

			it('Not real email address', () => {
				cy.get('#edgar-loginPage-formEmail-input').click().type('prenom.nomtest.fr');
				cy.get('#edgar-loginPage-formEmail-input').click().type('testtest');
				cy.get('#edgar-loginPage-form-button').click();
				cy.get('#edgar-loginPage-formEmailError-text').should('be.visible');
				cy.get('#edgar-loginPage-formEmailError-text').should('contain.text', 'Adresse mail invalide');
			});

			it('Too short password', () => {
				cy.get('#edgar-loginPage-formEmail-input').click().type('prenom.nom@test.fr');
				cy.get('#edgar-loginPage-formPassword-input').click().type('2short');
				cy.get('#edgar-loginPage-form-button').click();
				cy.get('#edgar-loginPage-formPasswordError-text').should('be.visible');
				cy.get('#edgar-loginPage-formPasswordError-text').should('contain.text', 'Mot de passe invalide');
			});
		});

		describe('Working states', () => {
			before(() => {
				cy.viewport(390, 844);
				cy.visit('/login').wait(1000);
			});

			it('Good credentials', () => {
				cy.get('#edgar-loginPage-formEmail-input').click().type(email);
				cy.get('#edgar-loginPage-formPassword-input').click().type(Cypress.env('loginTestPassword'));
				cy.get('#edgar-loginPage-form-button')
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
