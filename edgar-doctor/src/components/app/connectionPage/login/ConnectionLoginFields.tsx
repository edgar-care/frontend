'use client';

import { Box, Button, Stack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import ConnectionLoginInputs from 'components/app/connectionPage/login/ConnectionLoginInputs';

const ConnectionLoginFields = (): JSX.Element => {
	const searchParams = useSearchParams();

	return (
		<VStack borderRadius="48px" w="100%" spacing="64px" p={{ base: '16px', sm: '64px' }}>
			<VStack w="100%" align="start" spacing="0px">
				<Text size="3xl">Connexion</Text>
				<Text size="boldXl" maxW="750px" id="edgar-loginPage-title-text">
					Connectez-vous avec votre compte pour accéder à votre{' '}
					<Box as="span" fontWeight="600" color="green.600">
						espace médecin
					</Box>
					, gérer vos{' '}
					<Box as="span" fontWeight="600" color="green.600">
						rendez-vous
					</Box>
					, vos{' '}
					<Box as="span" fontWeight="600" color="green.600">
						patients
					</Box>{' '}
					et{' '}
					<Box as="span" fontWeight="600" color="green.600">
						bien plus
					</Box>
					.
				</Text>
			</VStack>
			<VStack w="100%" spacing="64px">
				<ConnectionLoginInputs />
				<Stack
					direction={{ base: 'column', xl: 'row' }}
					align="center"
					w="100%"
					maxW="500px"
					justify="space-between"
				>
					<Text id="edgar-loginPage-signup-title-text">Vous n'êtes pas encore inscrit ?</Text>
					<Box w={{ base: '100%', xl: 'auto' }}>
						<Link href={`/signup?${searchParams.toString()}`}>
							<Button variant="secondary" w="100%" id="edgar-loginPage-signup-button">
								Créez un compte
							</Button>
						</Link>
					</Box>
				</Stack>
			</VStack>
		</VStack>
	);
};

export default ConnectionLoginFields;
