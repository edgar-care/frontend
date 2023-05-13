import { Text, VStack, Stack, HStack, Button, Link, useBreakpointValue } from '@chakra-ui/react';

import SimulationPage from 'components/pages/simulation/SimulationPage';
import GradientText from 'components/GradientText';

const Advise = (): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<SimulationPage>
			<VStack spacing={{ base: '96px', md: '128px' }}>
				<Stack spacing="64px" maxW="650px">
					<Text size={{ base: 'boldXl', md: '2xl' }}>
						Vous recevrez une <GradientText textValue="notification" /> lorsque le médecin aura répondu
					</Text>
					<Text size={{ base: 'boldXl', md: '2xl' }}>
						En attendant sa réponse, je vous conseille de faire une sieste dans un endroit{' '}
						<GradientText textValue="calme" /> et <GradientText textValue="peu lumineux" />
					</Text>
				</Stack>
				<HStack spacing="64px">
					<Link href="/">
						<Button variant="primary" size={isMobile ? 'md' : 'lg'}>
							Accéder à mon compte
						</Button>
					</Link>
				</HStack>
			</VStack>
		</SimulationPage>
	);
};

export default Advise;
