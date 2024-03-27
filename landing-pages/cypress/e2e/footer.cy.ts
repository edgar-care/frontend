describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-footer]').should('have.length', 1);
	});
	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-footer]').should('have.length', 1);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-footer]').should('have.length', 17);
	});
	it('Good number of svg', () => {
		cy.get('svg[id^=edgar-footer]').should('have.length', 4);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-footer-newsletterSubscription-button').should('contain.text', "M'abonner");
	});

	it('Good content for texts (newsletter)', () => {
		cy.get('#edgar-footer-newsletterTitle-text').should('contain.text', 'SUIVEZ NOS ACTUALITÉS !!');
		cy.get('#edgar-footer-newsletterSubtitle-text').should(
			'contain.text',
			"Inscrivez-vous et profitez d'un accès en exclusivité lors de l'ouverture de notre beta",
		);
		cy.get('#edgar-footer-newsletterPolicies-text').should(
			'contain.text',
			'En vous abonnant, vous acceptez notre politique de confidentialité',
		);
	});

	it('Good content for texts (health)', () => {
		cy.get('#edgar-footer-healthTitle-text').should('contain.text', 'VOTRE SANTÉ');
		cy.get('#edgar-footer-healthAppointment-text').should('contain.text', 'Prendre un rendez-vous');
		cy.get('#edgar-footer-healthPatientArea-text').should('contain.text', 'Accédez à mon espace patient');
		cy.get('#edgar-footer-healthFindDoctor-text').should('contain.text', 'Trouvez un médecin');
		cy.get('#edgar-footer-healthNationalDoctorOrder-text').should('contain.text', 'Ordre National des Médecins');
	});

	it('Good content for texts (project)', () => {
		cy.get('#edgar-footer-projectTitle-text').should('contain.text', 'LE PROJET');
		cy.get('#edgar-footer-projectOffer-text').should('contain.text', 'Ce que nous offrons');
		cy.get('#edgar-footer-projectApplication-text').should('contain.text', 'Notre application');
		cy.get('#edgar-footer-projectJoinUs-text').should('contain.text', 'Nous rejoindre');
	});

	it('Good content for texts (CS)', () => {
		cy.get('#edgar-footer-CSTitle-text').should('contain.text', 'SERVICE CLIENT');
		cy.get('#edgar-footer-CSContactUs-text').should('contain.text', 'Contactez-nous');
		cy.get('#edgar-footer-CSPolicies-text').should('contain.text', 'Politique de confidentialité - bientôt');
		cy.get('#edgar-footer-CSLegals-text').should('contain.text', 'Mentions légales - bientôt');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-footer-madeIn-text').should('contain.text', 'Fait à Lyon & Nancy avec');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	it('Visible buttons', () => {
		cy.get('#edgar-footer-newsletterSubscription-button').should('be.visible');
	});

	it('Visible texts (newsletter)', () => {
		cy.get('#edgar-footer-newsletterTitle-text').should('be.visible');
		cy.get('#edgar-footer-newsletterSubtitle-text').should('be.visible');
		cy.get('#edgar-footer-newsletterPolicies-text').should('be.visible');
	});

	it('Visible texts (health)', () => {
		cy.get('#edgar-footer-healthTitle-text').should('be.visible');
		cy.get('#edgar-footer-healthAppointment-text').should('be.visible');
		cy.get('#edgar-footer-healthPatientArea-text').should('be.visible');
		cy.get('#edgar-footer-healthFindDoctor-text').should('be.visible');
		cy.get('#edgar-footer-healthNationalDoctorOrder-text').should('be.visible');
	});

	it('Visible texts (project)', () => {
		cy.get('#edgar-footer-projectTitle-text').should('be.visible');
		cy.get('#edgar-footer-projectOffer-text').should('be.visible');
		cy.get('#edgar-footer-projectApplication-text').should('be.visible');
		cy.get('#edgar-footer-projectJoinUs-text').should('be.visible');
	});

	it('Visible texts (CS)', () => {
		cy.get('#edgar-footer-CSTitle-text').should('be.visible');
		cy.get('#edgar-footer-CSContactUs-text').should('be.visible');
		cy.get('#edgar-footer-CSPolicies-text').should('be.visible');
		cy.get('#edgar-footer-CSLegals-text').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-footer-madeIn-text').should('be.visible');
	});

	it('Visible inputs', () => {
		cy.get('#edgar-footer-newsletterEmail-input').should('be.visible');
	});

	it('Visible svg', () => {
		cy.get('#edgar-footer-linkedInIcon-svg').should('be.visible');
		cy.get('#edgar-footer-mailIcon-svg').should('be.visible');
		cy.get('#edgar-footer-instagramIcon-svg').should('be.visible');
		cy.get('#edgar-footer-heartIcon-svg').should('be.visible');
	});
});

