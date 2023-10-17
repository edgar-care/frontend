import basicFetch from 'utils/basicFetch';

import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

import { type MessageResponse } from 'types/MessageResponse';

const cancelAppointment = async (id: string, router: AppRouterInstance): Promise<MessageResponse> => {
	try {
		const response = await basicFetch(
			'???',
			'DELETE',
			JSON.stringify({}),
			router,
			'/dashboard/connection/login?redirect=/dashboard/appointments',
		);

		if (response.status === 201)
			return { title: 'Vos informations médicales ont été soumises avec succès', status: 'success' };

		return { title: "Erreur lors de l'annulation du rendez-vous", status: 'error' };
	} catch (error) {
		return { title: "Erreur lors de l'annulation du rendez-vous", status: 'error' };
	}
};

export default cancelAppointment;
