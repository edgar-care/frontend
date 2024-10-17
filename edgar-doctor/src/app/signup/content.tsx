'use client';

import { useEffect } from 'react';
import { HStack, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

import ConnectionEdgarCard from 'components/app/connectionPage/ConnectionEdgarCard';
import ConnectionSignupFields from 'components/app/connectionPage/signup/ConnectionSignupFields';

import { useAuthContext } from 'contexts/auth';

const SignupPageContent = (): JSX.Element => {
	const auth = useAuthContext();
	const searchParams = useSearchParams();
	const router = useRouter();

	const isTablet = useBreakpointValue({ base: true, lg: false });

	useEffect(() => {
		if (auth.checkToken().status === 'success')
			router.push(
				searchParams.get('redirect') ? searchParams.get('redirect')! : `/dashboard?${searchParams.toString()}`,
			);
	}, []);

	return (
		<VStack
			p={{ base: '0px', sm: '16px', lg: '64px', xl: '128px', '4xl': '128px 256px' }}
			w="100%"
			h={{ base: '100px', lg: 'auto' }}
			justify={{ base: 'start', sm: 'center' }}
			minH={{ base: 'auto', sm: '100vh' }}
		>
			{isTablet ? (
				<VStack
					bg="white"
					borderRadius={{ base: '0px', sm: '48px' }}
					w="100%"
					border={{ base: '0px', sm: '2px solid' }}
					borderColor={{ sm: 'blue.200' }}
					align="stretch"
					spacing="16px"
					h="100%"
				>
					<ConnectionEdgarCard title={'Bienvenue sur la plateforme edgar'} />
					<ConnectionSignupFields />
				</VStack>
			) : (
				<HStack
					bg="white"
					borderRadius="48px"
					w="100%"
					border="2px solid"
					borderColor="blue.200"
					align="stretch"
					spacing="0px"
					maxW="1750px"
				>
					<ConnectionSignupFields />
					<ConnectionEdgarCard title={'Bienvenue sur la plateforme edgar'} />
				</HStack>
			)}
		</VStack>
	);
};

export default SignupPageContent;
