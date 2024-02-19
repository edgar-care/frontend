'use client';

import { Text, HStack, Box, Button } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';

const Connection = (): JSX.Element => (
	<SimulationLayout>
		<>
			<Text size="3xl" color="white" maxW="1000px">
				Afin de vous poser les bonnes questions, j’aurai besoin de connaître vos informations de santé. <br />
				Pour cela, connectez-vous ou créez un compte.
			</Text>
			<Box w="100%">
				<Link href="/simulation/connection">
					<HStack w="100%" justify="end" spacing="16px">
						<Button variant="primaryBordered">
							<Link href="app.edgar-sante.fr/signup?redirect=/simulation/start">Créer un compte</Link>
						</Button>
						<Button variant="secondary">
							<Link href="app.edgar-sante.fr/login?redirect=/simulation/start">
								Me connecter à mon compte
							</Link>
						</Button>
					</HStack>
				</Link>
			</Box>
		</>
	</SimulationLayout>
);

export default Connection;
