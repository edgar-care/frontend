describe('Simulation Page tests - Desktop', () => {
	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.visit('/simulation').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-simulationPage]').should('have.length', 1);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-simulationPage]').should('have.length', 1);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-simulationPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 1);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-simulationPage]').should('have.length', 0);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-simulationPage-next-button').should('contain.text', 'Continuer');
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Good content for page title', () => {
				cy.get('#edgar-simulationPage-title-text').should(
					'contain.text',
					'Bienvenue dans votre simulation, je m’appelle Edgar et je serai votre assistant tout au long de cette simulation.',
				);
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Visible buttons', () => {
				cy.get('#edgar-simulationPage-next-button').should('be.visible');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(390, 844);
			});

			it('Visible Edgar card text', () => {
				cy.get('#edgar-simulationPage-title-text').should('be.visible');
			});
		});
	});

	describe('Working page', () => {
		describe('Working states', () => {
			beforeEach(() => {
				cy.visit('/simulation').wait(1000);
				cy.viewport(390, 844);
			});

			it('Click on next button', () => {
				cy.get('#edgar-simulationPage-next-button')
					.click()
					.wait(1000)
					.url()
					.should('eq', `${Cypress.env('url')}/simulation/conditions`);
			});
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
