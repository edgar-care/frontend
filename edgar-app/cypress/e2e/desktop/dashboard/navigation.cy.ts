const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/dashboard`);
		window.localStorage.setItem('token', 'test');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-dashboardNavbar]').should('have.length', 0);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-dashboardNavbar]').should('have.length', 6);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-dashboardNavbar]').should('have.length', 0);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 1);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-dashboardNavbar]').should('have.length', 0);
	});
});

describe('Good content for texts - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/dashboard`);
		window.localStorage.setItem('token', 'test');
	});

	it('Good content for "Accueil" tab', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-home-text').should('contain.text', 'Accueil');
	});

	it('Good content for "Rendez-vous" tab', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-appointments-text').should('contain.text', 'Rendez-vous');
	});

	it('Good content for "Documents" tab', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-documents-text').should('contain.text', 'Documents');
	});

	it('Good content for "Dossier médical" tab', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-medical-text').should('contain.text', 'Dossier médical');
	});

	it('Good content for "Aide" tab', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-help-text').should('contain.text', 'Aide');
	});

	it('Good content for Username Profile Card', () => {
		cy.get('#edgar-dashboardNavbar-profileCard-userName-text').should('contain.text', 'Nom Prénom');
	});
});

describe('Visible texts - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/dashboard`);
		window.localStorage.setItem('token', 'test');
	});

	it('"Accueil" tab visible', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-home-text').should('be.visible');
	});

	it('"Rendez-vous" tab visible', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-appointments-text').should('be.visible');
	});

	it('"Documents" tab visible', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-documents-text').should('be.visible');
	});

	it('"Dossier médical" tab visible', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-medical-text').should('be.visible');
	});

	it('"Aide" tab visible', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-help-text').should('be.visible');
	});

	it('Username Profile Card visible', () => {
		cy.get('#edgar-dashboardNavbar-profileCard-userName-text').should('be.visible');
	});
});

describe('Good redirection on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/dashboard`);
		cy.wait(1000);
		window.localStorage.setItem('token', 'test');
	});

	it('Good redirection for "Accueil" tab', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-home').click().url().should('be.equal', `${url}/dashboard`);
	});

	it('Good redirection for "Rendez-vous" tab', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-appointments')
			.click()
			.url()
			.should('be.equal', `${url}/dashboard/appointments`);
	});

	it('Good redirection for "Documents" tab', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-documents')
			.click()
			.url()
			.should('be.equal', `${url}/dashboard/documents`);
	});

	it('Good redirection for "Dossier médical" tab', () => {
		cy.get('#edgar-dashboardNavbar-navbarTab-medical').click().url().should('be.equal', `${url}/dashboard/medical`);
	});
});

describe('Working page - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/dashboard`);
		cy.wait(1000);
		window.localStorage.setItem('token', 'test');
	});

	it('Logout working', () => {
		cy.get('#edgar-dashboardNavbar-profileCard').click();
		cy.get('#edgar-dashboardNavbar-profileTab-Déconnexion-text').click();
		cy.visit(`${url}/dashboard`).url().should('be.equal', `${url}/login`);
	});

	it('Opening Profile Card works', () => {
		cy.get('#edgar-dashboardNavbar-profileCard').click();
		cy.get('#edgar-dashboardNavbar-profileTab-Déconnexion-text').should('be.visible');
	});

	it('Opening then closing Profile Card works', () => {
		cy.get('#edgar-dashboardNavbar-profileCard').click();
		cy.get('#edgar-dashboardNavbar-profileCard-userName').click();
	});
});