describe('Good redirection on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
		cy.wait(1000);
	});

	it('Good redirection on texts (health)', () => {
		// cy.get('#edgar-footer-healthAppointment-text').click().url().should('eq', `${appUrl}/simulation`);
		// cy.visit('/');
		// cy.get('#edgar-footer-healthPatientArea-text').click().url().should('eq', `${appUrl}/connection/login`);
		// cy.visit('/');
		cy.get('#edgar-footer-healthFindDoctor-text')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/doctor`);
		cy.visit('/');
	});

	it('Good redirection on texts (project)', () => {
		cy.get('#edgar-footer-projectOffer-text')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/project`);
		cy.visit('/');
		cy.wait(1000);
		cy.get('#edgar-footer-projectApplication-text')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/application`);
		cy.visit('/');
		cy.wait(1000);
		cy.get('#edgar-footer-projectJoinUs-text')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/contact`);
	});

	it('Good redirection on texts (CS)', () => {
		cy.get('#edgar-footer-CSContactUs-text')
			.click()
			.wait(1000)
			.url()
			.should('eq', `${Cypress.env('url')}/contact#form`);
		cy.visit('/');
		// cy.get('#edgar-footer-CSPolicies-text').click().url().should('eq', `${Cypress.env('url')}/`);
		// cy.visit('/');
		// cy.get('#edgar-footer-CSLegals-text').click().url().should('eq', `${Cypress.env('url')}/`);
	});

	it('Good redirection on icons', () => {
		cy.get('#edgar-footer-linkedInIcon-svg').click().url().should('not.eq', '/');
		// cy.visit('/');
		// cy.get('#edgar-footer-instagramIcon-svg').click().url().should('eq', "");
	});
});

describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/');
	});

	it('Good number of buttons', () => {
		cy.visit('/');
		cy.get('button[id^=edgar-footer]').should('have.length', 1);
	});
	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-footer]').should('have.length', 1);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-footer]').should('have.length', 17);
	});
	it('Good number of svg', () => {
		cy.get('svg[id^=edgar-footer]').should('have.length', 4);
	});
});

