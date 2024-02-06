describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/project');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-productPage]').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-productPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-productPage]').should('have.length', 24);
	});

	it('Good number of svg', () => {
		cy.get('svg[id^=edgar-productPage]').should('have.length', 23);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/project');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-productPage-milestone-button').should('contain.text', 'Voir nos milestones');
		cy.get('#edgar-productPage-newsletterSubscription-button').should('contain.text', "M'abonner");
	});

	it('Good content for catch phrase', () => {
		cy.get('#edgar-productPage-catchPhrase-text').should('contain.text', "edgar c'est quoi ?");
	});

	it('Good content for subtitle 1', () => {
		cy.get('#edgar-productPage-subTitle1-text').should(
			'contain.text',
			"edgar c'est la plateforme qui s'occupe de votre santé et celle de vos proches.",
		);
	});

	it('Good content for subtitle 2', () => {
		cy.get('#edgar-productPage-subTitle2-text').should(
			'contain.text',
			'Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes, en France, ces quelques dernières années, un Français attend en moyenne 6 jours avant d’assister à son rendez-vous médical.',
		);
	});

	it('Good content for subtitle 3', () => {
		cy.get('#edgar-productPage-subTitle3-text').should(
			'contain.text',
			"Chez edgar, nous souhaitons réduire la durée d'attente en diminuant le nombre de rendez-vous inutiles. Ces rendez-vous font perdre du temps aux patients, mais aussi aux médecins qui sont surchargés.",
		);
	});

	it('Good content for product title', () => {
		cy.get('#edgar-productPage-productTitle-text').should('contain.text', 'Comment ça marche ?');
	});

	it('Good content for product description 1', () => {
		cy.get('#edgar-productPage-productDescription1-text').should(
			'contain.text',
			'Avant de prendre un rendez-vous chez le médecin, vous allez devoir échanger avec Edgar, notre assistant numérique. Son rôle, faire en sorte de fournir au médecin toutes les informations nécessaires pour qu’il puisse proposer un diagnostic fiable et rapide.',
		);
	});

	it('Good content for product description 2', () => {
		cy.get('#edgar-productPage-productDescription2-text').should(
			'contain.text',
			'Edgar: "Lors de la prise de rendez-vous, je vais échanger avec vous, vous poser plein de questions afin de spécifier le plus possible vos symptômes.',
		);
	});

	it('Good content for product description 3', () => {
		cy.get('#edgar-productPage-productDescription3-text').should(
			'contain.text',
			"Cette étape est très importante pour le médecin, parce qu’il est très compliqué de déceler la totalité de ses propres symptômes, surtout quand on n'en est pas un. Une fois que j’ai suffisamment d’informations pour générer un pré-diagnostic, le médecin pourra alors valider ou non la nécessité de votre rendez-vous.",
		);
	});

	it('Good content for product description 4', () => {
		cy.get('#edgar-productPage-productDescription4-text').should(
			'contain.text',
			'Dans le cas où le rendez-vous n’est pas nécessaire, ne vous inquiétez pas, il vous proposera quand même une solution pour réduire le plus possible vos symptômes et vous soigner. Si votre rendez-vous est nécessaire, le médecin aura accès à l’entièreté de mon pré-diagnostic lui permettant de gagner un temps considérable lors de votre consultation.',
		);
	});

	it('Good content for product description 5', () => {
		cy.get('#edgar-productPage-productDescription5-text').should(
			'contain.text',
			'Voilà, vous savez maintenant comment je fonctionne.',
		);
	});

	it('Good content for texts (milestones)', () => {
		cy.get('#edgar-productPage-milestonesTitle-text').should('contain.text', "Les milestones d'edgar");
		cy.get('#edgar-productPage-productMilestones-prototypage-text').should('contain.text', '2022 - Décembre');
		cy.get('#edgar-productPage-milestoneDetails-prototypage-title-text').should(
			'contain.text',
			'Prototypage/ Idéation',
		);
		cy.get('#edgar-productPage-productMilestones-poc-text').should('contain.text', '2023 - Novembre');
		cy.get('#edgar-productPage-milestoneDetails-poc-title-text').should('contain.text', 'POC (Proof Of Concept)');
		cy.get('#edgar-productPage-productMilestones-beta-patient-text').should('contain.text', '2024 - Mai');
		cy.get('#edgar-productPage-milestoneDetails-beta-patient-title-text').should('contain.text', 'Beta - Patient');
		cy.get('#edgar-productPage-milestoneDetails-beta-patient-subTitle-text').should('contain.text', 'En cours');
		cy.get('#edgar-productPage-productMilestones-beta-doctor-text').should('contain.text', '2024 - Mai');
		cy.get('#edgar-productPage-milestoneDetails-beta-doctor-title-text').should('contain.text', 'Beta - Médecin');
		cy.get('#edgar-productPage-milestoneDetails-beta-doctor-subTitle-text').should('contain.text', 'En cours');
	});

	it('Good content for newsletter catch phrase', () => {
		cy.get('#edgar-productPage-newsletterCatchPhrase-text').should('contain.text', "Envie d'essayer ?");
	});

	it('Good content for newsletter subtitle', () => {
		cy.get('#edgar-productPage-newsletterSubTitle1-text').should(
			'contain.text',
			'Abonnez-vous à notre newsletter et obtenez un accès anticipé à notre beta lors de son ouverture.',
		);
	});

	it('Good content for newsletter policies', () => {
		cy.get('#edgar-productPage-newsletterPolicies-text').should(
			'contain.text',
			'En vous abonnant, vous acceptez notre politique de confidentialité',
		);
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/project');
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
		cy.get('#edgar-productPage-productMilestones-prototypage-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-prototypage-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-poc-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-poc-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-beta-patient-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta-patient-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta-patient-subTitle-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-beta-doctor-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta-doctor-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta-doctor-subTitle-text').should('be.visible');
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
		cy.visit('/project');
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-productPage]').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-productPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-productPage]').should('have.length', 24);
	});

	it('Good number of svg', () => {
		cy.get('svg[id^=edgar-productPage]').should('have.length', 23);
	});
});

