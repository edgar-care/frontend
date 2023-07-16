'use client';

import { Box, Button, Stack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import ConnectionLoginInputs from './ConnectionLoginInputs';

const ConnectionLoginFields = (): JSX.Element => {
	const searchParams = useSearchParams();

	return (
		<VStack borderRadius="48px" w="100%" spacing="64px" p={{ base: '16px', sm: '64px' }}>
			<Text size={{ base: 'boldXl', xl: 'bold2xl' }} maxW="750px" align="center">
				Connectez-vous avec votre compte pour accéder à votre espace patient, gérer vos rendez-vous et bien plus
			</Text>
			<VStack w="100%" spacing="64px">
				<ConnectionLoginInputs />
				<Stack
					direction={{ base: 'column', xl: 'row' }}
					align="center"
					w="100%"
					maxW="500px"
					justify="space-between"
				>
					<Text>Vous n'êtes pas encore inscrit ?</Text>
					<Box w={{ base: '100%', xl: 'auto' }}>
						<Link href={`/signup?${searchParams.toString()}`}>
							<Button variant="secondary" w="100%">
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
