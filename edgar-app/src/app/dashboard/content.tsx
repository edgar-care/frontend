import { Button, Grid, GridItem, Text, useBreakpointValue, useDisclosure, useTimeout, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import HighlightText from 'components/HighlightText';
import DashboardCard from 'components/pages/patient/DashboardCard';
import NotificationsHandler from 'components/dashboardPages/notifications-modal/NotificationsHandler';

const DashboardContent = (): JSX.Element => {
	const {
		isOpen: isOpenNotificationsModal,
		onOpen: onOpenNotificationsModal,
		onClose: onCloseNotificationsModal,
	} = useDisclosure();
	const cards = [
		{
			title: 'Vos rendez-vous',
			para: 'Besoin de voir, modifiez ou annuler un rendez-vous ?',
			button: 'Voir mes rendez-vous',
			path: '/dashboard/appointments',
		},
		{
			title: 'Mes documents',
			para: 'Tous les documents, résultats d’analyse, prescription, ordonnances sont présentes à un seul endroit.',
			button: 'Voir mes documents',
			path: '/dashboard/documents',
		},
		{
			title: 'Mon dossier médical',
			para: 'Toutes vos informations de santé, maladies, allergies, traitement en cours.',
			button: 'Voir mon dossier médical',
			path: '/dashboard/medical',
		},
		{
			title: 'Besoin de réponse',
			para: 'Vous avez une question, un problème ? Entrez directement en contact avec votre médecin traitant ou avec un autre médecin.',
			button: 'Echanger avec un médecin',
			path: '/dashboard/chat',
			isDisabled: true,
		},
	];

	const isMobile = useBreakpointValue({ base: true, md: false });

	useTimeout(() => {
		onOpenNotificationsModal();
	}, 5000);

	return (
		<VStack py="64px" px="32px" spacing="48px">
			<Text size={{ base: '2xl', md: '3xl' }} textAlign="center">
				Bienvenue sur votre <HighlightText>espace patient</HighlightText>
			</Text>
			<Link href="/edgar-app/src/app/simulation">
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
			<NotificationsHandler isOpen={isOpenNotificationsModal} onClose={onCloseNotificationsModal} />
		</VStack>
	);
};

export default DashboardContent;
