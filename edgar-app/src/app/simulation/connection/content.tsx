'use client';

import { Text, HStack, Button } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';

const SimulationConnectionContent = (): JSX.Element => (
	<SimulationLayout>
		<>
			<Text size="3xl" color="white" maxW="1000px">
				Afin de vous poser les bonnes questions, j’aurai besoin de connaître vos informations de santé. <br />
				Pour cela, connectez-vous ou créez un compte.
			</Text>
			<HStack spacing="16px">
				<Link href="/signup?redirect=/simulation/start">
					<Button variant="primaryBordered" size="customLg">
						Créer un compte
					</Button>
				</Link>
				<Link href="/login?redirect=/simulation/start">
					<Button variant="secondary" size="customLg">
						Me connecter à mon compte
					</Button>
				</Link>
			</HStack>
		</>
	</SimulationLayout>
);

export default SimulationConnectionContent;
