import { VStack, Image, Text, Stack, Button } from '@chakra-ui/react';
import Link from 'next/link';

import ColorText from 'components/GradientText';

const Simulation = (): JSX.Element => (
	<VStack spacing="96px" py="32px" px={{ base: '32px', sm: '64px' }}>
		<Image src="/assets/edgar.care-logo.svg" alt="test" w={{ base: '200px', sm: '300px', md: '350px' }} h="auto" />
		<Stack spacing="96px">
			<Stack spacing="8px">
				<Text size={{ base: '2xl', sm: '3xl' }}>
					Bienvenue sur <ColorText textValue="edgar.care" />
				</Text>
				<Text size="boldXl">Votre assistant medical numérique</Text>
			</Stack>
			<VStack spacing="64px" width="100%">
				<VStack spacing="32px" width="100%">
					<Text textAlign="left" size="2xl" width="100%">
						Vous allez commencer votre <ColorText textValue="analyse" />
					</Text>
					<Stack spacing="16px" borderRadius="16px" bg="purple.100" padding="24px">
						<Text size="boldLg">Cette session, n’a pas pour but de diagnostiquer une maladie.</Text>
						<Text size="boldLg">
							À l’issue de la session, votre pré-diagnostic sera transmis à un médecin pour être examiné.
						</Text>
						<Text size="boldLg">Une réponse vous sera fournie dans un délai maximum de 48h.</Text>
					</Stack>
				</VStack>
				<Link href="/simulation/infos">
					<Button variant="primary" size={{ base: 'md', sm: 'lg', md: 'xl' }}>
						Commencer mon analyse
					</Button>
				</Link>
			</VStack>
		</Stack>
	</VStack>
);

export default Simulation;
