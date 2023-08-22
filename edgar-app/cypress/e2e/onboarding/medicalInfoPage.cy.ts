const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
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
		cy.get('img').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-onboardingMedicalPage]').should('have.length', 4);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/onboarding/medical`);
		window.localStorage.setItem('token', 'test');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-onboardingMedicalPage-next-button').should('contain.text', 'Valider');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-onboardingPage-EdgarCard-title-text').should(
			'contain.text',
			'J’ai besoin de vos informations médicales afin de remplir votre espace patient',
		);
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-text').should('contain.text', 'Le nom de votre médecin traitant');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-text').should('contain.text', 'Vos allergies');
		cy.get('#edgar-onboardingMedicalPage-formDiseases-text').should('contain.text', 'Vos maladies');
		cy.get('#edgar-onboardingMedicalPage-formTreatments-text').should('contain.text', 'Vos traitements');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/onboarding/medical`);
		window.localStorage.setItem('token', 'test');
	});

	it('Visible buttons', () => {
		cy.get('#edgar-onboardingMedicalPage-next-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-onboardingPage-EdgarCard-title-text').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-text').should("be.visible");
		cy.get('#edgar-onboardingMedicalPage-formAllergies-text').should("be.visible");
		cy.get('#edgar-onboardingMedicalPage-formDiseases-text').should("be.visible");
		cy.get('#edgar-onboardingMedicalPage-formTreatments-text').should("be.visible");
	});
});

describe('Good redirection on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
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

describe('Working page - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
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
		cy.get('#edgar-onboardingMedicalPage-confirmationModalValidate-button').click().url().should('eq', `${url}/dashboard`);
	})

	it('Doctor name & Allergies input filled', () => {
		cy.get('#edgar-onboardingMedicalPage-formPrimaryDoctor-input').click().type('Doctor');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-input').click().type('Allergie');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-next-button').click();
		cy.get('#edgar-onboardingMedicalPage-confirmationModalAllergies-text').should('not.exist');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalDiseases-text').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-confirmationModalTreatments-text').should('be.visible');
	})

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
	})

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
	})

	it('Add allergies', () => {
		cy.get('#edgar-onboardingMedicalPage-formAllergies-input').click().type('Allergie');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-allergie').should('be.visible');
	})

	it('Remove allergies', () => {
		cy.get('#edgar-onboardingMedicalPage-formAllergies-input').click().type('Allergie');
		cy.get('#edgar-onboardingMedicalPage-formAllergies-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-allergie').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-smallCard-allergie-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-allergie').should('not.exist');
	})

	it('Add diseases', () => {
		cy.get('#edgar-onboardingMedicalPage-formDiseases-input').click().type('Maladie');
		cy.get('#edgar-onboardingMedicalPage-formDiseases-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-maladie').should('be.visible');
	})

	it('Remove diseases', () => {
		cy.get('#edgar-onboardingMedicalPage-formDiseases-input').click().type('Maladie');
		cy.get('#edgar-onboardingMedicalPage-formDiseases-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-maladie').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-smallCard-maladie-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-maladie').should('not.exist');
	})

	it('Add treatments', () => {
		cy.get('#edgar-onboardingMedicalPage-formTreatments-input').click().type('Traitement');
		cy.get('#edgar-onboardingMedicalPage-formTreatments-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-traitement').should('be.visible');
	})

	it('Remove treatments', () => {
		cy.get('#edgar-onboardingMedicalPage-formTreatments-input').click().type('Traitement');
		cy.get('#edgar-onboardingMedicalPage-formTreatments-addButton-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-traitement').should('be.visible');
		cy.get('#edgar-onboardingMedicalPage-smallCard-traitement-icon').click();
		cy.get('#edgar-onboardingMedicalPage-smallCard-traitement').should('not.exist');
	})
});

// ================ MOBILE =================

// describe('Good number of elements - Mobile', () => {
// 	beforeEach(() => {
// 		cy.viewport(390, 844);
// 		cy.visit(`${url}/onboarding/medical`);
// 		cy.wait(1000);
// 		window.localStorage.setItem('token', 'test');
// 	});
//
// 	it('Good number of buttons', () => {
// 		cy.get('button[id^=edgar-onboardingMedicalPage]').should('have.length', 4);
// 	});
//
// 	it('Good number of texts', () => {
// 		cy.get('p[id^=edgar-onboardingPage]').should('have.length', 1);
// 	});
//
// 	it('Good number of labels', () => {
// 		cy.get('label[id^=edgar-onboardingMedicalPage]').should('have.length', 6);
// 	});
//
// 	it('Good number of images', () => {
// 		cy.get('img').should('have.length', 0);
// 	});
//
// 	it('Good number of inputs', () => {
// 		cy.get('input[id^=edgar-onboardingMedicalPage]').should('have.length', 5);
// 	});
// });
//
// describe('Good content on elements - Mobile', () => {
// 	beforeEach(() => {
// 		cy.viewport(390, 844);
// 		cy.visit(`${url}/onboarding/medical`);
// 		cy.wait(1000);
// 		window.localStorage.setItem('token', 'test');
// 	});
//
// 	it('Good content for buttons', () => {
// 		cy.get('#edgar-onboardingMedicalPage-next-button').should('contain.text', 'Continuer');
// 		cy.get('#edgar-onboardingMedicalPage-sexMale-button').should('contain.text', 'Masculin');
// 		cy.get('#edgar-onboardingMedicalPage-sexFemale-button').should('contain.text', 'Féminin');
// 		cy.get('#edgar-onboardingMedicalPage-sexOther-button').should('contain.text', 'Autre');
// 	});
//
// 	it('Good content for texts', () => {
// 		cy.get('#edgar-onboardingPage-EdgarCard-title-text').should(
// 			'contain.text',
// 			'J’ai besoin de vos informations personnelles afin de remplir votre espace patient',
// 		);
// 		cy.get('#edgar-onboardingMedicalPage-formFirstname-text').should('contain.text', 'Votre prénom');
// 		cy.get('#edgar-onboardingMedicalPage-formName-text').should('contain.text', 'Votre nom');
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdate-text').should('contain.text', 'Votre date de naissance');
// 		cy.get('#edgar-onboardingMedicalPage-formSex-text').should('contain.text', 'Votre sexe');
// 		cy.get('#edgar-onboardingMedicalPage-formSize-text').should('contain.text', 'Votre taille');
// 		cy.get('#edgar-onboardingMedicalPage-formWeight-text').should('contain.text', 'Votre poids');
// 	});
// });
//
// describe('Visible elements - Mobile', () => {
// 	beforeEach(() => {
// 		cy.viewport(390, 844);
// 		cy.visit(`${url}/onboarding/medical`);
// 		cy.wait(1000);
// 		window.localStorage.setItem('token', 'test');
// 	});
//
// 	it('Visible buttons', () => {
// 		cy.get('#edgar-onboardingMedicalPage-next-button').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-sexMale-button').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-sexFemale-button').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-sexOther-button').should('be.visible');
// 	});
//
// 	it('Visible texts', () => {
// 		cy.get('#edgar-onboardingPage-EdgarCard-title-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formFirstname-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formName-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdate-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formSex-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formSize-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formWeight-text').should('be.visible');
// 	});
// });
//
// describe('Good redirection on elements - Mobile', () => {
// 	beforeEach(() => {
// 		cy.viewport(390, 844);
// 		cy.visit(`${url}/onboarding/medical`);
// 		cy.wait(1000);
// 		window.localStorage.setItem('token', 'test');
// 	});
//
// 	it('Good redirection on buttons', () => {
// 		cy.get('#edgar-onboardingMedicalPage-formFirstname-input').click().type('Firstname');
// 		cy.get('#edgar-onboardingMedicalPage-formName-input').click().type('Name');
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdate-input').click().type('2000-01-01');
// 		cy.get('#edgar-onboardingMedicalPage-sexMale-button').click();
// 		cy.get('#edgar-onboardingMedicalPage-formSize-input').click().type('1.6');
// 		cy.get('#edgar-onboardingMedicalPage-formWeight-input').click().type('50');
// 		cy.get('#edgar-onboardingMedicalPage-next-button').click().url().should('eq', `${url}/onboarding/medical`);
// 	});
// });
//
// describe('Working page - Mobile', () => {
// 	beforeEach(() => {
// 		cy.viewport(390, 844);
// 		cy.visit(`${url}/onboarding/medical`);
// 		cy.wait(1000);
// 		window.localStorage.setItem('token', 'test');
// 	});
//
// 	it('No filled inputs', () => {
// 		cy.get('#edgar-onboardingMedicalPage-next-button').click();
// 		cy.get('#edgar-onboardingMedicalPage-formFirstnameError-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formFirstnameError-text').should(
// 			'contain.text',
// 			'Ce champ est nécessaire',
// 		);
// 		cy.get('#edgar-onboardingMedicalPage-formNameError-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formNameError-text').should('contain.text', 'Ce champ est nécessaire');
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdateErrorRequired-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdateErrorRequired-text').should(
// 			'contain.text',
// 			'Ce champ est nécessaire',
// 		);
// 		cy.get('#edgar-onboardingMedicalPage-formSexError-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formSexError-text').should('contain.text', 'Ce champ est nécessaire');
// 		cy.get('#edgar-onboardingMedicalPage-formSizeErrorRequired-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formSizeErrorRequired-text').should(
// 			'contain.text',
// 			'Ce champ est nécessaire',
// 		);
// 		cy.get('#edgar-onboardingMedicalPage-formWeightErrorRequired-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formWeightErrorRequired-text').should(
// 			'contain.text',
// 			'Ce champ est nécessaire',
// 		);
// 	});
//
// 	it('Bad birthdate (too old)', () => {
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdate-input').click().type('1800-01-01');
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdateErrorMin-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdateErrorMin-text').should(
// 			'contain.text',
// 			'Renseigner une date de naissance après le 1 janvier 1900',
// 		);
// 	});
//
// 	it('Bad birthdate (too young)', () => {
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdate-input').click().type('2500-01-01');
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdateErrorMax-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formBirthdateErrorMax-text').should(
// 			'contain.text',
// 			"Renseigner une date de naissance avant celle d'aujourd'hui",
// 		);
// 	});
//
// 	it('Bad size (too small)', () => {
// 		cy.get('#edgar-onboardingMedicalPage-formSize-input').click().type('0.1');
// 		cy.get('#edgar-onboardingMedicalPage-formSizeErrorMin-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formSizeErrorMin-text').should(
// 			'contain.text',
// 			'Renseigner une taille supérieure à 0.5 mètres',
// 		);
// 	});
//
// 	it('Bad size (too big)', () => {
// 		cy.get('#edgar-onboardingMedicalPage-formSize-input').click().type('5');
// 		cy.get('#edgar-onboardingMedicalPage-formSizeErrorMax-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formSizeErrorMax-text').should(
// 			'contain.text',
// 			'Renseigner une taille inférieure à 3 mètres',
// 		);
// 	});
//
// 	it('Bad weight (too small)', () => {
// 		cy.get('#edgar-onboardingMedicalPage-formWeight-input').click().type('1');
// 		cy.get('#edgar-onboardingMedicalPage-formWeightErrorMin-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formWeightErrorMin-text').should(
// 			'contain.text',
// 			'Renseigner un poids supérieur à 2 kilogrammes',
// 		);
// 	});
//
// 	it('Bad weight (too big)', () => {
// 		cy.get('#edgar-onboardingMedicalPage-formWeight-input').click().type('400');
// 		cy.get('#edgar-onboardingMedicalPage-formWeightErrorMax-text').should('be.visible');
// 		cy.get('#edgar-onboardingMedicalPage-formWeightErrorMax-text').should(
// 			'contain.text',
// 			'Renseigner un poids inférieur à 300 kilogrammes',
// 		);
// 	});
// });
