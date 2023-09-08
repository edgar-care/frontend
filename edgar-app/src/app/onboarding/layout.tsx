'use client';

import { useEffect } from 'react';
import { VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { useAuthContext } from 'contexts/auth';

const OnboardingLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const auth = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/login');
	}, []);

	return (
		<VStack
			p={{ base: '0px', sm: '16px', lg: '64px', xl: '64px 128px', '4xl': '128px 256px' }}
			w="100%"
			h={{ base: '100%', lg: 'auto' }}
			justify={{ base: 'start', sm: 'center' }}
			minH={{ base: 'auto', sm: '100vh' }}
		>
			{children}
		</VStack>
	);
};

export default OnboardingLayout;
