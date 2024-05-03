import createPatientAccount from 'utils/createPatientAccount';

describe('Medical Info Page tests - Desktop', () => {
	let authToken: string;

	describe('Init test', async () => {
		it('Create an account', async () => {
			const response = await createPatientAccount();
			authToken = response.authToken;
		});
	});

	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.window().then((win) => {
				win.localStorage.setItem('token', authToken);
				win.localStorage.setItem(
					'onboardingInfos',
					'{"firstname":"test","name":"test","birthdate":1712016000000,"sex":"MALE","height":1.5,"weight":4,"primaryDoctorId":"1","hasMedicalAntecedents":true}',
				);
			});
			cy.visit('/onboarding/medical').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-onboardingMedicalPage]').should('have.length', 1);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-onboardingPage]').should('have.length', 1);
				cy.get('p[id^=edgar-onboardingMedicalPage]').should('have.length', 1);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-onboardingMedicalPage]').should('have.length', 1);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-onboardingMedicalPage]').should('have.length', 1);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-onboardingMedicalPage-next-button').should('contain.text', 'Valider');
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for Edgar card', () => {
				cy.get('#edgar-onboardingPage-EdgarCard-title-text').should(
					'contain.text',
					'J’ai besoin de vos informations médicales afin de compléter votre espace patient',
				);
			});

			it('Good content for Health issues label', () => {
				cy.get('#edgar-onboardingMedicalPage-formHealthIssues-text').should(
					'contain.text',
					'Vos antécédents médicaux et sujets de santé',
				);
			});

			it('Good content for Added Health issues label', () => {
				cy.get('#edgar-onboardingMedicalPage-formHealthIssuesAdded-text').should(
					'contain.text',
					'Vos antécédénts médicaux et sujets de santé renseignés',
				);
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible buttons', () => {
				cy.get('#edgar-onboardingMedicalPage-next-button').should('be.visible');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible Edgar card text', () => {
				cy.get('#edgar-onboardingPage-EdgarCard-title-text').should('be.visible');
			});

			it('Visible Health issues label', () => {
				cy.get('#edgar-onboardingMedicalPage-formHealthIssues-text').should('be.visible');
			});

			it('Visible Added Health issues label', () => {
				cy.get('#edgar-onboardingMedicalPage-formHealthIssuesAdded-text').should('be.visible');
			});
		});

		describe('Good UI when adding Health Issue', { testIsolation: false }, () => {
			describe('Good contents', () => {
				beforeEach(() => {
					cy.viewport(1920, 1080);
					cy.get('body').then(($body) => {
						if ($body.find('#edgar-onboardingMedicalPage-addHealthIssue-cancel-button').length)
							cy.get('#edgar-onboardingMedicalPage-addHealthIssue-cancel-button').click();
					});
					cy.get('#edgar-onboardingMedicalPage-formHealthIssues-input').click();
				});

				it('Good health issue name label', () => {
					cy.get('#edgar-onboardingMedicalPage-medicineName-text').should(
						'contain.text',
						'Nom de votre sujet de santé',
					);
				});

				it('Good health issue still relevant option label', () => {
					cy.get('#edgar-onboardingMedicalPage-medicineStillRelevant-text').should(
						'contain.text',
						'Votre sujet de santé est-il toujours en cours ?',
					);
				});

				it('Good health issue still relevant Yes option button', () => {
					cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantYes-button').should(
						'contain.text',
						'Oui',
					);
				});

				it('Good health issue still relevant No option button', () => {
					cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantNo-button').should('contain.text', 'No');
				});
			});

			describe('Visible contents', () => {
				beforeEach(() => {
					cy.viewport(1920, 1080);

					cy.get('body').then(($body) => {
						if ($body.find('#edgar-onboardingMedicalPage-addHealthIssue-cancel-button').length)
							cy.get('#edgar-onboardingMedicalPage-addHealthIssue-cancel-button').click();
					});
					cy.get('#edgar-onboardingMedicalPage-formHealthIssues-input').click();
				});

				it('Visible health issue name label', () => {
					cy.get('#edgar-onboardingMedicalPage-medicineName-text').should('be.visible');
				});

				it('Visible health issue name input', () => {
					cy.get('#edgar-onboardingMedicalPage-medicineName-input').should('be.visible');
				});

				it('Visible health issue still relevant option label', () => {
					cy.get('#edgar-onboardingMedicalPage-medicineStillRelevant-text').should('be.visible');
				});

				it('Visible health issue still relevant Yes option button', () => {
					cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantYes-button').should('be.visible');
				});

				it('Visible health issue still relevant No option button', () => {
					cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantNo-button').should('be.visible');
				});

				it('Visible medicine selector', () => {
					cy.get('#edgar-onboardingMedicalPage-medicine-selector').should('be.visible');
				});
			});
		});
	});

	describe('Working page', () => {
		describe('Error states', () => {
			beforeEach(() => {
				cy.window().then((win) => {
					win.localStorage.setItem(
						'onboardingInfos',
						'{"firstname":"test","name":"test","birthdate":1712016000000,"sex":"MALE","height":1.5,"weight":4,"primaryDoctorId":"1","hasMedicalAntecedents":true}',
					);
					win.localStorage.setItem('token', authToken);
				});
				cy.visit('/onboarding/medical').wait(1000);
				cy.viewport(1920, 1080);
			});

			it('No filled inputs', () => {
				cy.get('#edgar-onboardingMedicalPage-next-button').click();
				cy.get('#edgar-onboardingMedicalPage-formHealthIssuesErrorRequired-text').should('be.visible');
				cy.get('#edgar-onboardingMedicalPage-formHealthIssuesErrorRequired-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
			});

			it('No filled inputs when adding health issue', () => {
				cy.get('#edgar-onboardingMedicalPage-formHealthIssues-input').click();
				cy.get('#edgar-onboardingMedicalPage-addHealthIssue-validate-button').click();
				cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantError-text').should('be.visible');
				cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantError-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
				cy.get('#edgar-onboardingMedicalPage-medicineNameError-text').should('be.visible');
				cy.get('#edgar-onboardingMedicalPage-medicineNameError-text').should(
					'contain.text',
					'Ce champ est nécessaire',
				);
			});
		});

		describe('Working states', () => {
			beforeEach(() => {
				cy.window().then((win) => {
					win.localStorage.setItem(
						'onboardingInfos',
						'{"firstname":"test","name":"test","birthdate":1712016000000,"sex":"MALE","height":1.5,"weight":4,"primaryDoctorId":"1","hasMedicalAntecedents":true}',
					);
					win.localStorage.setItem('token', authToken);
				});
				cy.visit('/onboarding/medical').wait(1000);
				cy.viewport(1920, 1080);
				cy.get('#edgar-onboardingMedicalPage-formHealthIssues-input').click();
			});

			it('Add a health issue without treatment', () => {
				cy.get('#edgar-onboardingMedicalPage-medicineName-input').click().type('Allergie');
				cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantYes-button').click();
				cy.get('#edgar-onboardingMedicalPage-addHealthIssue-validate-button').click();
				cy.get('div[id^=edgar-onboardingMedicalPage-healthIssueCard]').should('have.length', 1);
				cy.get('#edgar-onboardingMedicalPage-medicineName-input').should('not.exist');
			});

			it('Remove an added health issue', () => {
				cy.get('#edgar-onboardingMedicalPage-medicineName-input').click().type('Allergie');
				cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantYes-button').click();
				cy.get('#edgar-onboardingMedicalPage-addHealthIssue-validate-button').click();
				cy.get('svg[id^=edgar-onboardingMedicalPage-healthIssueCard-close]').click();
				cy.get('div[id^=edgar-onboardingMedicalPage-healthIssueCard]').should('have.length', 0);
			});

			it('Add a health issue with a treatment', () => {
				cy.get('#edgar-onboardingMedicalPage-medicineName-input').click().type('Allergie');
				cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantYes-button').click();
				cy.get('#edgar-onboardingMedicalPage-medicine-selector').click();
				cy.get('p[id^=edgar-onboardingMedicalPage-medicine-option]').first().click();
				cy.get('div[id^=edgar-onboardingMedicalPage-medicineCard-]').should('have.length', 1);
				cy.get('div[id^=edgar-onboardingMedicalPage-medicineCardPeriod-Matin]').click();
				cy.get('div[id^=edgar-onboardingMedicalPage-medicineCardDay-J]').click();
				cy.get('#edgar-onboardingMedicalPage-addHealthIssue-validate-button').click();
				cy.get('div[id^=edgar-onboardingMedicalPage-healthIssueCard]').should('have.length', 1);
				cy.get('#edgar-onboardingMedicalPage-medicineName-input').should('not.exist');
			});

			it('Add a health issue with a treatment but not filled', () => {
				cy.get('#edgar-onboardingMedicalPage-medicineName-input').click().type('Allergie');
				cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantYes-button').click();
				cy.get('#edgar-onboardingMedicalPage-medicine-selector').click();
				cy.get('p[id^=edgar-onboardingMedicalPage-medicine-option]').first().click();
				cy.get('div[id^=edgar-onboardingMedicalPage-medicineCard-]').should('have.length', 1);
				cy.get('#edgar-onboardingMedicalPage-addHealthIssue-validate-button').click();
				cy.get('#edgar-onboardingMedicalPage-medicineName-input').should('exist');
			});

			it('Display information of an added health issue with a treatment', () => {
				cy.get('#edgar-onboardingMedicalPage-medicineName-input').click().type('Allergie');
				cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantYes-button').click();
				cy.get('#edgar-onboardingMedicalPage-medicine-selector').click();
				cy.get('p[id^=edgar-onboardingMedicalPage-medicine-option]').first().click();
				cy.get('div[id^=edgar-onboardingMedicalPage-medicineCardPeriod-Matin]').click();
				cy.get('div[id^=edgar-onboardingMedicalPage-medicineCardDay-J]').click();
				cy.get('#edgar-onboardingMedicalPage-addHealthIssue-validate-button').click();
				cy.get('svg[id^=edgar-onboardingMedicalPage-healthIssueCard-moreInfo]').click();
				cy.get('#edgar-onboardingMedicalPage-healthIssueDrawer-stillRelevant-label')
					.should('be.visible')
					.should('contain.text', 'Votre sujet de santé est-il toujours en cours ?');
				cy.get('#edgar-onboardingMedicalPage-healthIssueDrawer-medicinesName-label')
					.should('be.visible')
					.should('contain.text', 'Le nom de vos médicaments');
				cy.get('#edgar-onboardingMedicalPage-healthIssueDrawer-stillRelevantYes-button')
					.should('be.visible')
					.should('contain.text', 'Oui');
				cy.get('#edgar-onboardingMedicalPage-healthIssueDrawer-stillRelevantNo-button')
					.should('be.visible')
					.should('contain.text', 'Non');
			});

			it('Validate the onboarding', () => {
				cy.get('#edgar-onboardingMedicalPage-medicineName-input').click().type('Allergie');
				cy.get('#edgar-onboardingMedicalPage-medicineStillRelevantYes-button').click();
				cy.get('#edgar-onboardingMedicalPage-medicine-selector').click();
				cy.get('p[id^=edgar-onboardingMedicalPage-medicine-option]').first().click();
				cy.get('div[id^=edgar-onboardingMedicalPage-medicineCardPeriod-Matin]').click();
				cy.get('div[id^=edgar-onboardingMedicalPage-medicineCardDay-J]').click();
				cy.get('#edgar-onboardingMedicalPage-addHealthIssue-validate-button').click();
				cy.get('#edgar-onboardingMedicalPage-next-button')
					.click()
					.wait(1000)
					.url()
					.should('eq', `${Cypress.env('url')}/dashboard`);
			});
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});
