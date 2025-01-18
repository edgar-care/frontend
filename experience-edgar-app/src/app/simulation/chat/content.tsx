'use client';

import { useEffect, useState } from 'react';
import { HStack, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import SimulationChat from 'components/simulationPages/chat/SimulationChat';
import SimulationChatEdgarCard from 'components/simulationPages/chat/SimulationChatEdgarCard';

import { type SimulationChatEdgarCardType } from 'types/simulation/chat/SimulationChatEdgarCardType';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';
import { useAuthContext } from 'contexts/auth';

const SimulationChatContent = (): JSX.Element => {
	const { data: medicalInfo, isLoading } = useGetPatientMedicalFolderQuery();
	const [edgarState, setEdgarState] = useState<SimulationChatEdgarCardType>('START');

	const { auth } = useAuthContext();

	const router = useRouter();

	const isTablet = useBreakpointValue({ base: true, lg: false });

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/simulation/connection');
		else if (!isLoading && !medicalInfo) router.push('/onboarding/personal?redirect=simulation/chat');
	}, [isLoading]);

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
					spacing="16px"
					h="100%"
				>
					<SimulationChat edgarState={edgarState} setEdgarState={setEdgarState} />
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
					<SimulationChat edgarState={edgarState} setEdgarState={setEdgarState} />
					<SimulationChatEdgarCard type={edgarState} />
				</HStack>
			)}
		</>
	);
};

export default SimulationChatContent;
