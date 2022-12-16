import { Text, VStack, Stack, Button, Link } from '@chakra-ui/react';

import ColorText from 'components/GradientText';
import SimulationPage from 'components/pages/simulation/SimulationPage';

const Connection = (): JSX.Element => (
	<SimulationPage>
		<VStack spacing={{ base: '96px', md: '128px' }} pb={{ base: '64px', md: '0px' }}>
			<Stack spacing="64px" maxW="670px">
				<Text size={{ base: 'boldXl', md: '2xl' }}>
					Ce médecin va examiner votre analyse sous <ColorText textValue="maximum 48h" />
				</Text>
				<Text size={{ base: 'boldXl', md: '2xl' }}>
					Pour que je puisse revenir vers vous, il me faudrait un moyen de communication
				</Text>
			</Stack>
			<Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '16px', md: '64px' }}>
				<Link href="/connection/signup?redirect=/simulation/advise">
					<Button variant="primary" size="lg" w="100%">
						Créer un compte
					</Button>
				</Link>
				<Link href="/connection/login?redirect=/simulation/advise">
					<Button variant="secondary" size="lg" w="100%">
						Se connecter
					</Button>
				</Link>
			</Stack>
		</VStack>
	</SimulationPage>
);

export default Connection;
