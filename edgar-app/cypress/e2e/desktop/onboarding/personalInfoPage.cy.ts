import createPatientAccount from 'utils/createPatientAccount';

describe('Personal Info Page tests - Desktop', () => {
	let authToken: string;

	describe('Init test', async () => {
		it('Create an account', () => {
			createPatientAccount().then((response) => {
				authToken = response.authToken;
			});
		});
	});

	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.visit('/onboarding/personal').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-onboardingPersonalPage]').should('have.length', 6);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-onboardingPage]').should('have.length', 1);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-onboardingPersonalPage]').should('have.length', 8);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-onboardingPersonalPage]').should('have.length', 6);
			});
		});

		describe('Good content on elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-onboardingPersonalPage-next-button').should('contain.text', 'Confirmer');
				cy.get('#edgar-onboardingPersonalPage-sexMale-button').should('contain.text', 'Masculin');
				cy.get('#edgar-onboardingPersonalPage-sexFemale-button').should('contain.text', 'Féminin');
				cy.get('#edgar-onboardingPersonalPage-sexOther-button').should('contain.text', 'Autre');
				cy.get('#edgar-onboardingPersonalPage-hasAntecedentsYes-button').should('contain.text', 'Oui');
				cy.get('#edgar-onboardingPersonalPage-hasAntecedentsNo-button').should('contain.text', 'Non');
			});

			it('Good content for texts', () => {
				cy.get('#edgar-onboardingPage-EdgarCard-title-text').should(
					'contain.text',
					'J’ai besoin de vos informations personnelles afin de compléter votre espace patient',
				);
				cy.get('#edgar-onboardingPersonalPage-formFirstname-text').should('contain.text', 'Votre prénom');
				cy.get('#edgar-onboardingPersonalPage-formName-text').should('contain.text', 'Votre nom');
				cy.get('#edgar-onboardingPersonalPage-formBirthdate-text').should(
					'contain.text',
					'Votre date de naissance',
				);
				cy.get('#edgar-onboardingPersonalPage-formSex-text').should('contain.text', 'Votre sexe');
				cy.get('#edgar-onboardingPersonalPage-formSize-text').should('contain.text', 'Votre taille');
				cy.get('#edgar-onboardingPersonalPage-formWeight-text').should('contain.text', 'Votre poids');
				cy.get('#edgar-onboardingPersonalPage-formPrimaryDoctor-text').should(
					'contain.text',
					'Le nom de votre médecin traitant',
				);
				cy.get('#edgar-onboardingPersonalPage-formHasAntecedents-text').should(
					'contain.text',
					'Avez-vous des antécédents médicaux ou sujets de santé ?',
				);
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible buttons', () => {
				cy.get('#edgar-onboardingPersonalPage-next-button').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-sexMale-button').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-sexFemale-button').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-sexOther-button').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-hasAntecedentsYes-button').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-hasAntecedentsNo-button').should('be.visible');
			});

			it('Visible texts', () => {
				cy.get('#edgar-onboardingPage-EdgarCard-title-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formFirstname-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formName-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formBirthdate-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formSex-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formSize-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formWeight-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formPrimaryDoctor-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formHasAntecedents-text').should('be.visible');
			});
		});
	});

	describe('Working page', () => {
		describe('Error states', () => {
			beforeEach(() => {
				cy.window().then((win) => win.localStorage.setItem('token', authToken));
				cy.visit('/onboarding/personal').wait(1000);
				cy.viewport(1920, 1080);
			});

			it('No filled inputs', () => {
				cy.get('#edgar-onboardingPersonalPage-next-button').click();
				cy.get('#edgar-onboardingPersonalPage-formFirstnameError-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formFirstnameError-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
				cy.get('#edgar-onboardingPersonalPage-formNameError-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formNameError-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
				cy.get('#edgar-onboardingPersonalPage-formBirthdateErrorRequired-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formBirthdateErrorRequired-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
				cy.get('#edgar-onboardingPersonalPage-formSexError-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formSexError-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
				cy.get('#edgar-onboardingPersonalPage-formSizeErrorRequired-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formSizeErrorRequired-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
				cy.get('#edgar-onboardingPersonalPage-formWeightErrorRequired-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formWeightErrorRequired-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
				cy.get('#edgar-onboardingPersonalPage-formPrimaryDoctorErrorRequired-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formPrimaryDoctorErrorRequired-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
				cy.get('#edgar-onboardingPersonalPage-formHasAntecedentsErrorRequired-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formHasAntecedentsErrorRequired-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
			});

			it('Bad birthdate (too old)', () => {
				cy.get('#edgar-onboardingPersonalPage-formBirthdate-input').click().type('1800-01-01');
				cy.get('#edgar-onboardingPersonalPage-formBirthdateErrorMin-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formBirthdateErrorMin-text').should(
					'contain.text',
					'Renseigner une date de naissance après le 1 janvier 1900',
				);
			});

			it('Bad birthdate (too young)', () => {
				cy.get('#edgar-onboardingPersonalPage-formBirthdate-input').click().type('2500-01-01');
				cy.get('#edgar-onboardingPersonalPage-formBirthdateErrorMax-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formBirthdateErrorMax-text').should(
					'contain.text',
					"Renseigner une date de naissance avant celle d'aujourd'hui",
				);
			});

			it('Bad size (too small)', () => {
				cy.get('#edgar-onboardingPersonalPage-formSize-input').click().type('0.1');
				cy.get('#edgar-onboardingPersonalPage-formSizeErrorMin-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formSizeErrorMin-text').should(
					'contain.text',
					'Renseigner une taille supérieure à 0.5 mètres',
				);
			});

			it('Bad size (too big)', () => {
				cy.get('#edgar-onboardingPersonalPage-formSize-input').click().type('5');
				cy.get('#edgar-onboardingPersonalPage-formSizeErrorMax-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formSizeErrorMax-text').should(
					'contain.text',
					'Renseigner une taille inférieure à 3 mètres',
				);
			});

			it('Bad weight (too small)', () => {
				cy.get('#edgar-onboardingPersonalPage-formWeight-input').click().type('1');
				cy.get('#edgar-onboardingPersonalPage-formWeightErrorMin-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formWeightErrorMin-text').should(
					'contain.text',
					'Renseigner un poids supérieur à 2 kilogrammes',
				);
			});

			it('Bad weight (too big)', () => {
				cy.get('#edgar-onboardingPersonalPage-formWeight-input').click().type('400');
				cy.get('#edgar-onboardingPersonalPage-formWeightErrorMax-text').should('be.visible');
				cy.get('#edgar-onboardingPersonalPage-formWeightErrorMax-text').should(
					'contain.text',
					'Renseigner un poids inférieur à 300 kilogrammes',
				);
			});
		});

		describe('Working states', () => {
			beforeEach(() => {
				cy.window().then((win) => win.localStorage.setItem('token', authToken));
				cy.visit('/onboarding/personal').wait(1000);
				cy.viewport(1920, 1080);
			});

			it('Good redirection on buttons (has Antecedents)', () => {
				cy.get('#edgar-onboardingPersonalPage-formFirstname-input').click().type('Firstname');
				cy.get('#edgar-onboardingPersonalPage-formName-input').click().type('Name');
				cy.get('#edgar-onboardingPersonalPage-formBirthdate-input').click().type('2000-01-01');
				cy.get('#edgar-onboardingPersonalPage-sexMale-button').click();
				cy.get('#edgar-onboardingPersonalPage-formSize-input').click().type('1.6');
				cy.get('#edgar-onboardingPersonalPage-formWeight-input').click().type('50');
				cy.get('#edgar-onboardingPersonalPage-formPrimaryDoctor-input').click();
				cy.get('div[id^=edgar-onboardingPersonalPage-formPrimaryDoctor-element]').click();
				cy.get('#edgar-onboardingPersonalPage-hasAntecedentsYes-button').click();
				cy.get('#edgar-onboardingPersonalPage-next-button')
					.click()
					.wait(1000)
					.url()
					.should('eq', `${Cypress.env('url')}/onboarding/medical`);
			});

			it('Good redirection on buttons (has no Antecedents)', () => {
				cy.get('#edgar-onboardingPersonalPage-formFirstname-input').click().type('Firstname');
				cy.get('#edgar-onboardingPersonalPage-formName-input').click().type('Name');
				cy.get('#edgar-onboardingPersonalPage-formBirthdate-input').click().type('2000-01-01');
				cy.get('#edgar-onboardingPersonalPage-sexMale-button').click();
				cy.get('#edgar-onboardingPersonalPage-formSize-input').click().type('1.6');
				cy.get('#edgar-onboardingPersonalPage-formWeight-input').click().type('50');
				cy.get('#edgar-onboardingPersonalPage-formPrimaryDoctor-input').click();
				cy.get('div[id^=edgar-onboardingPersonalPage-formPrimaryDoctor-element]').click();
				cy.get('#edgar-onboardingPersonalPage-hasAntecedentsNo-button').click();
				cy.get('#edgar-onboardingPersonalPage-next-button')
					.click()
					.wait(1000)
					.url()
					.should('eq', `${Cypress.env('url')}/dashboard`);
			});
		});
	});

	describe('Clean up - Desktop', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
