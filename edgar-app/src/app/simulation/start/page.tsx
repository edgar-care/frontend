'use client';

import { Text, HStack, Icon, Box } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';

import RightCircleArrowIcon from 'assets/icons/Arrow/RightCircleArrowIcon';

const Start = (): JSX.Element => (
	<SimulationLayout>
		<>
			<Text size="3xl" color="white" maxW="1000px">
				Voilà, tout est prêt pour moi. Vous pouvez dès maitenant commencer votre simulation.
			</Text>
			<Box w="100%">
				<Link href="/simulation/chat">
					<HStack w="100%" justify="end">
						<Text size="boldXl" color="white">
							Commencer ma simulation
						</Text>
						<Icon as={RightCircleArrowIcon} w="24px" h="24px" color="white" />
					</HStack>
				</Link>
			</Box>
		</>
	</SimulationLayout>
);

export default Start;
