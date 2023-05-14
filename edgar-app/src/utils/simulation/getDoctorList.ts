import { DoctorType } from 'types/simulationPage/DoctorType';
import basicFetch from 'utils/basicFetch';

const getDoctorList = async (): Promise<DoctorType[]> => {
	try {
		// TODO: connect with the back end

		const response = await basicFetch('', 'GET');
		const data = await response.json();
		if (response.status !== 200) return [];

		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export default getDoctorList;
