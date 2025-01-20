'use client';

import { Text, Box } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

const SimulationContent = (): JSX.Element => (
	<SimulationLayout>
		<>
			<Text
				size={{ base: 'boldXl', md: 'bold2xl', lg: '3xl' }}
				color="white"
				maxW="1000px"
				id="edgar-simulationPage-title-text"
			>
				Bienvenue dans votre simulation, je m’appelle Edgar et je serai votre assistant tout au long de cette
				simulation.
			</Text>
			<Box w="100%" textAlign="end">
				<Link href="/simulation/conditions">
					<SimulationButton id="edgar-simulationPage-next-button">Continuer</SimulationButton>
				</Link>
			</Box>
		</>
	</SimulationLayout>
);

export default SimulationContent;
