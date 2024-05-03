'use client';

import { useEffect } from 'react';
import { Text, Box, useToast, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

import { useLazyGetPatientAppointmentByIdQuery } from 'services/request/appointments';
import { useLazyGetDoctorByIdQuery } from 'services/request/doctor';
import { useGetPatientMedicalFolderQuery } from 'services/request/medical';
import { useAuthContext } from 'contexts/auth';

const SimulationConfirmationContent = (): JSX.Element => {
	const { data: medicalInfo, isLoading } = useGetPatientMedicalFolderQuery();
	const [triggerAppointment, resultAppointment] = useLazyGetPatientAppointmentByIdQuery();
	const [triggerDoctor, resultDoctor] = useLazyGetDoctorByIdQuery();

	const auth = useAuthContext();
	const router = useRouter();
	const searchParams = useSearchParams();
	const appointmentId = searchParams.get('appointmentId');

	const toast = useToast({ duration: 3000, isClosable: true });

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/simulation/connection');
		else if (!isLoading && !medicalInfo) router.push('/onboarding/personal?redirect=simulation/appointments');
	}, [isLoading]);

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
					<Text
						size={{ base: 'boldXl', md: 'bold2xl', xl: '3xl' }}
						color="white"
						maxW="1000px"
						id="edgar-simulationConfirmationPage-title-text"
					>
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
					<SimulationButton id="edgar-simulationConfirmationPage-patientArea-button">
						Accéder à mon espace patient
					</SimulationButton>
				</Link>
			</VStack>
		</SimulationLayout>
	);
};

export default SimulationConfirmationContent;
