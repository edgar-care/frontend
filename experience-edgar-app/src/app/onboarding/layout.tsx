'use client';

import { useEffect, useState } from 'react';
import { useTimeout, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import OnboardingProvider from 'app/onboarding/OnboardingProvider';

import { useAuthContext } from 'contexts/auth';
import LoadingScreen from 'components/loader/LoadingScreen';

const OnboardingLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const { auth } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/start?redirect=/onboarding/personal');
	}, []);

	useTimeout(() => {
		setIsLoading(false);
	}, 1000);

	return (
		<OnboardingProvider>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<VStack
					p={{ base: '0px', sm: '16px', lg: '32px', xl: '32px 64px', '4xl': '64px 128px' }}
					w="100%"
					justify={{ base: 'start', lg: 'center' }}
					h="100%"
				>
					{children}
				</VStack>
			)}
		</OnboardingProvider>
	);
};

export default OnboardingLayout;
