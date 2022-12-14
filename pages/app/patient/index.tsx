import { VStack, Text, Button, Grid, GridItem } from '@chakra-ui/react';
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
		},
	];

	return (
		<VStack pt="64px" spacing="48px">
			<Text size="3xl">
				Bienvenue sur votre <ColorText textValue="espace patient" />
			</Text>
			<Button variant="primary" size="lg">
				Besoin d'un nouveau rendez-vous ?
			</Button>
			<Grid templateColumns="repeat(2, 1fr)" gap="48px">
				{cards.map((card) => (
					<GridItem>
						<DashboardCard title={card.title} para={card.para} button={card.button} path={card.path} />
					</GridItem>
				))}
			</Grid>
		</VStack>
	);
};

export default Home;
