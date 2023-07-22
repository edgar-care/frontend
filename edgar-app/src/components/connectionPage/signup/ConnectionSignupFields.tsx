'use client';

import { Box, Button, Stack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import ConnectionSignupInputs from './ConnectionSignupInputs';

const ConnectionSignupFields = (): JSX.Element => {
	const searchParams = useSearchParams();

	return (
		<VStack borderRadius="48px" w="100%" spacing="64px" p={{ base: '16px', sm: '64px' }}>
			<Text size={{ base: 'boldXl', xl: 'bold2xl' }} maxW="750px" align="center" id="edgar-signupPage-title-text">
				Un compte edgar vous permettra de suivre votre santé ainsi que prendre des rendez-vous pour vous et vos
				proches
			</Text>
			<VStack w="100%" spacing="64px">
				<ConnectionSignupInputs />
				<Stack
					direction={{ base: 'column', xl: 'row' }}
					align="center"
					w="100%"
					maxW="500px"
					justify="space-between"
				>
					<Text id="edgar-signupPage-login-title-text">Vous êtes déjà inscrit ?</Text>
					<Box w={{ base: '100%', xl: 'auto' }}>
						<Link href={`/login?${searchParams.toString()}`}>
							<Button variant="secondary" w="100%" id="edgar-signupPage-login-button">
								Connectez-vous
							</Button>
						</Link>
					</Box>
				</Stack>
			</VStack>
		</VStack>
	);
};

export default ConnectionSignupFields;
