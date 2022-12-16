import { VStack, Text, Button, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

import ColorText from 'components/GradientText';
import DashboardCard from 'components/pages/patient/DashboardCard';

const Home = (): JSX.Element => {
	const cards = [
		{
			title: 'Vos rendez-vous',
			para: 'Besoin de voir, modifiez ou annuler un rendez-vous ?',
			button: 'Voir mes rendez-vous',
			path: '/app/patient/appointments',
		},
		{
			title: 'Mes documents',
			para: 'Tous les documents, résultats d’analyse, prescription, ordonnances sont présentes à un seul endroit.',
			button: 'Voir mes documents',
			path: '/app/patient/documents',
		},
		{
			title: 'Mon dossier médical',
			para: 'Toutes vos informations de santé, maladies, allergies, traitement en cours.',
			button: 'Voir mon dossier médical',
			path: '/app/patient/medical',
		},
		{
			title: 'Besoin de réponse',
			para: 'Vous avez une question, un problème ? Entrez directement en contact avec votre médecin traitant ou avec un autre médecin.',
			button: 'Echanger avec un médecin',
			path: '/app/patient/chat',
			isDisabled: true,
		},
	];

	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<VStack py="64px" px="32px" spacing="48px">
			<Text size={{ base: '2xl', md: '3xl' }} textAlign="center">
				Bienvenue sur votre <ColorText textValue="espace patient" />
			</Text>
			<Link href="/simulation">
				<Button variant="primary" size={isMobile ? 'md' : 'lg'}>
					Besoin d'un nouveau rendez-vous ?
				</Button>
			</Link>
			<Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap="48px">
				{cards.map((card) => (
					<GridItem key={card.title}>
						<DashboardCard
							title={card.title}
							para={card.para}
							button={card.button}
							path={card.path}
							isDisabled={card.isDisabled}
						/>
					</GridItem>
				))}
			</Grid>
		</VStack>
	);
};

export default Home;
