'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const OnboardingPageContent = (): JSX.Element => {
	const router = useRouter();

	useEffect(() => {
		router.push('/onboarding/personal');
	}, []);

	return <></>;
};

export default OnboardingPageContent;
