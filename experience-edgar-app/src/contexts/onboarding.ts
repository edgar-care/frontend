import { createContext, type Dispatch, type SetStateAction, useContext } from 'react';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

type OnboardingContextType =
	| undefined
	| { infos: PersonalInfos | undefined; setInfos: Dispatch<SetStateAction<PersonalInfos | undefined>> };

const OnboardingContext = createContext<OnboardingContextType>(undefined);

const useOnboardingContext = (): {
	infos: PersonalInfos | undefined;
	setInfos: Dispatch<SetStateAction<PersonalInfos | undefined>>;
} => {
	const context = useContext(OnboardingContext);
	if (!context) throw new Error('context used outside of provider.');
	return context;
};

export type { OnboardingContextType };
export { useOnboardingContext };
export default OnboardingContext;
