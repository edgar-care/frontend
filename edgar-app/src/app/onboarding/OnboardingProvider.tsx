'use client';

import { SetStateAction, useEffect, useState } from 'react';

import OnboardingContext from 'contexts/onboarding';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [onboardingInfos, setOnboardingInfos] = useState<PersonalInfos | undefined>(undefined);

	useEffect(() => {
		if (typeof window !== 'undefined' && window.localStorage) {
			const storedInfos = window.localStorage.getItem('onboardingInfos');
			if (storedInfos) setOnboardingInfos(JSON.parse(storedInfos));
		} else console.error('Local storage is not available');
	}, []);

	const onSetOnboardingInfos = (value: SetStateAction<PersonalInfos | undefined>) => {
		setOnboardingInfos(value);
		if (typeof window !== 'undefined' && window.localStorage)
			window.localStorage.setItem('onboardingInfos', JSON.stringify(value));
		else console.error('Local storage is not available');
	};

	return (
		<OnboardingContext.Provider value={{ infos: onboardingInfos, setInfos: onSetOnboardingInfos }}>
			{children}
		</OnboardingContext.Provider>
	);
};

export default OnboardingProvider;
