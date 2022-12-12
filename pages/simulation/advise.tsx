import { Text, VStack, Stack, HStack, Button, Link } from '@chakra-ui/react';

import ColorText from 'components/GradientText';
import SimulationPage from 'components/pages/simulation/SimulationPage';

const Advise = (): JSX.Element => (
	<SimulationPage>
		<VStack spacing="128px">
			<Stack spacing="64px" maxW="650px">
				<Text size="2xl">
					Vous receverez une <ColorText textValue="notification" /> lorsque le medecin aura répondu
				</Text>
				<Text size="2xl">
					En attendant sa réponse, je vous conseille de faire une sieste dans un endroit{' '}
					<ColorText textValue="calme" /> et <ColorText textValue="peu lumineux" />
				</Text>
			</Stack>
			<HStack spacing="64px">
				<Link href="/app/patient">
					<Button variant="primary" size="lg">
						Acceder a mon compte
					</Button>
				</Link>
				<Button onClick={window.close} variant="secondary" size="lg">
					Fermer la page
				</Button>
			</HStack>
		</VStack>
	</SimulationPage>
);

export default Advise;
