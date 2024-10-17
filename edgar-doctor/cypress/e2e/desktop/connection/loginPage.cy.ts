import createDoctorAccount from 'utils/createDoctorAccount';

describe('Login Page tests - Desktop', () => {
	let email: string;

	describe('Init test', async () => {
		it('Create an account', async () => {
			const response = await createDoctorAccount();
			email = response.email;
		});
	});

	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.visit('/login');
			cy.viewport(1920, 1080);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
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
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-loginPage]').should('have.length', 2);
			});
		});

		describe('Good content on elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-loginPage-form-button').should('contain.text', 'Se connecter');
			});

			it('Good content for texts', () => {
				cy.get('#edgar-loginPage-EdgarCard-title-text').should(
					'contain.text',
					'Heureux de vous revoir',
				);
				cy.get('#edgar-loginPage-title-text').should(
					'contain.text',
					'Connectez-vous avec votre compte pour accéder à votre espace médecin, gérer vos rendez-vous, vos patients et bien plus.',
				);
				cy.get('#edgar-loginPage-formEmail-text').should('contain.text', 'Adresse mail');
				cy.get('#edgar-loginPage-formPassword-text').should('contain.text', 'Mot de passe');
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-loginPage-form-button').should('be.visible');
			});

			it('Good content for texts', () => {
				cy.get('#edgar-loginPage-EdgarCard-title-text').should('be.visible');
				cy.get('#edgar-loginPage-title-text').should('be.visible');
				cy.get('#edgar-loginPage-formEmail-text').should('be.visible');
				cy.get('#edgar-loginPage-formPassword-text').should('be.visible');
			});
		});
	});

	describe('Working page', () => {
		beforeEach(() => {
			cy.viewport(1920, 1080);
			cy.visit('/login');
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

		it('Good credentials', () => {
			cy.get('#edgar-loginPage-formEmail-input').click().type(email);
			cy.get('#edgar-loginPage-formPassword-input').click().type(Cypress.env('loginTestPassword'));
			cy.get('#edgar-loginPage-form-button')
				.click()
				.wait(2000)
				.url()
				.should('eq', `${Cypress.env('url')}/dashboard`);
		});
	});
});
