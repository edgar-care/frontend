import basicFetch from 'utils/basicFetch';

import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

import { type MessageResponse } from 'types/MessageResponse';
import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const onSubmitPersonalInfos = async (
	personalInfos: PersonalInfos,
	router: AppRouterInstance,
): Promise<MessageResponse> => {
	try {
		// TODO: update the URL of the backend
		const response = await basicFetch(
			'/???',
			'POST',
			JSON.stringify(personalInfos),
			router,
			'/dashboard/connection/login?redirect=/onboarding/personal',
		);

		if (response.status === 201) return { title: 'Personal infos submitted successfully', status: 'success' };

		return { title: 'Error while submitting personal infos', status: 'error' };
	} catch (error) {
		return { title: 'Error while submitting personal infos', status: 'error' };
	}
};

export default onSubmitPersonalInfos;
