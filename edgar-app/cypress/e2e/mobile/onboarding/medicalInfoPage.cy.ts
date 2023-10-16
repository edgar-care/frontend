const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');

describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.wait(1000);
		cy.visit(`${url}/onboarding/medical`);
		window.localStorage.setItem('token', 'test');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-onboardingMedicalPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-onboardingPage]').should('have.length', 1);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-onboardingMedicalPage]').should('have.length', 4);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 0);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-onboardingMedicalPage]').should('have.length', 4);
	});
});

describe('Good content for buttons - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.wait(1000);
		cy.visit(`${url}/onboarding/medical`);
		window.localStorage.setItem('token', 'test');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-onboardingMedicalPage-next-button').should('contain.text', 'Valider');
	});
});

describe('Good content for texts - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.wait(1000);
		cy.visit(`${url}/onboarding/medical`);
		window.localStorage.setItem('token', 'test');
	});

	it('Good content for Edgar card', () => {
		cy.get('#edgar-onboardingPage-EdgarCard-title-text').should(
			'contain.text',
			'J’ai besoin de vos informations médicales afin de remplir votre espace patient',
		);
	});

	it('Good content for Primary Doctor name', () => {
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-text').should(
			'contain.text',
			'Le nom de votre médecin traitant',
		);
	});

	it('Good content for Allergies names', () => {
		cy.get('#edgar-onboardingMedicalPage-formAllergies-text').should('contain.text', 'Vos allergies');
	});

	it('Good content for Diseases names', () => {
		cy.get('#edgar-onboardingMedicalPage-formDiseases-text').should('contain.text', 'Vos maladies');
	});

	it('Good content for Treatments names', () => {
		cy.get('#edgar-onboardingMedicalPage-formTreatments-text').should('contain.text', 'Vos traitements');
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.wait(1000);
		cy.visit(`${url}/onboarding/medical`);
		window.localStorage.setItem('token', 'test');
	});

	it('Visible buttons', () => {
		cy.get('#edgar-onboardingMedicalPage-next-button').should('be.visible');
	});
});

describe('Visible texts - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.wait(1000);
		cy.visit(`${url}/onboarding/medical`);
		window.localStorage.setItem('token', 'test');
	});

	it('Visible Edgar card text', () => {
		cy.get('#edgar-onboardingPage-EdgarCard-title-text').should('be.visible');
	});

	it('Visible Primary Doctor text', () => {
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-text').should('be.visible');
	});

	it('Visible Allergies text', () => {
		cy.get('#edgar-onboardingMedicalPage-formAllergies-text').should('be.visible');
	});

	it('Visible Diseases text', () => {
		cy.get('#edgar-onboardingMedicalPage-formDiseases-text').should('be.visible');
	});

	it('Visible Treatments text', () => {
		cy.get('#edgar-onboardingMedicalPage-formTreatments-text').should('be.visible');
	});
});

describe('Good redirection on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.wait(1000);
		cy.visit(`${url}/onboarding/medical`);
		cy.wait(1000);
		window.localStorage.setItem('token', 'test');
	});

	it('Good redirection on buttons', () => {
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-input').click().type('Doctor');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-input').click().type('Allergie');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-formDiseases-input').click().type('Maladie');
		cy.get('#edgar-onboardingMedicalPage-formDiseases-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-formTreatments-input').click().type('Traitement');
		cy.get('#edgar-onboardingMedicalPage-formTreatments-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-next-button').click().url().should('eq', `${url}/dashboard`);
	});
});

describe('Working page - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.wait(1000);
		cy.visit(`${url}/onboarding/medical`);
		cy.wait(1000);
		window.localStorage.setItem('token', 'test');
	});

	it('No filled inputs', () => {
		cy.get('#edgar-onboardingMedicalPage-next-button').click();
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctorError-text').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctorError-text').should(
			'contain.text',
			'Ce champ est nécessaire',
		);
	});

	it('Only doctor name input filled', () => {
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-input').click().type('Doctor');
		cy.get('#edgar-onboardingMedicalPage-next-button').click();
		cy.get('#edgar-onboardingMedicalPage-confirmationModalAllergies-text').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalDiseases-text').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalTreatments-text').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-confirmationDrawerConfirm-button')
			.click()
			.url()
			.should('eq', `${url}/dashboard`);
	});

	it('Doctor name & Allergies input filled', () => {
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-input').click().type('Doctor');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-input').click().type('Allergie');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-next-button').click();
		cy.get('#edgar-onboardingMedicalPage-confirmationModalAllergies-text').should('not.exist');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalDiseases-text').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalTreatments-text').should('be.visible');
	});

	it('Doctor name & Allergies & Diseases input filled', () => {
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-input').click().type('Doctor');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-input').click().type('Allergie');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-formDiseases-input').click().type('Maladie');
		cy.get('#edgar-onboardingMedicalPage-formDiseases-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-next-button').click();
		cy.get('#edgar-onboardingMedicalPage-confirmationModalAllergies-text').should('not.exist');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalDiseases-text').should('not.exist');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalTreatments-text').should('be.visible');
	});

	it('Doctor name & Allergies & Treatments input filled', () => {
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-input').click().type('Doctor');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-input').click().type('Allergie');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-formTreatments-input').click().type('Traitement');
		cy.get('#edgar-onboardingMedicalPage-formTreatments-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-next-button').click();
		cy.get('#edgar-onboardingMedicalPage-confirmationModalAllergies-text').should('not.exist');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalDiseases-text').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalTreatments-text').should('not.exist');
	});

	it('Add allergies', () => {
		cy.get('#edgar-onboardingMedicalPage-formAllergies-input').click().type('Allergie');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-allergie').should('be.visible');
	});

	it('Remove allergies', () => {
		cy.get('#edgar-onboardingMedicalPage-formAllergies-input').click().type('Allergie');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-allergie').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-smallCard-allergie-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-allergie').should('not.exist');
	});

	it('Add diseases', () => {
		cy.get('#edgar-onboardingMedicalPage-formDiseases-input').click().type('Maladie');
		cy.get('#edgar-onboardingMedicalPage-formDiseases-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-maladie').should('be.visible');
	});

	it('Remove diseases', () => {
		cy.get('#edgar-onboardingMedicalPage-formDiseases-input').click().type('Maladie');
		cy.get('#edgar-onboardingMedicalPage-formDiseases-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-maladie').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-smallCard-maladie-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-maladie').should('not.exist');
	});

	it('Add treatments', () => {
		cy.get('#edgar-onboardingMedicalPage-formTreatments-input').click().type('Traitement');
		cy.get('#edgar-onboardingMedicalPage-formTreatments-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-traitement').should('be.visible');
	});

	it('Remove treatments', () => {
		cy.get('#edgar-onboardingMedicalPage-formTreatments-input').click().type('Traitement');
		cy.get('#edgar-onboardingMedicalPage-formTreatments-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-traitement').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-smallCard-traitement-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-traitement').should('not.exist');
	});
});
