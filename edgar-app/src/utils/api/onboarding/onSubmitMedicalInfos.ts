import basicFetch from 'utils/basicFetch';

import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

import { type MessageResponse } from 'types/MessageResponse';
import { type MedicalInfos } from 'types/onboarding/OnboardingInfos';

const onSubmitMedicalInfos = async (
	medicalInfos: MedicalInfos,
	router: AppRouterInstance,
): Promise<MessageResponse> => {
	try {
		const response = await basicFetch(
			'onboarding/health',
			'POST',
			JSON.stringify({
				patients_allergies: medicalInfos.allergies,
				patients_illness: medicalInfos.diseases,
				patients_treatments: medicalInfos.treatmentsInProgress,
				patients_primary_doctor: medicalInfos.primaryDoctorName,
			}),
			router,
			'/login?redirect=/onboarding/medical',
		);

		if (response.status === 201)
			return { title: 'Vos informations médicales ont été soumises avec succès', status: 'success' };

		return { title: "Erreur lors de l'envoi des informations médicales", status: 'error' };
	} catch (error) {
		return { title: "Erreur lors de l'envoi des informations médicales", status: 'error' };
	}
};

export default onSubmitMedicalInfos;
