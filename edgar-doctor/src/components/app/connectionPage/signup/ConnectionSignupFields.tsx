'use client';

import { VStack, Text, Stack, Box, Link, Button } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

import ConnectionSignupInputs from 'components/app/connectionPage/signup/ConnectionSignupInputs';

const ConnectionSignupFields = (): JSX.Element => {
	const searchParams = useSearchParams();

	return (
		<VStack borderRadius="48px" w="100%" spacing="64px" p={{ base: '16px', sm: '64px' }}>
			<VStack w="100%" align="start" spacing="0px">
				<Text size="3xl">Inscription</Text>
			<Text size="boldXl" maxW="750px" id="edgar-loginPage-title-text">
				Un compte edgar vous permettra de suivre vos{' '}
				<Box as="span" fontWeight="600" color="green.600">
					patients
				</Box>
				,{' '}
				<Box as="span" fontWeight="600" color="green.600">
					rendez-vous
				</Box>{' '}
				ainsi que de valider vos{' '}
				<Box as="span" fontWeight="600" color="green.600">
					pré-diagnostics
				</Box>
				.
			</Text>
			</VStack>
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
