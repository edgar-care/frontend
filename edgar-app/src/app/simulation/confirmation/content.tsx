'use client';

import { Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

import { useLazyGetPatientAppointmentByIdQuery } from 'services/request/appointments';
import { useEffect } from 'react';

const SimulationConfirmationContent = (): JSX.Element => {
	const searchParams = useSearchParams();
	const search = searchParams.get('appointmentId');
	const [trigger, result] = useLazyGetPatientAppointmentByIdQuery();

	useEffect(() => {
		if (search) {
			trigger(search);
		}
	}, [search]);

	return (
		<SimulationLayout>
			<>
				{result.data && (
					<Text size="3xl" color="white" maxW="1000px">
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
