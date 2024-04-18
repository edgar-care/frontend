'use client';

import { useEffect } from 'react';
import { VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import OnboardingProvider from 'app/onboarding/OnboardingProvider';

import { useAuthContext } from 'contexts/auth';

const OnboardingLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const auth = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/login?redirect=/onboarding/personal');
	}, []);

	return (
		<OnboardingProvider>
			<VStack
				p={{ base: '0px', sm: '16px', lg: '32px', xl: '32px 64px', '4xl': '64px 128px' }}
				w="100%"
				justify={{ base: 'start', lg: 'center' }}
				h="100%"
			>
				{children}
			</VStack>
		</OnboardingProvider>
	);
};

export default OnboardingLayout;
