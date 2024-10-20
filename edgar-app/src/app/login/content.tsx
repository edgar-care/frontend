'use client';

import { useEffect, useState } from 'react';
import { HStack, useBreakpointValue, useTimeout, VStack } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

import ConnectionEdgarCard from 'components/connectionPage/ConnectionEdgarCard';
import ConnectionLoginFields from 'components/connectionPage/login/ConnectionLoginFields';

import { useAuthContext } from 'contexts/auth';
import LoadingScreen from 'components/loader/LoadingScreen';

const LoginPageContent = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

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

	useTimeout(() => {
		setIsLoading(false);
	}, 1000);

	return (
		<>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<VStack
					p={{ base: '0px', sm: '16px', lg: '64px', xl: '128px', '4xl': '128px 256px' }}
					w="100%"
					h={{ base: '100%', lg: 'auto' }}
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
							<ConnectionEdgarCard />
							<ConnectionLoginFields />
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
							<ConnectionEdgarCard />
							<ConnectionLoginFields />
						</HStack>
					)}
				</VStack>
			)}
		</>
	);
};

export default LoginPageContent;
