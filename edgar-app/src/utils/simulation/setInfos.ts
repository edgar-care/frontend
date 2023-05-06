import { MessageResponse } from 'types/MessageResponse';
import basicFetch from 'utils/basicFetch';

const setInfos = async (
	age: string,
	height: string,
	weight: string,
	temperature: string,
	isMale: boolean,
): Promise<MessageResponse> => {
	try {
		// TODO: connect with the back end
		const ageNumber = Number(age);
		const heightNumber = Number(height);
		const weightNumber = Number(weight);
		const temperatureNumber = Number(temperature);

		if (ageNumber < 0 || heightNumber < 0 || weightNumber < 0 || temperatureNumber < 0)
			return { title: 'Veuillez remplir tous les champs', status: 'error' };

		const response = await basicFetch(
			'',
			'POST',
			JSON.stringify({
				age: ageNumber,
				height: heightNumber,
				weight: weightNumber,
				temperature: temperatureNumber,
				isMale,
			}),
		);
		if (response.status !== 200) return { title: await response.json(), status: 'error' };

		return { title: 'Informations sauvegardées', status: 'success' };
	} catch (error) {
		console.error(error);
		return { title: 'Veuillez remplir tous les champs', status: 'error' };
	}
};

export default setInfos;
