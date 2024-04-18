'use client';

import { Text, Box } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

const SimulationContent = (): JSX.Element => (
	<SimulationLayout>
		<>
			<Text size={{ base: '2xl', md: '3xl' }} color="white" maxW="1000px">
				Bienvenue dans votre simulation, je m’appelle Edgar et je serai votre assistant tout au long de cette
				simulation.
			</Text>
			<Box w="100%" textAlign="end">
				<Link href="/simulation/conditions">
					<SimulationButton>Continuer</SimulationButton>
				</Link>
			</Box>
		</>
	</SimulationLayout>
);

export default SimulationContent;
