describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/contact');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-contactPage]').should('have.length', 3);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-contactPage]').should('have.length', 8);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-contactPage]').should('have.length', 2);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/contact');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-contactPage-linkedIn-button').should('contain.text', 'Direction LinkedIn');
		cy.get('#edgar-contactPage-newsletterSubscription-button').should('contain.text', "M'abonner");
		cy.get('#edgar-contactPage-formSubmit-button').should('contain.text', 'Envoyer mon message');
	});

	it('Good content for LinkedIn title', () => {
		cy.get('#edgar-contactPage-linkedInTitle-text').should('contain.text', 'edgar sur les réseaux sociaux');
	});

	it('Good content for LinkedIn subtitle', () => {
		cy.get('#edgar-contactPage-linkedInSubtitle-text').should(
			'contain.text',
			"Suivez-nous sur LinkedIn pour être à l'affût des nouveautés de notre assistant numérique.",
		);
	});

	it('Good content for newsletter title', () => {
		cy.get('#edgar-contactPage-newsletterTitle-text').should(
			'contain.text',
			'Ou inscrivez vous à notre newsletter',
		);
	});

	it('Good content for newsletter subtitle', () => {
		cy.get('#edgar-contactPage-newsletterSubtitle-text').should(
			'contain.text',
			'Recevez par email, les news d’edgar en exclusivité et en BONUS, profitez des premières places d’accès à notre beta lors de son ouverture.',
		);
	});

	it('Good content for newsletter formTitle', () => {
		cy.get('#edgar-contactPage-newsletterFormTitle-text').should(
			'contain.text',
			'Avant de vous inscrire, notez bien que nous n’allons malheureusement pas pouvoir vous inonder de photos trop mignonnes d’Edgar dans votre newsletter. Désolé 😔',
		);
	});

	it('Good content for newsletter policies', () => {
		cy.get('#edgar-contactPage-newsletterPolicies-text').should(
			'contain.text',
			'En vous abonnant, vous acceptez notre politique de confidentialité',
		);
	});

	it('Good content for contact form title', () => {
		cy.get('#edgar-contactPage-formTitle-text').should('contain.text', 'Une question ? Besoin d’aide ?');
	});

	it('Good content for contact form subtitle', () => {
		cy.get('#edgar-contactPage-formSubtitle-text').should(
			'contain.text',
			'Contactez-nous via le formulaire ci-dessous',
		);
	});

	it('Good content for contact form input name text', () => {
		cy.get('#edgar-contactPage-formName-text').should('contain.text', 'Votre prénom & nom');
	});

	it('Good content for contact form email input text', () => {
		cy.get('#edgar-contactPage-formEmail-text').should('contain.text', 'Votre adresse mail');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/contact');
	});

	it('Visible buttons', () => {
		cy.get('#edgar-contactPage-linkedIn-button').should('be.visible');
		cy.get('#edgar-contactPage-newsletterSubscription-button').should('be.visible');
		cy.get('#edgar-contactPage-formSubmit-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-contactPage-linkedInTitle-text').should('be.visible');
		cy.get('#edgar-contactPage-linkedInSubtitle-text').should('be.visible');
		cy.get('#edgar-contactPage-newsletterTitle-text').should('be.visible');
		cy.get('#edgar-contactPage-newsletterSubtitle-text').should('be.visible');
		cy.get('#edgar-contactPage-newsletterFormTitle-text').should('be.visible');
		cy.get('#edgar-contactPage-newsletterPolicies-text').should('be.visible');
		cy.get('#edgar-contactPage-formTitle-text').should('be.visible');
		cy.get('#edgar-contactPage-formSubtitle-text').should('be.visible');
		cy.get('#edgar-contactPage-formName-text').should('be.visible');
		cy.get('#edgar-contactPage-formEmail-text').should('be.visible');
	});
});

describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/contact');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-contactPage]').should('have.length', 3);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-contactPage]').should('have.length', 8);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-contactPage]').should('have.length', 2);
	});
});

describe('Good content on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/contact');
	});

	it('Good content for button', () => {
		cy.get('#edgar-contactPage-linkedIn-button').should('contain.text', 'Direction LinkedIn');
		cy.get('#edgar-contactPage-newsletterSubscription-button').should('contain.text', "M'abonner");
		cy.get('#edgar-contactPage-formSubmit-button').should('contain.text', 'Envoyer mon message');
	});

	it('Good content for LinkedIn title', () => {
		cy.get('#edgar-contactPage-linkedInTitle-text').should('contain.text', 'edgar sur les réseaux sociaux');
	});

	it('Good content for LinkedIn subtitle', () => {
		cy.get('#edgar-contactPage-linkedInSubtitle-text').should(
			'contain.text',
			"Suivez-nous sur LinkedIn pour être à l'affût des nouveautés de notre assistant numérique.",
		);
	});

	it('Good content for newsletter title', () => {
		cy.get('#edgar-contactPage-newsletterTitle-text').should(
			'contain.text',
			'Ou inscrivez vous à notre newsletter',
		);
	});

	it('Good content for newsletter subtitle', () => {
		cy.get('#edgar-contactPage-newsletterSubtitle-text').should(
			'contain.text',
			'Recevez par email, les news d’edgar en exclusivité et en BONUS, profitez des premières places d’accès à notre beta lors de son ouverture.',
		);
	});

	it('Good content for newsletter formTitle', () => {
		cy.get('#edgar-contactPage-newsletterFormTitle-text').should(
			'contain.text',
			'Avant de vous inscrire, notez bien que nous n’allons malheureusement pas pouvoir vous inonder de photos trop mignonnes d’Edgar dans votre newsletter. Désolé 😔',
		);
	});

	it('Good content for newsletter policies', () => {
		cy.get('#edgar-contactPage-newsletterPolicies-text').should(
			'contain.text',
			'En vous abonnant, vous acceptez notre politique de confidentialité',
		);
	});

	it('Good content for contact form title', () => {
		cy.get('#edgar-contactPage-formTitle-text').should('contain.text', 'Une question ? Besoin d’aide ?');
	});

	it('Good content for contact form subtitle', () => {
		cy.get('#edgar-contactPage-formSubtitle-text').should(
			'contain.text',
			'Contactez-nous via le formulaire ci-dessous',
		);
	});

	it('Good content for contact form input name text', () => {
		cy.get('#edgar-contactPage-formName-text').should('contain.text', 'Votre prénom & nom');
	});

	it('Good content for contact form email input text', () => {
		cy.get('#edgar-contactPage-formEmail-text').should('contain.text', 'Votre adresse mail');
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/contact');
	});

	it('Visible buttons', () => {
		cy.get('#edgar-contactPage-linkedIn-button').should('be.visible');
		cy.get('#edgar-contactPage-newsletterSubscription-button').should('be.visible');
		cy.get('#edgar-contactPage-formSubmit-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-contactPage-linkedInTitle-text').should('be.visible');
		cy.get('#edgar-contactPage-linkedInSubtitle-text').should('be.visible');
		cy.get('#edgar-contactPage-newsletterTitle-text').should('be.visible');
		cy.get('#edgar-contactPage-newsletterSubtitle-text').should('be.visible');
		cy.get('#edgar-contactPage-newsletterFormTitle-text').should('be.visible');
		cy.get('#edgar-contactPage-newsletterPolicies-text').should('be.visible');
		cy.get('#edgar-contactPage-formTitle-text').should('be.visible');
		cy.get('#edgar-contactPage-formSubtitle-text').should('be.visible');
		cy.get('#edgar-contactPage-formName-text').should('be.visible');
		cy.get('#edgar-contactPage-formEmail-text').should('be.visible');
	});
});