describe('Good content on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-footer-newsletterSubscription-button').should('contain.text', "M'abonner");
	});

	it('Good content for texts (newsletter)', () => {
		cy.get('#edgar-footer-newsletterTitle-text').should('contain.text', 'SUIVEZ NOS ACTUALITÉS !!');
		cy.get('#edgar-footer-newsletterSubtitle-text').should(
			'contain.text',
			"Inscrivez-vous et profitez d'un accès en exclusivité lors de l'ouverture de notre beta",
		);
		cy.get('#edgar-footer-newsletterPolicies-text').should(
			'contain.text',
			'En vous abonnant, vous acceptez notre politique de confidentialité',
		);
	});

	it('Good content for texts (health)', () => {
		cy.get('#edgar-footer-healthTitle-text').should('contain.text', 'VOTRE SANTÉ');
		cy.get('#edgar-footer-healthAppointment-text').should('contain.text', 'Prendre un rendez-vous');
		cy.get('#edgar-footer-healthPatientArea-text').should('contain.text', 'Accédez à mon espace patient');
		cy.get('#edgar-footer-healthFindDoctor-text').should('contain.text', 'Trouvez un médecin');
		cy.get('#edgar-footer-healthNationalDoctorOrder-text').should('contain.text', 'Ordre National des Médecins');
	});

	it('Good content for texts (project)', () => {
		cy.get('#edgar-footer-projectTitle-text').should('contain.text', 'LE PROJET');
		cy.get('#edgar-footer-projectOffer-text').should('contain.text', 'Ce que nous offrons');
		cy.get('#edgar-footer-projectApplication-text').should('contain.text', 'Notre application');
		cy.get('#edgar-footer-projectJoinUs-text').should('contain.text', 'Nous rejoindre');
	});

	it('Good content for texts (CS)', () => {
		cy.get('#edgar-footer-CSTitle-text').should('contain.text', 'SERVICE CLIENT');
		cy.get('#edgar-footer-CSContactUs-text').should('contain.text', 'Contactez-nous');
		cy.get('#edgar-footer-CSPolicies-text').should('contain.text', 'Politique de confidentialité - bientôt');
		cy.get('#edgar-footer-CSLegals-text').should('contain.text', 'Mentions légales - bientôt');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-footer-madeIn-text').should('contain.text', 'Fait à Lyon & Nancy avec');
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/');
	});

	it('Visible buttons', () => {
		cy.get('#edgar-footer-newsletterSubscription-button').should('be.visible');
	});

	it('Visible texts (newsletter)', () => {
		cy.get('#edgar-footer-newsletterTitle-text').should('be.visible');
		cy.get('#edgar-footer-newsletterSubtitle-text').should('be.visible');
		cy.get('#edgar-footer-newsletterPolicies-text').should('be.visible');
	});

	it('Visible texts (health)', () => {
		cy.get('#edgar-footer-healthTitle-text').should('be.visible');
		cy.get('#edgar-footer-healthAppointment-text').should('be.visible');
		cy.get('#edgar-footer-healthPatientArea-text').should('be.visible');
		cy.get('#edgar-footer-healthFindDoctor-text').should('be.visible');
		cy.get('#edgar-footer-healthNationalDoctorOrder-text').should('be.visible');
	});

	it('Visible texts (project)', () => {
		cy.get('#edgar-footer-projectTitle-text').should('be.visible');
		cy.get('#edgar-footer-projectOffer-text').should('be.visible');
		cy.get('#edgar-footer-projectApplication-text').should('be.visible');
		cy.get('#edgar-footer-projectJoinUs-text').should('be.visible');
	});

	it('Visible texts (CS)', () => {
		cy.get('#edgar-footer-CSTitle-text').should('be.visible');
		cy.get('#edgar-footer-CSContactUs-text').should('be.visible');
		cy.get('#edgar-footer-CSPolicies-text').should('be.visible');
		cy.get('#edgar-footer-CSLegals-text').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-footer-madeIn-text').should('be.visible');
	});

	it('Visible inputs', () => {
		cy.get('#edgar-footer-newsletterEmail-input').should('be.visible');
	});

	it('Visible svg', () => {
		cy.get('#edgar-footer-linkedInIcon-svg').should('be.visible');
		cy.get('#edgar-footer-mailIcon-svg').should('be.visible');
		cy.get('#edgar-footer-instagramIcon-svg').should('be.visible');
		cy.get('#edgar-footer-heartIcon-svg').should('be.visible');
	});
});

describe('Good redirection on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/');
	});

	it('Good redirection on texts (health)', () => {
		// cy.get('#edgar-footer-healthAppointment-text').click().url().should('eq', `${appUrl}/simulation`);
		// cy.visit('/');
		// cy.get('#edgar-footer-healthPatientArea-text').click().url().should('eq', `${appUrl}/connection/login`);
		// cy.visit('/');
		cy.get('#edgar-footer-healthFindDoctor-text')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/doctor`);
		cy.visit('/');
	});

	it('Good redirection on texts (project)', () => {
		cy.get('#edgar-footer-projectOffer-text')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/project`);
		cy.visit('/');
		cy.get('#edgar-footer-projectApplication-text')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/application`);
		cy.visit('/');
		cy.get('#edgar-footer-projectJoinUs-text')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/contact`);
	});

	it('Good redirection on texts (CS)', () => {
		cy.get('#edgar-footer-CSContactUs-text')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/contact#form`);
		cy.visit('/');
		// cy.get('#edgar-footer-CSPolicies-text').click().url().should('eq', `${Cypress.env('url')}/`);
		// cy.visit('/');
		// cy.get('#edgar-footer-CSLegals-text').click().url().should('eq', `${Cypress.env('url')}/`);
	});

	it('Good redirection on icons', () => {
		cy.get('#edgar-footer-linkedInIcon-svg').click().url().should('not.eq', '/');
		// cy.visit('/');
		// cy.get('#edgar-footer-instagramIcon-svg').click().url().should('eq', "");
	});
});
