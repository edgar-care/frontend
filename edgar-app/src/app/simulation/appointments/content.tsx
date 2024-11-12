'use client';

import { useEffect } from 'react';
import { HStack, useBreakpointValue, useToast, VStack } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useAuthContext } from 'contexts/auth';

import SimulationChatEdgarCard from 'components/simulationPages/chat/SimulationChatEdgarCard';
import SimulationAppointments from 'components/simulationPages/appointments/SimulationAppointments';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

const SimulationAppointmentsPageContent = (): JSX.Element => {
	const { data: medicalInfo, isLoading } = useGetPatientMedicalFolderQuery();

	const { auth } = useAuthContext();
	const router = useRouter();
	const isTablet = useBreakpointValue({ base: true, '2xl': false });

	const searchParams = useSearchParams();

	const toast = useToast({ duration: 3000, isClosable: true });

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/simulation/connection');
		else if (!isLoading && !medicalInfo) router.push('/onboarding/personal?redirect=simulation/appointments');
		if (!searchParams.get('sessionId')) toast({ title: 'Une erreur est survenue', status: 'error' });
	}, []);

	return (
		<>
			{isTablet ? (
				<VStack
					bg="white"
					borderRadius={{ base: '0px', sm: '48px' }}
					w="100%"
					border={{ base: '0px', sm: '2px solid' }}
					borderColor={{ sm: 'blue.200' }}
					align="stretch"
					spacing="0px"
					h="100%"
				>
					<SimulationAppointments />
				</VStack>
			) : (
				<HStack
					bg="white"
					borderRadius="48px"
					w="100%"
					minH="100%"
					border="2px solid"
					borderColor="blue.200"
					spacing="0px"
				>
					<SimulationAppointments />
					<SimulationChatEdgarCard type="START" />
				</HStack>
			)}
		</>
	);
};

export default SimulationAppointmentsPageContent;
