import { VStack, Image, Text, Stack, Button } from '@chakra-ui/react';
import Link from 'next/link';

import ColorText from 'components/ColorText';

const Simulation = (): JSX.Element => (
	<VStack spacing="96px" paddingTop="32px">
		<Image src="/assets/edgar.care-logo.svg" alt="test" w={350} h="auto" />
		<Stack spacing="96px">
			<Stack spacing="8px">
				<Text size="3xl">
					Bienvenue sur <ColorText textValue="edgar.care" />
				</Text>
				<Text size="boldXl">Votre assistant medical numérique</Text>
			</Stack>
			<VStack spacing="64px" width="100%">
				<VStack spacing="32px" width="100%">
					<Text textAlign="left" fontWeight={700} fontSize="28px" width="100%">
						Vous allez commencer votre <ColorText textValue="analyse" />
					</Text>
					<Stack spacing="16px" borderRadius="16px" bg="#E8DAF2" padding="24px">
						<Text size="boldLg">Cette session, n’a pas pour but de diagnostiquer une maladie.</Text>
						<Text size="boldLg">
							À l’issue de la session, votre pré-diagnostic sera transmis à un médecin pour être examiné.
						</Text>
						<Text size="boldLg">Une réponse vous sera fournie dans un délai maximum de 48h.</Text>
					</Stack>
				</VStack>
				<Link href="/simulation/infos">
					<Button variant="primary" size="xl">
						Commencer mon analyse
					</Button>
				</Link>
			</VStack>
		</Stack>
	</VStack>
);

export default Simulation;
