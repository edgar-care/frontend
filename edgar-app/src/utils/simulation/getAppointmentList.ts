import basicFetch from 'utils/basicFetch';
import { AppointmentType } from 'types/simulationPage/AppointmentType';

const getAppointmentList = async (): Promise<AppointmentType[]> => {
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

export default getAppointmentList;
