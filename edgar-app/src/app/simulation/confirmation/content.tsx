'use client';

import { Text, Box, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

import { useLazyGetPatientAppointmentByIdQuery } from 'services/request/appointments';
import { useEffect } from 'react';

const SimulationConfirmationContent = (): JSX.Element => {
	const searchParams = useSearchParams();
	const appointmentId = searchParams.get('appointmentId');
	const [trigger, result] = useLazyGetPatientAppointmentByIdQuery();
	const toast = useToast({ duration: 3000, isClosable: true });

	useEffect(() => {
		if (appointmentId) trigger(appointmentId);
	}, [appointmentId]);

	useEffect(() => {
		if (result.error) toast({ title: 'Une erreur est survenue', status: 'error' });
	}, [result.error]);

	return (
		<SimulationLayout>
			<>
				{result.data && (
					<Text size={{ base: '2xl', md: '3xl' }} color="white" maxW="1000px">
						Merci pour cet échange, votre rendez-vous chez le Dr {result.data?.doctorId} le{' '}
						<Box as="span" color="green.400">
							{new Date(result.data.startDate).toLocaleDateString('fr-FR')}
						</Box>{' '}
						de{' '}
						<Box as="span" color="green.400">
							{new Date(result.data.startDate)
								.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
								.replace(':', 'h')}
						</Box>{' '}
						à{' '}
						<Box as="span" color="green.400">
							{new Date(result.data.endDate)
								.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
								.replace(':', 'h')}
						</Box>{' '}
						a bien été validé.
					</Text>
				)}
				<Link href="/dashboard">
					<SimulationButton>Accéder à mon espace patient</SimulationButton>
				</Link>
			</>
		</SimulationLayout>
	);
};

export default SimulationConfirmationContent;
