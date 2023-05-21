import type { MessageResponse } from 'types/MessageResponse';
import { DoctorSearchResponse } from '../types/DoctorSearchResponse';

const searchDoctor = async (name: string, localisation: string): Promise<MessageResponse & DoctorSearchResponse> => {
	try {
		if (!name) return { title: 'Merci de renseigner le nom du médecin', status: 'error', doctors: [] };
		if (!localisation) return { title: 'Merci de renseigner une localisation', status: 'error', doctors: [] };
		// CALL BACK
		return {
			title: "Nous n'avons pas trouver de médecin",
			status: 'warning',
			doctors: [],
		};
	} catch (error) {
		console.error(error);
		return { title: 'Une erreur est survenue, merci de réessayer', status: 'error', doctors: [] };
	}
};

export default searchDoctor;
