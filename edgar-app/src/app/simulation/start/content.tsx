'use client';

import { useEffect } from 'react';
import { Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

import { useAuthContext } from 'contexts/auth';

import { useInitiateDiagnosticMutation } from 'services/request/simulation';
import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

const SimulationStartPageContent = (): JSX.Element => {
	const [triggerInitiateDiagnostic] = useInitiateDiagnosticMutation();
	const { data: medicalInfo, isLoading } = useGetPatientMedicalFolderQuery();

	const { auth } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/simulation/connection');
		else if (!isLoading && !medicalInfo) router.push('/onboarding/personal?redirect=simulation/start');
	}, [isLoading]);

	return (
		<SimulationLayout>
			<>
				<Text
					size={{ base: 'boldXl', md: 'bold2xl', xl: '3xl' }}
					color="white"
					maxW="1000px"
					id="edgar-simulationStartPage-title-text"
				>
					Voilà, tout est prêt pour moi. Vous pouvez dès maitenant commencer votre simulation.
				</Text>
				<Box w="100%" textAlign="end">
					<Box
						as="span"
						onClick={() => {
							triggerInitiateDiagnostic()
								.unwrap()
								.then((response) => router.push(`/simulation/chat?sessionId=${response}`));
						}}
					>
						<SimulationButton id="edgar-simulationStartPage-startSimulation-button">
							Commencer ma simulation
						</SimulationButton>
					</Box>
				</Box>
			</>
		</SimulationLayout>
	);
};

export default SimulationStartPageContent;
