const url = 'http://localhost:3000';
const appUrl = 'http://localhost:3001';

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/product`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-productPage]').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-productPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-productPage]').should('have.length', 27);
	});

	it('Good number of svg', () => {
		cy.get('svg[id^=edgar-productPage]').should('have.length', 18);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/product`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-productPage-milestone-button').should('contain.text', 'Voir nos milestones');
		cy.get('#edgar-productPage-newsletterSubscription-button').should('contain.text', "M'abonner");
	});

	it('Good content for texts (infos)', () => {
		cy.get('#edgar-productPage-catchPhrase-text').should('contain.text', "edgar c'est quoi ?");
		cy.get('#edgar-productPage-subTitle1-text').should(
			'contain.text',
			"edgar c'est la plateforme qui s'occupe devotre santé et celle de vos proches.",
		);
		cy.get('#edgar-productPage-subTitle2-text').should(
			'contain.text',
			'Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes, en France, ces quelques dernières année, un français attend en moyenne 6 jours avant d’aller à son rendez-vous médical.',
		);
		cy.get('#edgar-productPage-subTitle3-text').should(
			'contain.text',
			'Chez edgar, nous voulons réduire cette durée en diminuant le nombre de rendez-vous inutiles. Ces rendez-vous font perdre du temps aux patients, mais aussi aux médecins, qui nous le savons sont surchargés.',
		);
		cy.get('#edgar-productPage-productTitle-text').should('contain.text', 'Comment ça marche ?');
		cy.get('#edgar-productPage-productDescription1-text').should(
			'contain.text',
			'Avant de prendre un rendez-vous chez le médecin, vous allez devoir échanger avec Edgar, notre assistant numérique. Son rôle, faire en sorte de fournir au médecin toutes les informations nécessaires pour qu’il puisse proposer un diagnostic fiable et rapide.',
		);
		cy.get('#edgar-productPage-productDescription2-text').should(
			'contain.text',
			'Edgar: "Lors de la prise de rendez-vous, je vais échanger avec vous, vous posez plein de questions afin de spécifier le plus possible vos symptômes.',
		);
		cy.get('#edgar-productPage-productDescription3-text').should(
			'contain.text',
			'Cette étape est très importante pour le médecin, parce qu’il est très compliqué de déceler la totalité de ses propres symptômes, surtout quand on en est pas un. Une fois que j’ai suffisamment d’informations pour générer un pré-diagnostic, le médecin pourra alors valider ou non la nécessité de votre rendez-vous.',
		);
		cy.get('#edgar-productPage-productDescription4-text').should(
			'contain.text',
			'Dans le cas où le rendez-vous n’est pas nécessaire, ne vous inquiétez pas, il vous proposera quand même une solution pour réduire le plus possible vos symptômes et vous soigner. Si votre rendez-vous est nécessaire, le médecin aura accès à l’entièreté de mon pré-diagnostic lui permettant de gagner un temps considérable lors de votre consultation.',
		);
		cy.get('#edgar-productPage-productDescription5-text').should(
			'contain.text',
			'Voilà, vous savez maintenant comment je fonctionne.',
		);
	});

	it('Good content for texts (milestones)', () => {
		cy.get('#edgar-productPage-milestonesTitle-text').should('contain.text', "LES MILESTONES D'EDGAR");
		cy.get('#edgar-productPage-productMilestones-2022-title-text').should('contain.text', '2022 - Décembre');
		cy.get('#edgar-productPage-productMilestones-2022-goal-text').should('contain.text', 'Prototypage/ Idéation');
		cy.get('#edgar-productPage-productMilestones-2023-title-text').should('contain.text', '2023 - Novembre');
		cy.get('#edgar-productPage-productMilestones-2023-goal-text').should('contain.text', 'POC (Proof Of Concept)');
		cy.get('#edgar-productPage-productMilestones-2024-title-text').should('contain.text', '2024 - Mai');
		cy.get('#edgar-productPage-productMilestones-2024-goal-text').should('contain.text', 'Beta #1');
		cy.get('#edgar-productPage-productMilestones-2025-title-text').should('contain.text', '2025 - Mai');
		cy.get('#edgar-productPage-productMilestones-2025-goal-text').should('contain.text', 'Beta #2');
		cy.get('#edgar-productPage-milestoneDetails-prototypage-title-text').should(
			'contain.text',
			'Prototypage/ Idéation',
		);
		cy.get('#edgar-productPage-milestoneDetails-poc-title-text').should('contain.text', 'POC (Proof Of Concept)');
		cy.get('#edgar-productPage-milestoneDetails-poc-subTitle-text').should('contain.text', 'En cours');
		cy.get('#edgar-productPage-milestoneDetails-beta1-title-text').should('contain.text', 'Beta #1');
		cy.get('#edgar-productPage-milestoneDetails-beta2-title-text').should('contain.text', 'Beta #2');
	});

	it('Good content for texts (newsletter)', () => {
		cy.get('#edgar-productPage-newsletterCatchPhrase-text').should('contain.text', "Envie d'essayer ?");
		cy.get('#edgar-productPage-newsletterSubTitle1-text').should(
			'contain.text',
			'Abonnez-vous à notre newsletter et obtenez un accès anticipé à notre beta lors de son ouverture.',
		);
		cy.get('#edgar-productPage-newsletterPolicies-text').should(
			'contain.text',
			'En vous abonnant, vous acceptez notre politique de confidentialité',
		);
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/product`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-productPage-milestone-button').should('be.visible');
		cy.get('#edgar-productPage-newsletterSubscription-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-productPage-catchPhrase-text').should('be.visible');
		cy.get('#edgar-productPage-subTitle1-text').should('be.visible');
		cy.get('#edgar-productPage-subTitle2-text').should('be.visible');
		-cy.get('#edgar-productPage-subTitle3-text').should('be.visible');
		cy.get('#edgar-productPage-productTitle-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription1-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription2-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription3-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription4-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription5-text').should('be.visible');
		cy.get('#edgar-productPage-milestonesTitle-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2022-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2022-goal-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2023-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2023-goal-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2024-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2024-goal-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2025-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2025-goal-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-prototypage-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-poc-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-poc-subTitle-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta1-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta2-title-text').should('be.visible');
		cy.get('#edgar-productPage-newsletterCatchPhrase-text').should('be.visible');
		cy.get('#edgar-productPage-newsletterSubTitle1-text').should('be.visible');
		cy.get('#edgar-productPage-newsletterPolicies-text').should('be.visible');
	});

	it('Visible inputs', () => {
		cy.get('#edgar-productPage-newsletterPolicies-text').should('be.visible');
	});
});

describe('Good number of elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}/product`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-productPage]').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-productPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-productPage]').should('have.length', 27);
	});

	it('Good number of svg', () => {
		cy.get('svg[id^=edgar-productPage]').should('have.length', 18);
	});
});

