import { Text, VStack } from '@chakra-ui/react';

import ColorText from 'components/ColorText';
import SimulationPage from 'components/pages/simulation/SimulationPage';

const Doctor = (): JSX.Element => (
	<SimulationPage>
		<VStack spacing="64px">
			<Text size="2xl">
				Merci pour cet <ColorText textValue="échange" />
			</Text>
			<Text size="2xl">Nous avons besoin d'un médecin, pour examiner votre analyse :</Text>
		</VStack>
	</SimulationPage>
);

export default Doctor;
