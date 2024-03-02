'use client';

import { useState } from 'react';

import OnboardingContext from 'contexts/onboarding';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [onboardingInfos, setOnboardingInfos] = useState<PersonalInfos | undefined>(undefined);

	return (
		<OnboardingContext.Provider value={{ infos: onboardingInfos, setInfos: setOnboardingInfos }}>
			{children}
		</OnboardingContext.Provider>
	);
};

export default OnboardingProvider;
