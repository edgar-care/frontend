import basicFetch from 'utils/basicFetch';

import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

import { type MessageResponse } from 'types/MessageResponse';
import { type MedicalInfos } from 'types/onboarding/OnboardingInfos';

const onSubmitMedicalInfos = async (
	medicalInfos: MedicalInfos,
	router: AppRouterInstance,
): Promise<MessageResponse> => {
	try {
		// TODO: update the URL of the backend
		const response = await basicFetch(
			'/???',
			'POST',
			JSON.stringify(medicalInfos),
			router,
			'/dashboard/connection/login?redirect=/onboarding/medical',
		);

		if (response.status === 201)
			return { title: 'Vos informations médicales ont été soumises avec succès', status: 'success' };

		return { title: "Erreur lors de l'envoi des informations médicales", status: 'error' };
	} catch (error) {
		return { title: "Erreur lors de l'envoi des informations médicales", status: 'error' };
	}
};

export default onSubmitMedicalInfos;
