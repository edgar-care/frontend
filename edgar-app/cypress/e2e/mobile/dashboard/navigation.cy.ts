describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/dashboard');
		cy.get('#edgar-dashboardNavbar-menu-button').click();
		window.localStorage.setItem('token', 'test');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-dashboardNavbar]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-dashboardNavbar]').should('have.length', 6);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-dashboardNavbar]').should('have.length', 0);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-dashboardNavbar]').should('have.length', 0);
	});
});

describe('Good content for texts - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/dashboard');
		cy.get('#edgar-dashboardNavbar-menu-button').click();
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

describe('Visible texts - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/dashboard');
		cy.get('#edgar-dashboardNavbar-menu-button').click();
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

describe('Working page - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/dashboard');
		cy.get('#edgar-dashboardNavbar-menu-button').click();
		cy.wait(1000);
		window.localStorage.setItem('token', 'test');
	});

	it('Logout working', () => {
		cy.get('#edgar-dashboardNavbar-profileCard').click();
		cy.get('#edgar-dashboardNavbar-profileTab-Déconnexion-text').click();
		cy.visit('/dashboard')
			.url()
			.should('be.equal', `${Cypress.env('url')}/login`);
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
