'use client';

import { useEffect } from 'react';
import { Text, Box, useToast, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

import { useLazyGetPatientAppointmentByIdQuery } from 'services/request/appointments';
import { useLazyGetDoctorByIdQuery } from 'services/request/doctor';

const SimulationConfirmationContent = (): JSX.Element => {
	const searchParams = useSearchParams();
	const appointmentId = searchParams.get('appointmentId');
	const [triggerAppointment, resultAppointment] = useLazyGetPatientAppointmentByIdQuery();
	const [triggerDoctor, resultDoctor] = useLazyGetDoctorByIdQuery();
	const toast = useToast({ duration: 3000, isClosable: true });

	useEffect(() => {
		if (appointmentId) triggerAppointment(appointmentId);
	}, [appointmentId]);

	useEffect(() => {
		if (resultAppointment.data) triggerDoctor(resultAppointment.data.doctorId);
	}, [resultAppointment]);

	useEffect(() => {
		if (resultAppointment.error) toast({ title: 'Une erreur est survenue', status: 'error' });
		if (resultDoctor.error) toast({ title: 'Une erreur est survenue', status: 'error' });
	}, [resultAppointment.error, resultDoctor.error]);

	return (
		<SimulationLayout>
			<VStack w="100%" align="end" spacing="64px">
				{resultAppointment.data && (
					<Text size={{ base: '2xl', md: '3xl' }} color="white" maxW="1000px">
						Merci pour cet échange, votre rendez-vous chez le Dr {resultDoctor.data?.name} le{' '}
						<Box as="span" color="green.400">
							{new Date(resultAppointment.data.startDate).toLocaleDateString('fr-FR')}
						</Box>{' '}
						de{' '}
						<Box as="span" color="green.400">
							{new Date(resultAppointment.data.startDate)
								.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
								.replace(':', 'h')}
						</Box>{' '}
						à{' '}
						<Box as="span" color="green.400">
							{new Date(resultAppointment.data.endDate)
								.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
								.replace(':', 'h')}
						</Box>{' '}
						a bien été validé.
					</Text>
				)}
				<Link href="/dashboard">
					<SimulationButton>Accéder à mon espace patient</SimulationButton>
				</Link>
			</VStack>
		</SimulationLayout>
	);
};

export default SimulationConfirmationContent;
