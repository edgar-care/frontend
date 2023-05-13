const url = 'http://localhost:3000';
const appUrl = 'http://localhost:3001';

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/application`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-applicationPage]').should('have.length', 2);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-applicationPage]').should('have.length', 2);
	});
	it('Good number of images', () => {
		cy.get('img[id^=edgar-applicationPage]').should('have.length', 2);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/application`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-applicationPage-iOS-button').should('contain.text', 'Bientôt disponible');
		cy.get('#edgar-applicationPage-android-button').should('contain.text', 'Téléchargez moi');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-applicationPage-title-text').should('contain.text', 'edgar sur mobile');
		cy.get('#edgar-applicationPage-subtitle-text').should(
			'contain.text',
			'La plateforme s’occupant de votre santé et celle de vos proches désormais disponible sur Android et bientôt sur iOS',
		);
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/application`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-applicationPage-iOS-button').should('be.visible');
		cy.get('#edgar-applicationPage-android-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-applicationPage-title-text').should('be.visible');
		cy.get('#edgar-applicationPage-subtitle-text').should('be.visible');
	});

	it('Visible images', () => {
		cy.get('#edgar-applicationPage-edgariOS-image').should('be.visible');
		cy.get('#edgar-applicationPage-edgarAndroid-image').should('be.visible');
	});
});

describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}/application`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-applicationPage]').should('have.length', 2);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-applicationPage]').should('have.length', 2);
	});
	it('Good number of images', () => {
		cy.get('img[id^=edgar-applicationPage]').should('have.length', 2);
	});
});

describe('Good content on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}/application`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-applicationPage-iOS-button').should('contain.text', 'Bientôt disponible');
		cy.get('#edgar-applicationPage-android-button').should('contain.text', 'Téléchargez moi');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-applicationPage-title-text').should('contain.text', 'edgar sur mobile');
		cy.get('#edgar-applicationPage-subtitle-text').should(
			'contain.text',
			'La plateforme s’occupant de votre santé et celle de vos proches désormais disponible sur Android et bientôt sur iOS',
		);
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}/application`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-applicationPage-iOS-button').should('be.visible');
		cy.get('#edgar-applicationPage-android-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-applicationPage-title-text').should('be.visible');
		cy.get('#edgar-applicationPage-subtitle-text').should('be.visible');
	});

	it('Visible images', () => {
		cy.get('#edgar-applicationPage-edgariOS-image').should('be.visible');
		cy.get('#edgar-applicationPage-edgarAndroid-image').should('be.visible');
	});
});
