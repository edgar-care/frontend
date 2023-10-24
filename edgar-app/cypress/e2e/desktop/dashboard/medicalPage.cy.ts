const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');
const authToken = Cypress.env('authToken');

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/medical`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-dashboardMedicalPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-dashboardMedicalPage]').should('have.length', 12);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-dashboardMedicalPage]').should('have.length', 0);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-dashboardMedicalPage]').should('have.length', 0);
	});
});

describe('Good content for buttons - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/medical`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-dashboardMedicalPage-updateInformations-button').should(
			'contain.text',
			'Mettre à jour mes informations',
		);
	});
});

describe('Good content for texts - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/medical`);
	});

	it('Good content for Update Informations #1', () => {
		cy.get('#edgar-dashboardMedicalPage-updateInformations1-text').should(
			'contain.text',
			'Des informations manquantes ?',
		);
	});

	it('Good content for Update Informations #2', () => {
		cy.get('#edgar-dashboardMedicalPage-updateInformations2-text').should(
			'contain.text',
			'Des changements médicaux ?',
		);
	});

	it('Good content for Name', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-name-text').should('contain.text', 'Nom:');
	});

	it('Good content for Firstname', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-firstname-text').should('contain.text', 'Prénom:');
	});

	it('Good content for Birthdate', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-birthDate-text').should(
			'contain.text',
			'Date de naissance:',
		);
	});

	it('Good content for Sex', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-sex-text').should('contain.text', 'Sexe:');
	});

	it('Good content for Size', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-size-text').should('contain.text', 'Taille:');
	});

	it('Good content for Weight', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-weight-text').should('contain.text', 'Poids:');
	});

	it('Good content for Doctor name', () => {
		cy.get('#edgar-dashboardMedicalPage-healthInfoCard-primaryDoctorName-text').should(
			'contain.text',
			'Médecin traitant:',
		);
	});

	it('Good content for Allergies', () => {
		cy.get('#edgar-dashboardMedicalPage-healthInfoCard-allergies-text').should('contain.text', 'Allergies:');
	});

	it('Good content for Diseases', () => {
		cy.get('#edgar-dashboardMedicalPage-healthInfoCard-diseases-text').should('contain.text', 'Maladies:');
	});

	it('Good content for Treatments', () => {
		cy.get('#edgar-dashboardMedicalPage-healthInfoCard-treatmentsInProgress-text').should(
			'contain.text',
			'Traitements en cours:',
		);
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/medical`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-dashboardMedicalPage-updateInformations-button').should('be.visible');
	});
});

describe('Visible texts - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.window().then((win) => win.localStorage.setItem('token', authToken));
		cy.visit(`${url}/dashboard/medical`);
	});

	it('Visible Update Informations #1', () => {
		cy.get('#edgar-dashboardMedicalPage-updateInformations1-text').should('be.visible');
	});

	it('Visible Update Informations #2', () => {
		cy.get('#edgar-dashboardMedicalPage-updateInformations1-text').should('be.visible');
	});

	it('Visible Name', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-name-text').should('be.visible');
	});

	it('Visible Firstname', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-firstname-text').should('be.visible');
	});

	it('Visible Birthdate', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-birthDate-text').should('be.visible');
	});

	it('Visible Sex', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-sex-text').should('be.visible');
	});

	it('Visible Size', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-size-text').should('be.visible');
	});

	it('Visible Weight', () => {
		cy.get('#edgar-dashboardMedicalPage-personalInfoCard-weight-text').should('be.visible');
	});

	it('Visible Doctor name', () => {
		cy.get('#edgar-dashboardMedicalPage-healthInfoCard-primaryDoctorName-text').should('be.visible');
	});

	it('Visible Allergies', () => {
		cy.get('#edgar-dashboardMedicalPage-healthInfoCard-allergies-text').should('be.visible');
	});

	it('Visible Diseases', () => {
		cy.get('#edgar-dashboardMedicalPage-healthInfoCard-diseases-text').should('be.visible');
	});

	it('Visible Treatments', () => {
		cy.get('#edgar-dashboardMedicalPage-healthInfoCard-treatmentsInProgress-text').should('be.visible');
	});
});