describe('Good content on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}/product`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-productPage-milestone-button').should('contain.text', 'Voir nos milestones');
		cy.get('#edgar-productPage-newsletterSubscription-button').should('contain.text', "M'abonner");
	});

	it('Good content for texts (infos)', () => {
		cy.get('#edgar-productPage-catchPhrase-text').should('contain.text', "edgar c'est quoi ?");
		cy.get('#edgar-productPage-subTitle1-text').should(
			'contain.text',
			"edgar c'est la plateforme qui s'occupe devotre santé et celle de vos proches.",
		);
		cy.get('#edgar-productPage-subTitle2-text').should(
			'contain.text',
			'Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes, en France, ces quelques dernières année, un français attend en moyenne 6 jours avant d’aller à son rendez-vous médical.',
		);
		cy.get('#edgar-productPage-subTitle3-text').should(
			'contain.text',
			'Chez edgar, nous voulons réduire cette durée en diminuant le nombre de rendez-vous inutiles. Ces rendez-vous font perdre du temps aux patients, mais aussi aux médecins, qui nous le savons sont surchargés.',
		);
		cy.get('#edgar-productPage-productTitle-text').should('contain.text', 'Comment ça marche ?');
		cy.get('#edgar-productPage-productDescription1-text').should(
			'contain.text',
			'Avant de prendre un rendez-vous chez le médecin, vous allez devoir échanger avec Edgar, notre assistant numérique. Son rôle, faire en sorte de fournir au médecin toutes les informations nécessaires pour qu’il puisse proposer un diagnostic fiable et rapide.',
		);
		cy.get('#edgar-productPage-productDescription2-text').should(
			'contain.text',
			'Edgar: "Lors de la prise de rendez-vous, je vais échanger avec vous, vous posez plein de questions afin de spécifier le plus possible vos symptômes.',
		);
		cy.get('#edgar-productPage-productDescription3-text').should(
			'contain.text',
			'Cette étape est très importante pour le médecin, parce qu’il est très compliqué de déceler la totalité de ses propres symptômes, surtout quand on en est pas un. Une fois que j’ai suffisamment d’informations pour générer un pré-diagnostic, le médecin pourra alors valider ou non la nécessité de votre rendez-vous.',
		);
		cy.get('#edgar-productPage-productDescription4-text').should(
			'contain.text',
			'Dans le cas où le rendez-vous n’est pas nécessaire, ne vous inquiétez pas, il vous proposera quand même une solution pour réduire le plus possible vos symptômes et vous soigner. Si votre rendez-vous est nécessaire, le médecin aura accès à l’entièreté de mon pré-diagnostic lui permettant de gagner un temps considérable lors de votre consultation.',
		);
		cy.get('#edgar-productPage-productDescription5-text').should(
			'contain.text',
			'Voilà, vous savez maintenant comment je fonctionne.',
		);
	});

	it('Good content for texts (milestones)', () => {
		cy.get('#edgar-productPage-milestonesTitle-text').should('contain.text', "LES MILESTONES D'EDGAR");
		cy.get('#edgar-productPage-productMilestones-2022-title-text').should('contain.text', '2022 - Décembre');
		cy.get('#edgar-productPage-productMilestones-2022-goal-text').should('contain.text', 'Prototypage/ Idéation');
		cy.get('#edgar-productPage-productMilestones-2023-title-text').should('contain.text', '2023 - Novembre');
		cy.get('#edgar-productPage-productMilestones-2023-goal-text').should('contain.text', 'POC (Proof Of Concept)');
		cy.get('#edgar-productPage-productMilestones-2024-title-text').should('contain.text', '2024 - Mai');
		cy.get('#edgar-productPage-productMilestones-2024-goal-text').should('contain.text', 'Beta #1');
		cy.get('#edgar-productPage-productMilestones-2025-title-text').should('contain.text', '2025 - Mai');
		cy.get('#edgar-productPage-productMilestones-2025-goal-text').should('contain.text', 'Beta #2');
		cy.get('#edgar-productPage-milestoneDetails-prototypage-title-text').should(
			'contain.text',
			'Prototypage/ Idéation',
		);
		cy.get('#edgar-productPage-milestoneDetails-poc-title-text').should('contain.text', 'POC (Proof Of Concept)');
		cy.get('#edgar-productPage-milestoneDetails-poc-subTitle-text').should('contain.text', 'En cours');
		cy.get('#edgar-productPage-milestoneDetails-beta1-title-text').should('contain.text', 'Beta #1');
		cy.get('#edgar-productPage-milestoneDetails-beta2-title-text').should('contain.text', 'Beta #2');
	});

	it('Good content for texts (newsletter)', () => {
		cy.get('#edgar-productPage-newsletterCatchPhrase-text').should('contain.text', "Envie d'essayer ?");
		cy.get('#edgar-productPage-newsletterSubTitle1-text').should(
			'contain.text',
			'Abonnez-vous à notre newsletter et obtenez un accès anticipé à notre beta lors de son ouverture.',
		);
		cy.get('#edgar-productPage-newsletterPolicies-text').should(
			'contain.text',
			'En vous abonnant, vous acceptez notre politique de confidentialité',
		);
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit(`${url}/product`);
	});

	it('Visible buttons', () => {
		cy.get('#edgar-productPage-milestone-button').should('be.visible');
		cy.get('#edgar-productPage-newsletterSubscription-button').should('be.visible');
	});

	it('Visible texts', () => {
		cy.get('#edgar-productPage-catchPhrase-text').should('be.visible');
		cy.get('#edgar-productPage-subTitle1-text').should('be.visible');
		cy.get('#edgar-productPage-subTitle2-text').should('be.visible');
		-cy.get('#edgar-productPage-subTitle3-text').should('be.visible');
		cy.get('#edgar-productPage-productTitle-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription1-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription2-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription3-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription4-text').should('be.visible');
		cy.get('#edgar-productPage-productDescription5-text').should('be.visible');
		cy.get('#edgar-productPage-milestonesTitle-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2022-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2022-goal-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2023-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2023-goal-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2024-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2024-goal-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2025-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-2025-goal-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-prototypage-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-poc-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-poc-subTitle-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta1-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta2-title-text').should('be.visible');
		cy.get('#edgar-productPage-newsletterCatchPhrase-text').should('be.visible');
		cy.get('#edgar-productPage-newsletterSubTitle1-text').should('be.visible');
		cy.get('#edgar-productPage-newsletterPolicies-text').should('be.visible');
	});

	it('Visible inputs', () => {
		cy.get('#edgar-productPage-newsletterPolicies-text').should('be.visible');
	});
});
