describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-homePage]').should('have.length', 2);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-homePage]').should('have.length', 10);
	});
	it('Good number of svg', () => {
		cy.get('svg[id^=edgar-homePage]').should('have.length', 4);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-homePage-appointment-button').should('contain.text', 'Trouvez votre rendez-vous dès maintenant');
		cy.get('#edgar-homePage-product-button').should('contain.text', 'En apprendre plus sur edgar');
	});

	it('Good content for catch phrase', () => {
		cy.get('#edgar-homePage-catchPhrase-text').should(
			'contain.text',
			"Gagne du temps avec l'assistant virtuel du pré-diagnostic.",
		);
	});

	it('Good content for subtitle', () => {
		cy.get('#edgar-homePage-subTitle1-text').should(
			'contain.text',
			"Marre d'attendre pour avoir un rendez-vous chez le médecin généraliste ?",
		);
	});

	it('Good content for subtitle 2', () => {
		cy.get('#edgar-homePage-subTitle2-text').should(
			'contain.text',
			"Un Français attend en moyenne 6 jours avant d'assister à son rendez-vous chez un médecin généraliste.",
		);
	});

	it('Good content for product title', () => {
		cy.get('#edgar-homePage-productTitle-text').should('contain.text', 'Pourquoi edgar ?');
	});

	it('Good content for product description', () => {
		cy.get('#edgar-homePage-productDescription-text').should(
			'contain.text',
			'Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes, en France, ces quelques dernières années, un Français attend en moyenne 6 jours avant d’aller à son rendez-vous médical.',
		);
	});

	it('Good content for QA title', () => {
		cy.get('#edgar-homePage-QATitle-text').should('contain.text', 'QUESTIONS FRÉQUEMMENT POSÉES');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	it('Visible buttons', () => {
		cy.get('#edgar-homePage-appointment-button').should('be.visible');
		cy.get('#edgar-homePage-product-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-homePage-catchPhrase-text').should('be.visible');
		cy.get('#edgar-homePage-subTitle1-text').should('be.visible');
		cy.get('#edgar-homePage-subTitle2-text').should('be.visible');
		cy.get('#edgar-homePage-productTitle-text').should('be.visible');
		cy.get('#edgar-homePage-productDescription-text').should('be.visible');
		cy.get('#edgar-homePage-QATitle-text').should('be.visible');
	});
});

describe('Good redirection on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	it('Good redirection on buttons', () => {
		// cy.get('#edgar-homePage-appointment-button').click().url().should('eq', `${appUrl}/simulation`);
		// cy.visit('/');
		cy.get('#edgar-homePage-product-button')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/project`);
	});
});

describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-homePage]').should('have.length', 2);
	});
	it('Good number of texts', () => {
		cy.get('p[id^=edgar-homePage]').should('have.length', 10);
	});
	it('Good number of svg', () => {
		cy.get('svg[id^=edgar-homePage]').should('have.length', 4);
	});
});

describe('Good content on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-homePage-appointment-button').should('contain.text', 'Trouvez votre rendez-vous dès maintenant');
		cy.get('#edgar-homePage-product-button').should('contain.text', 'En apprendre plus sur edgar');
	});

	it('Good content for catch phrase', () => {
		cy.get('#edgar-homePage-catchPhrase-text').should(
			'contain.text',
			"Gagne du temps avec l'assistant virtuel du pré-diagnostic.",
		);
	});

	it('Good content for subtitle', () => {
		cy.get('#edgar-homePage-subTitle1-text').should(
			'contain.text',
			"Marre d'attendre pour avoir un rendez-vous chez le médecin généraliste ?",
		);
	});

	it('Good content for subtitle 2', () => {
		cy.get('#edgar-homePage-subTitle2-text').should(
			'contain.text',
			"Un Français attend en moyenne 6 jours avant d'assister à son rendez-vous chez un médecin généraliste.",
		);
	});

	it('Good content for product title', () => {
		cy.get('#edgar-homePage-productTitle-text').should('contain.text', 'Pourquoi edgar ?');
	});

	it('Good content for product description', () => {
		cy.get('#edgar-homePage-productDescription-text').should(
			'contain.text',
			'Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes, en France, ces quelques dernières années, un Français attend en moyenne 6 jours avant d’aller à son rendez-vous médical.',
		);
	});

	it('Good content for QA title', () => {
		cy.get('#edgar-homePage-QATitle-text').should('contain.text', 'QUESTIONS FRÉQUEMMENT POSÉES');
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/');
	});

	it('Visible buttons', () => {
		cy.get('#edgar-homePage-appointment-button').should('be.visible');
		cy.get('#edgar-homePage-product-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-homePage-catchPhrase-text').should('be.visible');
		cy.get('#edgar-homePage-subTitle1-text').should('be.visible');
		cy.get('#edgar-homePage-subTitle2-text').should('be.visible');
		cy.get('#edgar-homePage-productTitle-text').should('be.visible');
		cy.get('#edgar-homePage-productDescription-text').should('be.visible');
		cy.get('#edgar-homePage-QATitle-text').should('be.visible');
	});
});

describe('Good redirection on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/');
	});

	it('Good redirection on buttons', () => {
		// cy.get('#edgar-homePage-appointment-button').click().url().should('eq', `${appUrl}/simulation`);
		// cy.visit('/');
		cy.get('#edgar-homePage-product-button')
			.click()
			.url()
			.should('eq', `${Cypress.env('url')}/project`);
	});
});
