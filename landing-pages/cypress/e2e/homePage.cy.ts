const url = 'http://localhost:3000';
const appUrl = 'http://localhost:3001';

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}`);
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
		cy.visit(`${url}`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-homePage-appointment-button').should('contain.text', 'Trouvez votre rendez-vous dès maintenant');
		cy.get('#edgar-homePage-product-button').should('contain.text', 'En apprendre plus sur edgar');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-homePage-catchPhrase-text').should(
			'contain.text',
			"Gagne du temps avec l'assistant virtuel du pré-diagnostic.",
		);
		cy.get('#edgar-homePage-subTitle1-text').should(
			'contain.text',
			"Marre d'attendre pour avoir un rendez-vous chez le médecin généraliste ?",
		);
		cy.get('#edgar-homePage-subTitle2-text').should(
			'contain.text',
			"Un Français attend en moyenne 6 jours avant d'avoir un rendez-vous chez un médecin généraliste.",
		);
		cy.get('#edgar-homePage-productTitle-text').should('contain.text', 'Pourquoi edgar ?');
		cy.get('#edgar-homePage-productDescription-text').should(
			'contain.text',
			'Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes, en France, ces quelques dernières année, un français attend en moyenne 6 jours avant d’aller à son rendez-vous médical.Chez edgar, nous voulons réduire cette durée en diminuant le nombre de rendez-vous inutiles. Ces rendez-vous font perdre du temps aux patients, mais aussi aux médecins, qui nous le savons sont surchargés.',
		);
		cy.get('#edgar-homePage-QATitle-text').should('contain.text', 'QUESTIONS FRÉQUEMMENT POSÉES');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}`);
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
		cy.visit(`${url}`);
	});

	it('Good redirection on buttons', () => {
		cy.get('#edgar-homePage-appointment-button').click().url().should('eq', `${appUrl}/simulation`);
		cy.visit(`${url}`);
		cy.get('#edgar-homePage-product-button').click().url().should('eq', `${url}/product`);
	});
});

describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}`);
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
		cy.visit(`${url}`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-homePage-appointment-button').should('contain.text', 'Trouvez votre rendez-vous dès maintenant');
		cy.get('#edgar-homePage-product-button').should('contain.text', 'En apprendre plus sur edgar');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-homePage-catchPhrase-text').should(
			'contain.text',
			"Gagne du temps avec l'assistant virtuel du pré-diagnostic.",
		);
		cy.get('#edgar-homePage-subTitle1-text').should(
			'contain.text',
			"Marre d'attendre pour avoir un rendez-vous chez le médecin généraliste ?",
		);
		cy.get('#edgar-homePage-subTitle2-text').should(
			'contain.text',
			"Un Français attend en moyenne 6 jours avant d'avoir un rendez-vous chez un médecin généraliste.",
		);
		cy.get('#edgar-homePage-productTitle-text').should('contain.text', 'Pourquoi edgar ?');
		cy.get('#edgar-homePage-productDescription-text').should(
			'contain.text',
			'Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes, en France, ces quelques dernières année, un français attend en moyenne 6 jours avant d’aller à son rendez-vous médical.Chez edgar, nous voulons réduire cette durée en diminuant le nombre de rendez-vous inutiles. Ces rendez-vous font perdre du temps aux patients, mais aussi aux médecins, qui nous le savons sont surchargés.',
		);
		cy.get('#edgar-homePage-QATitle-text').should('contain.text', 'QUESTIONS FRÉQUEMMENT POSÉES');
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}`);
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
		cy.visit(`${url}`);
	});

	it('Good redirection on buttons', () => {
		cy.get('#edgar-homePage-appointment-button').click().url().should('eq', `${appUrl}/simulation`);
		cy.visit(`${url}`);
		cy.get('#edgar-homePage-product-button').click().url().should('eq', `${url}/product`);
	});
});
