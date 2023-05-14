const url = 'http://localhost:3000';
const appUrl = 'http://localhost:3001';

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-navbar]').should('have.length', 1);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-navbar-tab]').should('have.length', 3);
	});
	it('Good number of images', () => {
		cy.get('img[id^=edgar-navbar]').should('have.length', 1);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-navbar-patientArea-button').should('contain.text', 'Espace patient');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-navbar-tab-product-text').should('contain.text', 'Ce que nous offrons');
		cy.get('#edgar-navbar-tab-application-text').should('contain.text', 'Notre application');
		cy.get('#edgar-navbar-tab-contact-text').should('contain.text', 'Nous rejoindre');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-navbar-patientArea-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-navbar-tab-product-text').should('be.visible');
		cy.get('#edgar-navbar-tab-application-text').should('be.visible');
		cy.get('#edgar-navbar-tab-contact-text').should('be.visible');
	});

	it('Visible images', () => {
		cy.get('#edgar-navbar-edgarLogo-img').should('be.visible');
	});
});

describe('Good redirection on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}`);
	});

	it('Good redirection on buttons', () => {
		cy.get('#edgar-navbar-patientArea-button').click().url().should('eq', `${appUrl}/connection/login`);
	});

	it('Good redirection on texts', () => {
		cy.get('#edgar-navbar-tab-product-text').click().url().should('eq', `${url}/product`);
		cy.visit(`${url}`);
		cy.get('#edgar-navbar-tab-application-text').click().url().should('eq', `${url}/application`);
		cy.visit(`${url}`);
		cy.get('#edgar-navbar-tab-contact-text').click().url().should('eq', `${url}/contact`);
	});

	it('Good redirection on images', () => {
		cy.get('#edgar-navbar-edgarLogo-img').click().url().should('eq', `${url}/`);
	});
});

describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-navbar]').should('have.length', 0);
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('button[id^=edgar-navbar]').should('have.length', 1);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-navbar-tab]').should('have.length', 0);
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('p[id^=edgar-navbar-tab]').should('have.length', 4);
	});
	it('Good number of images', () => {
		cy.get('img[id^=edgar-navbar]').should('have.length', 1);
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('img[id^=edgar-navbar]').should('have.length', 1);
	});
	it('Good number of icons', () => {
		cy.get('svg[id^=edgar-navbar]').should('have.length', 1);
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('svg[id^=edgar-navbar]').should('have.length', 1);
	});
});

describe('Good content on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}`);
		cy.get('#edgar-navbar-drawer-button').click();
	});

	it('Good content for texts', () => {
		cy.get('#edgar-navbar-tab-product-text').should('contain.text', 'Ce que nous offrons');
		cy.get('#edgar-navbar-tab-application-text').should('contain.text', 'Notre application');
		cy.get('#edgar-navbar-tab-contact-text').should('contain.text', 'Nous rejoindre');
		cy.get('#edgar-navbar-tab-patient-text').should('contain.text', 'Espace patient');
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('#edgar-navbar-drawerClose-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('#edgar-navbar-tab-product-text').should('be.visible');
		cy.get('#edgar-navbar-tab-application-text').should('be.visible');
		cy.get('#edgar-navbar-tab-contact-text').should('be.visible');
	});

	it('Visible images', () => {
		cy.get('#edgar-navbar-edgarLogo-img').should('be.visible');
	});

	it('Visible svg', () => {
		cy.get('#edgar-navbar-drawer-button').should('be.visible');
	});
});

describe('Good redirection on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}`);
	});

	it('Good redirection for product text', () => {
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('#edgar-navbar-tab-product-text').click().url().should('eq', `${url}/product`);
	});

	it('Good redirection for application text', () => {
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('#edgar-navbar-tab-application-text').click().url().should('eq', `${url}/application`);
	});

	it('Good redirection for contact text', () => {
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('#edgar-navbar-tab-contact-text').click().url().should('eq', `${url}/contact`);
	});

	it('Good redirection for patient area text', () => {
		cy.get('#edgar-navbar-drawer-button').click();
		cy.get('#edgar-navbar-tab-patient-text').click().url().should('eq', `${appUrl}/connection/login`);
	});

	it('Good redirection on images', () => {
		cy.get('#edgar-navbar-edgarLogo-img').click().url().should('eq', `${url}/`);
	});
});
