import { MessageResponse } from 'types/MessageResponse';
import basicFetch from 'utils/basicFetch';

const setDoctor = async (selectedDoctorId: string): Promise<MessageResponse> => {
	try {
		// TODO: connect with the back end

		const response = await basicFetch(
			'',
			'POST',
			JSON.stringify({
				selectedDoctorId,
			}),
		);
		if (response.status !== 200) return { title: await response.json(), status: 'error' };

		return { title: 'Informations sauvegardées', status: 'success' };
	} catch (error) {
		console.error(error);
		return { title: 'Veuillez remplir tous les champs', status: 'error' };
	}
};

export default setDoctor;
