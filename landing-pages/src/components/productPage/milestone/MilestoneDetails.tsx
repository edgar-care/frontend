import { Wrap, WrapItem } from '@chakra-ui/react';

import type MilestoneDetailsCardType from 'types/productPage/MilestoneDetailsCardType';

import MilestoneDetailsCard from './MilestoneDetailsCard';

const MilestoneDetails = (): JSX.Element => {
	const milestoneDetails: MilestoneDetailsCardType[] = [
		{
			title: 'Prototypage/ Idéation',
			elements: ['Brainstorming', 'Maquettage', 'Image de marque', 'Assistant numérique: Edgar'],
			type: 'previous',
		},
		{
			title: 'POC (Proof Of Concept)',
			elements: [
				"Amélioration de l'expérience utilisateur",
				'Première version des interfaces utilisateur',
				"Parcours d'onboarding pour le dossier médical",
				'Edgar plus performant',
			],
			type: 'current',
		},
		{
			title: 'Beta #1',
			elements: [
				'Beta réservée aux médecins',
				'Application dédiée aux médecins',
				'Edgar est compatible avec 25 maladies',
				'Suivi des patients',
				'Suivi des rendez-vous',
			],
			type: 'futur',
		},
		{
			title: 'Beta #2',
			elements: [
				'Beta ouverte aux patients',
				'Application mobile pour les patients et les médecins',
				'Edgar est compatible avec 50 maladies',
				'Prise de rendez-vous',
				'Suivi de sa santé',
			],
			type: 'futur',
		},
	];

	return (
		<Wrap spacing={{ base: '48px', smd: '32px' }} justify={{ base: 'center', md: 'start' }} w="100%">
			{milestoneDetails.map((milestoneDetail) => (
				<WrapItem w={{ base: '100%', smd: 'auto' }}>
					<MilestoneDetailsCard
						title={milestoneDetail.title}
						elements={milestoneDetail.elements}
						type={milestoneDetail.type}
					/>
				</WrapItem>
			))}
		</Wrap>
	);
};

export default MilestoneDetails;
