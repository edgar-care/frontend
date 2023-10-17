import basicFetch from 'utils/basicFetch';

import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

import { type ApiGetter } from 'types/api/apiGetter';
import { type PatientAppointmentType } from 'types/dashboard/appointments/patientAppointmentType';

const getAppointments = (router: AppRouterInstance): ApiGetter<PatientAppointmentType[]> => {
	try {
		let data: PatientAppointmentType[] = [];
		const trigger = () => {
			basicFetch(
				'???',
				'DELETE',
				JSON.stringify({}),
				router,
				'/dashboard/connection/login?redirect=/dashboard/appointments',
			).then((response) => {
				response.json().then((res) => {
					data = res;
				});
			});
		};

		trigger();

		return { data, trigger };
	} catch (error) {
		return { data: [], trigger: () => {} };
	}
};

export default getAppointments;
