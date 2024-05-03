import { SimpleGrid } from '@chakra-ui/react';

import type MilestoneDetailsCardType from 'types/productPage/MilestoneDetailsCardType';

import MilestoneDetailsCard from './MilestoneDetailsCard';

const MilestoneDetails = (): JSX.Element => {
	const milestoneDetails: MilestoneDetailsCardType[] = [
		{
			title: 'Prototypage/ Idéation',
			elements: ['Brainstorming', 'Maquettage', 'Image de marque', 'Assistant numérique: Edgar'],
			type: 'previous',
			date: '2022 - Décembre',
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
			type: 'previous',
			date: '2023 - Novembre',
			id: 'poc',
		},
		{
			title: 'Beta - Patient',
			elements: [
				'Beta ouverte aux patients',
				'Application mobile et site internet',
				'Prise de rendez-vous via simulation',
				'Suivi de sa santé',
				'Suivi de ses traitements',
				'Gestion de ses documents',
				'Messagerie avec les médecins',
			],
			type: 'current',
			date: '2024 - Mai',
			id: 'beta-patient',
		},
		{
			title: 'Beta - Médecin',
			elements: [
				'Beta ouverte aux médecins',
				'Application mobile et site internet',
				'Edgar compatible avec 15 maladies',
				'Gestion de ses rendez-vous',
				'Gestion de son agenda',
				'Gestion de ses patients',
				'Validation des pré-diagnostic',
				'Messagerie avec les patients',
			],
			type: 'current',
			date: '2024 - Mai',
			id: 'beta-doctor',
		},
	];

	return (
		<SimpleGrid w={{ base: '100%', '4xl': '100%' }} columns={{ base: 1, smd: 2, '4xl': 4 }} spacing="16px">
			{milestoneDetails.map((milestoneDetail) => (
				<MilestoneDetailsCard milestone={milestoneDetail} key={milestoneDetail.id} />
			))}
		</SimpleGrid>
	);
};

export default MilestoneDetails;
