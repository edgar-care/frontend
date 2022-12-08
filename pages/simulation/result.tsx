import { Text, VStack, Stack } from '@chakra-ui/react';

import ColorText from 'components/ColorText';
import SimulationPage from 'components/pages/simulation/SimulationPage';

const Result = (): JSX.Element => (
	<SimulationPage>
		<VStack maxW="750px">
			<Stack spacing="64px">
				<Text size="2xl">
					Le médecin que vous avez sélectionné a examiné votre <ColorText textValue="analyse" />
				</Text>
				<Text size="2xl">
					Un rendez-vous est <ColorText textValue="nécessaire" /> pour déterminer de manière plus précise les
					causes de vos symptômes
				</Text>
			</Stack>
		</VStack>
	</SimulationPage>
);

export default Result;
