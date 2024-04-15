describe('Simulation Connection Page tests - Desktop', () => {
	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.visit('/simulation/connection').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-simulationConnectionPage]').should('have.length', 2);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-simulationConnectionPage]').should('have.length', 1);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-simulationConnectionPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 1);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-simulationConnectionPage]').should('have.length', 0);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good content for signup button', () => {
				cy.get('#edgar-simulationConnectionPage-signup-button').should('contain.text', 'Créer un compte');
			});

			it('Good content for login button', () => {
				cy.get('#edgar-simulationConnectionPage-login-button').should(
					'contain.text',
					'Me connecter à mon compte',
				);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good content for page title', () => {
				cy.get('#edgar-simulationConnectionPage-title-text').should(
					'contain.text',
					'Afin de vous poser les bonnes questions, j’aurai besoin de connaître vos informations de santé. Pour cela, connectez-vous ou créez un compte.',
				);
			});
		});

		describe('Visible buttons', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Visible signup button', () => {
				cy.get('#edgar-simulationConnectionPage-signup-button').should('be.visible');
			});

			it('Visible login button', () => {
				cy.get('#edgar-simulationConnectionPage-login-button').should('be.visible');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Visible Edgar card text', () => {
				cy.get('#edgar-simulationConnectionPage-title-text').should('be.visible');
			});
		});
	});

	describe('Working page', () => {
		describe('Working states', () => {
			beforeEach(() => {
				cy.visit('/simulation/connection').wait(1000);
				cy.viewport(390, 844);
			});

			it('Click on login button', () => {
				cy.get('#edgar-simulationConnectionPage-login-button')
					.click()
					.wait(1000)
					.url()
					.should('eq', `${Cypress.env('url')}/login?redirect=/simulation/start`);
			});

			it('Click on signup button', () => {
				cy.get('#edgar-simulationConnectionPage-signup-button')
					.click()
					.wait(1000)
					.url()
					.should('eq', `${Cypress.env('url')}/signup?redirect=/simulation/start`);
			});
		});
	});
});
