'use client';

import { Text, HStack, Icon, Box } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';

import RightCircleArrowIcon from 'assets/icons/Arrow/RightCircleArrowIcon';

const SimulationContent = (): JSX.Element => (
	<SimulationLayout>
		<>
			<Text size="3xl" color="white" maxW="1000px">
				Bienvenue dans votre simulation, je m’appel Edgar et je serai votre assistant tout au long de cette
				simulation.
			</Text>
			<Box w="100%">
				<Link href="/simulation/conditions">
					<HStack w="100%" justify="end">
						<Text size="boldXl" color="white">
							Continuer
						</Text>
						<Icon as={RightCircleArrowIcon} w="24px" h="24px" color="white" />
					</HStack>
				</Link>
			</Box>
		</>
	</SimulationLayout>
);

export default SimulationContent;
