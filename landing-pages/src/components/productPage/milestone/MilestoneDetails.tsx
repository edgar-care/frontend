import { Wrap, WrapItem } from '@chakra-ui/react';

import type MilestoneDetailsCardType from 'types/productPage/MilestoneDetailsCardType';

import MilestoneDetailsCard from './MilestoneDetailsCard';

const MilestoneDetails = (): JSX.Element => {
	const milestoneDetails: MilestoneDetailsCardType[] = [
		{
			title: 'Prototypage/ Idéation',
			elements: ['Brainstorming', 'Maquettage', 'Image de marque', 'Assistant numérique: Edgar'],
			type: 'previous',
			id: 'prototypage',
		},
		{
			title: 'POC (Proof Of Concept)',
			elements: [
				"Amélioration de l'expérience utilisateur",
				'Première version des interfaces utilisateurs',
				"Parcours d'onboarding pour le dossier médical",
				'Edgar plus performant',
			],
			type: 'current',
			id: 'poc',
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
			id: 'beta1',
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
			id: 'beta2',
		},
	];

	return (
		<Wrap spacing={{ base: '48px', smd: '24px' }} justify={{ base: 'center', md: 'start' }} w="100%">
			{milestoneDetails.map((milestoneDetail) => (
				<WrapItem w={{ base: '100%', smd: 'auto' }}>
					<MilestoneDetailsCard
						title={milestoneDetail.title}
						elements={milestoneDetail.elements}
						type={milestoneDetail.type}
						id={milestoneDetail.id}
					/>
				</WrapItem>
			))}
		</Wrap>
	);
};

export default MilestoneDetails;
