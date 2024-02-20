'use client';

import { Text } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

const SimulationStartContent = (): JSX.Element => (
	<SimulationLayout>
		<>
			<Text size="3xl" color="white" maxW="1000px">
				Voilà, tout est prêt pour moi. Vous pouvez dès maintenant commencer votre simulation.
			</Text>
			<Link href="chat">
				<SimulationButton>Commencer ma simulation</SimulationButton>
			</Link>
		</>
	</SimulationLayout>
);

export default SimulationStartContent;
