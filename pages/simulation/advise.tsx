import { Text, VStack, Stack, HStack, Button, Link } from '@chakra-ui/react';

import SimulationPage from 'components/pages/simulation/SimulationPage';
import GradientText from 'components/GradientText';

const Advise = (): JSX.Element => (
	<SimulationPage>
		<VStack spacing="128px">
			<Stack spacing="64px" maxW="650px">
				<Text size="2xl">
					Vous recevrez une <GradientText textValue="notification" /> lorsque le médecin aura répondu
				</Text>
				<Text size="2xl">
					En attendant sa réponse, je vous conseille de faire une sieste dans un endroit{' '}
					<GradientText textValue="calme" /> et <GradientText textValue="peu lumineux" />
				</Text>
			</Stack>
			<HStack spacing="64px">
				<Link href="/app/patient">
					<Button variant="primary" size="lg">
						Accéder à mon compte
					</Button>
				</Link>
			</HStack>
		</VStack>
	</SimulationPage>
);

export default Advise;