describe('Good content on elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/project');
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-productPage-milestone-button').should('contain.text', 'Voir nos milestones');
		cy.get('#edgar-productPage-newsletterSubscription-button').should('contain.text', "M'abonner");
	});

	it('Good content for catch phrase', () => {
		cy.get('#edgar-productPage-catchPhrase-text').should('contain.text', "edgar c'est quoi ?");
	});

	it('Good content for subtitle 1', () => {
		cy.get('#edgar-productPage-subTitle1-text').should(
			'contain.text',
			"edgar c'est la plateforme qui s'occupe de votre santé et celle de vos proches.",
		);
	});

	it('Good content for subtitle 2', () => {
		cy.get('#edgar-productPage-subTitle2-text').should(
			'contain.text',
			'Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes, en France, ces quelques dernières années, un Français attend en moyenne 6 jours avant d’assister à son rendez-vous médical.',
		);
	});

	it('Good content for subtitle 3', () => {
		cy.get('#edgar-productPage-subTitle3-text').should(
			'contain.text',
			"Chez edgar, nous souhaitons réduire la durée d'attente en diminuant le nombre de rendez-vous inutiles. Ces rendez-vous font perdre du temps aux patients, mais aussi aux médecins qui sont surchargés.",
		);
	});

	it('Good content for product title', () => {
		cy.get('#edgar-productPage-productTitle-text').should('contain.text', 'Comment ça marche ?');
	});

	it('Good content for product description 1', () => {
		cy.get('#edgar-productPage-productDescription1-text').should(
			'contain.text',
			'Avant de prendre un rendez-vous chez le médecin, vous allez devoir échanger avec Edgar, notre assistant numérique. Son rôle, faire en sorte de fournir au médecin toutes les informations nécessaires pour qu’il puisse proposer un diagnostic fiable et rapide.',
		);
	});

	it('Good content for product description 2', () => {
		cy.get('#edgar-productPage-productDescription2-text').should(
			'contain.text',
			'Edgar: "Lors de la prise de rendez-vous, je vais échanger avec vous, vous poser plein de questions afin de spécifier le plus possible vos symptômes.',
		);
	});

	it('Good content for product description 3', () => {
		cy.get('#edgar-productPage-productDescription3-text').should(
			'contain.text',
			"Cette étape est très importante pour le médecin, parce qu’il est très compliqué de déceler la totalité de ses propres symptômes, surtout quand on n'en est pas un. Une fois que j’ai suffisamment d’informations pour générer un pré-diagnostic, le médecin pourra alors valider ou non la nécessité de votre rendez-vous.",
		);
	});

	it('Good content for product description 4', () => {
		cy.get('#edgar-productPage-productDescription4-text').should(
			'contain.text',
			'Dans le cas où le rendez-vous n’est pas nécessaire, ne vous inquiétez pas, il vous proposera quand même une solution pour réduire le plus possible vos symptômes et vous soigner. Si votre rendez-vous est nécessaire, le médecin aura accès à l’entièreté de mon pré-diagnostic lui permettant de gagner un temps considérable lors de votre consultation.',
		);
	});

	it('Good content for product description 5', () => {
		cy.get('#edgar-productPage-productDescription5-text').should(
			'contain.text',
			'Voilà, vous savez maintenant comment je fonctionne.',
		);
	});

	it('Good content for texts (milestones)', () => {
		cy.get('#edgar-productPage-milestonesTitle-text').should('contain.text', "Les milestones d'edgar");
		cy.get('#edgar-productPage-productMilestones-prototypage-text').should('contain.text', '2022 - Décembre');
		cy.get('#edgar-productPage-milestoneDetails-prototypage-title-text').should(
			'contain.text',
			'Prototypage/ Idéation',
		);
		cy.get('#edgar-productPage-productMilestones-poc-text').should('contain.text', '2023 - Novembre');
		cy.get('#edgar-productPage-milestoneDetails-poc-title-text').should('contain.text', 'POC (Proof Of Concept)');
		cy.get('#edgar-productPage-productMilestones-beta-patient-text').should('contain.text', '2024 - Mai');
		cy.get('#edgar-productPage-milestoneDetails-beta-patient-title-text').should('contain.text', 'Beta - Patient');
		cy.get('#edgar-productPage-milestoneDetails-beta-patient-subTitle-text').should('contain.text', 'En cours');
		cy.get('#edgar-productPage-productMilestones-beta-doctor-text').should('contain.text', '2024 - Mai');
		cy.get('#edgar-productPage-milestoneDetails-beta-doctor-title-text').should('contain.text', 'Beta - Médecin');
		cy.get('#edgar-productPage-milestoneDetails-beta-doctor-subTitle-text').should('contain.text', 'En cours');
	});

	it('Good content for newsletter catch phrase', () => {
		cy.get('#edgar-productPage-newsletterCatchPhrase-text').should('contain.text', "Envie d'essayer ?");
	});

	it('Good content for newsletter subtitle', () => {
		cy.get('#edgar-productPage-newsletterSubTitle1-text').should(
			'contain.text',
			'Abonnez-vous à notre newsletter et obtenez un accès anticipé à notre beta lors de son ouverture.',
		);
	});

	it('Good content for newsletter policies', () => {
		cy.get('#edgar-productPage-newsletterPolicies-text').should(
			'contain.text',
			'En vous abonnant, vous acceptez notre politique de confidentialité',
		);
	});
});

describe('Visible elements - Mobile', () => {
	beforeEach(() => {
		cy.viewport(390, 844);
		cy.visit('/project');
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
		cy.get('#edgar-productPage-productMilestones-prototypage-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-prototypage-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-poc-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-poc-title-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-beta-patient-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta-patient-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta-patient-subTitle-text').should('be.visible');
		cy.get('#edgar-productPage-productMilestones-beta-doctor-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta-doctor-title-text').should('be.visible');
		cy.get('#edgar-productPage-milestoneDetails-beta-doctor-subTitle-text').should('be.visible');
		cy.get('#edgar-productPage-newsletterCatchPhrase-text').should('be.visible');
		cy.get('#edgar-productPage-newsletterSubTitle1-text').should('be.visible');
		cy.get('#edgar-productPage-newsletterPolicies-text').should('be.visible');
	});

	it('Visible inputs', () => {
		cy.get('#edgar-productPage-newsletterPolicies-text').should('be.visible');
	});
});
