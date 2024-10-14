'use client';

import { VStack, Text, Stack, Box, Link, Button } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

import ConnectionSignupInputs from 'components/app/connectionPage/signup/ConnectionSignupInputs';

const ConnectionSignupFields = (): JSX.Element => {
	const searchParams = useSearchParams();

	return (
		<VStack borderRadius="48px" w="100%" spacing="64px" p={{ base: '16px', sm: '64px' }}>
			<Text size={{ base: 'boldXl', xl: 'bold2xl' }} maxW="750px" align="center">
				Un compte edgar vous permettra de suivre votre santé ainsi que prendre des rendez-vous pour vous et vos
				proches
			</Text>
			<VStack w="100%" spacing="48px">
				<ConnectionSignupInputs />
				<Stack
					direction={{ base: 'column', xl: 'row' }}
					align="center"
					w="100%"
					maxW="500px"
					justify="space-between"
				>
					<Text>Vous êtes déjà inscrit ?</Text>
					<Box w={{ base: '100%', xl: 'auto' }}>
						<Link href={`/login?${searchParams.toString()}`}>
							<Button variant="secondary" w="100%">
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
