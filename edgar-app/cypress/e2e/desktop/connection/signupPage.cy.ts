import generateRandomEmail from 'utils/generateRandomEmail';

describe('Signup Page tests - Desktop', () => {
	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.visit('/signup').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-signupPage]').should('have.length', 2);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-signupPage]').should('have.length', 2);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-signupPage]').should('have.length', 2);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-signupPage]').should('have.length', 2);
			});
		});

		describe('Good content on elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-signupPage-login-button').should('contain.text', 'Connectez-vous');
				cy.get('#edgar-signupPage-form-button').should('contain.text', "S'inscrire");
			});

			it('Good content for texts', () => {
				cy.get('#edgar-signupPage-title-text').should(
					'contain.text',
					'Un compte edgar vous permettra de suivre votre santé ainsi que prendre des rendez-vous pour vous et vos proches',
				);
				cy.get('#edgar-signupPage-login-title-text').should('contain.text', 'Vous êtes déjà inscrit ?');
				cy.get('#edgar-signupPage-formEmail-text').should('contain.text', 'Adresse mail');
				cy.get('#edgar-signupPage-formPassword-text').should('contain.text', 'Mot de passe');
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-signupPage-login-button').should('be.visible');
				cy.get('#edgar-signupPage-form-button').should('be.visible');
			});

			it('Good content for texts', () => {
				cy.get('#edgar-signupPage-title-text').should('be.visible');
				cy.get('#edgar-signupPage-login-title-text').should('be.visible');
				cy.get('#edgar-signupPage-formEmail-text').should('be.visible');
				cy.get('#edgar-signupPage-formPassword-text').should('be.visible');
			});
		});

		describe('Good redirection on elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good redirection on buttons', () => {
				cy.get('#edgar-signupPage-login-button')
					.click()
					.url()
					.should('eq', `${Cypress.env('url')}/login`);
			});
		});
	});

	describe('Working page', () => {
		describe('Error states', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
				cy.visit('/signup').wait(1000);
			});

			it('No email address', () => {
				cy.get('#edgar-signupPage-form-button').click();
				cy.get('#edgar-signupPage-formEmailError-text').should('be.visible');
				cy.get('#edgar-signupPage-formEmailError-text').should('contain.text', 'Adresse mail invalide');
			});

			it('No password', () => {
				cy.get('#edgar-signupPage-formEmail-input').click().type('prenom.nom@test.fr');
				cy.get('#edgar-signupPage-form-button').click();
				cy.get('#edgar-signupPage-formPasswordError-text').should('be.visible');
				cy.get('#edgar-signupPage-formPasswordError-text').should('contain.text', 'Mot de passe invalide');
			});

			it('Not real email address', () => {
				cy.get('#edgar-signupPage-formEmail-input').click().type('prenom.nomtest.fr');
				cy.get('#edgar-signupPage-formEmail-input').click().type('testtest');
				cy.get('#edgar-signupPage-form-button').click();
				cy.get('#edgar-signupPage-formEmailError-text').should('be.visible');
				cy.get('#edgar-signupPage-formEmailError-text').should('contain.text', 'Adresse mail invalide');
			});

			it('Too short password', () => {
				cy.get('#edgar-signupPage-formEmail-input').click().type('prenom.nom@test.fr');
				cy.get('#edgar-signupPage-formPassword-input').click().type('2short');
				cy.get('#edgar-signupPage-form-button').click();
				cy.get('#edgar-signupPage-formPasswordError-text').should('be.visible');
				cy.get('#edgar-signupPage-formPasswordError-text').should('contain.text', 'Mot de passe invalide');
			});
		});

		describe('Working states', () => {
			before(() => {
				cy.viewport(1920, 1080);
				cy.visit('/signup').wait(1000);
			});

			it('Good credentials', () => {
				cy.get('#edgar-signupPage-formEmail-input').click().type(generateRandomEmail());
				cy.get('#edgar-signupPage-formPassword-input').click().type(Cypress.env('loginTestPassword'));
				cy.get('#edgar-signupPage-form-button')
					.click()
					.wait(2000)
					.url()
					.should('eq', `${Cypress.env('url')}/onboarding/personal`);
			});
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
