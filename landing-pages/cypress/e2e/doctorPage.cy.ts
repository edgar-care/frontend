const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/doctor`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-doctorPage]').should('have.length', 1);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-doctorPage]').should('have.length', 4);
	});
	it('Good number of images', () => {
		cy.get('input[id^=edgar-doctorPage]').should('have.length', 2);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/doctor`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-doctorPage-searchDoctor-button').should('contain.text', 'Rechercher un médecin');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-doctorPage-title-text').should('contain.text', 'edgar chez les médecins');
		cy.get('#edgar-doctorPage-subtitle-text').should(
			'contain.text',
			'Trouvez un médecin près de chez vous utilisant edgar.',
		);
		cy.get('#edgar-doctorPage-doctorName-text').should('contain.text', 'Nom du médecin');
		cy.get('#edgar-doctorPage-localisation-text').should('contain.text', 'Votre localisation');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/doctor`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-doctorPage-searchDoctor-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-doctorPage-title-text').should('be.visible');
		cy.get('#edgar-doctorPage-subtitle-text').should('be.visible');
		cy.get('#edgar-doctorPage-doctorName-text').should('be.visible');
		cy.get('#edgar-doctorPage-localisation-text').should('be.visible');
	});
});

describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}/doctor`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-doctorPage]').should('have.length', 1);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-doctorPage]').should('have.length', 4);
	});
	it('Good number of images', () => {
		cy.get('input[id^=edgar-doctorPage]').should('have.length', 2);
	});
});

describe('Good content on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}/doctor`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-doctorPage-searchDoctor-button').should('contain.text', 'Rechercher un médecin');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-doctorPage-title-text').should('contain.text', 'edgar chez les médecins');
		cy.get('#edgar-doctorPage-subtitle-text').should(
			'contain.text',
			'Trouvez un médecin près de chez vous utilisant edgar.',
		);
		cy.get('#edgar-doctorPage-doctorName-text').should('contain.text', 'Nom du médecin');
		cy.get('#edgar-doctorPage-localisation-text').should('contain.text', 'Votre localisation');
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}/doctor`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-doctorPage-searchDoctor-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-doctorPage-title-text').should('be.visible');
		cy.get('#edgar-doctorPage-subtitle-text').should('be.visible');
		cy.get('#edgar-doctorPage-doctorName-text').should('be.visible');
		cy.get('#edgar-doctorPage-localisation-text').should('be.visible');
	});
});
