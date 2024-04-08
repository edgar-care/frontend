'use client';

import { useEffect } from 'react';
import { Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

import { useAuthContext } from 'contexts/auth';

const SimulationStartPageContent = (): JSX.Element => {
	const auth = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/simulation/connection');
	}, []);

	return (
		<SimulationLayout>
			<>
				<Text size={{ base: '2xl', md: '3xl' }} color="white" maxW="1000px">
					Voilà, tout est prêt pour moi. Vous pouvez dès maitenant commencer votre simulation.
				</Text>
				<Box w="100%" textAlign="end">
					<Link href="/simulation/chat">
						<SimulationButton text="Commencer ma simulation" />
					</Link>
				</Box>
			</>
		</SimulationLayout>
	);
};

export default SimulationStartPageContent;
