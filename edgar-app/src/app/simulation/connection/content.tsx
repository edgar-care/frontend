'use client';

import { Text, Box, Button, Stack } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';

const SimulationConnectionPageContent = (): JSX.Element => (
	<SimulationLayout>
		<>
			<Text
				size={{ base: 'boldXl', md: 'bold2xl', xl: '3xl' }}
				color="white"
				maxW="1000px"
				id="edgar-simulationConnectionPage-title-text"
			>
				Afin de vous poser les bonnes questions, j’aurai besoin de connaître vos informations de santé. <br />
				Pour cela, connectez-vous ou créez un compte.
			</Text>
			<Box w="100%">
				<Stack direction={{ base: 'column', md: 'row' }} align="end" justify="end" spacing="16px">
					<Box as="span" w={{ base: '100%', sm: 'auto' }}>
						<Link href="/signup?redirect=/simulation/start">
							<Button
								variant="primaryBordered"
								size={{ base: 'customMd', md: 'customLg' }}
								w="100%"
								id="edgar-simulationConnectionPage-signup-button"
							>
								Créer un compte
							</Button>
						</Link>
					</Box>
					<Box as="span" w={{ base: '100%', sm: 'auto' }}>
						<Link href="/login?redirect=/simulation/start">
							<Button
								variant="secondary"
								size={{ base: 'customMd', md: 'customLg' }}
								w="100%"
								id="edgar-simulationConnectionPage-login-button"
							>
								Me connecter à mon compte
							</Button>
						</Link>
					</Box>
				</Stack>
			</Box>
		</>
	</SimulationLayout>
);

export default SimulationConnectionPageContent;
