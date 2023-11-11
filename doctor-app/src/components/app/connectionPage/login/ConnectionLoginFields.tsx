'use client';

import { Box, Text, VStack } from '@chakra-ui/react';

import ConnectionLoginInputs from 'components/app/connectionPage/login/ConnectionLoginInputs';

const ConnectionLoginFields = (): JSX.Element => (
	<VStack borderRadius="48px" w="100%" spacing="64px" p={{ base: '16px', sm: '64px' }}>
		<Text size={{ base: 'boldXl', xl: 'bold2xl' }} maxW="750px" align="center" id="edgar-loginPage-title-text">
			Connectez-vous avec votre compte pour accéder à votre{' '}
			<Box as="span" fontWeight="600" color="green.600">
				espace patient
			</Box>
			, gérer vos{' '}
			<Box as="span" fontWeight="600" color="green.600">
				rendez-vous
			</Box>{' '}
			et{' '}
			<Box as="span" fontWeight="600" color="green.600">
				bien plus
			</Box>
		</Text>
		<VStack w="100%" spacing="64px">
			<ConnectionLoginInputs />
		</VStack>
	</VStack>
);

export default ConnectionLoginFields;
