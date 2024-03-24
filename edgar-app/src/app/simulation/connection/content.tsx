'use client';

import { Text, HStack, Box, Button } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';

const SimulationConnectionPageContent = (): JSX.Element => (
	<SimulationLayout>
		<>
			<Text size={{ base: '2xl', md: '3xl' }} color="white" maxW="1000px">
				Afin de vous poser les bonnes questions, j’aurai besoin de connaître vos informations de santé. <br />
				Pour cela, connectez-vous ou créez un compte.
			</Text>
			<Box w="100%">
				<HStack justify="end" spacing="16px">
					<Button variant="primaryBordered" size="customLg">
						<Link href="/signup?redirect=/simulation/start">Créer un compte</Link>
					</Button>
					<Button variant="secondary" size="customLg">
						<Link href="/login?redirect=/simulation/start">Me connecter à mon compte</Link>
					</Button>
				</HStack>
			</Box>
		</>
	</SimulationLayout>
);

export default SimulationConnectionPageContent;
