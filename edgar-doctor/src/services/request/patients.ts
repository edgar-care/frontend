import { backendApi } from 'services/apiService';

import { type PatientsStoreType } from 'store/types/patients.type';

import { type PatientsType } from 'types/app/dashboard/patients/PatientsType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getPatientById: builder.query<PatientsType, string>({
			query: (patientId) => `/doctor/patient/${patientId}`,
			providesTags: ['doctorSlots'],
			transformResponse: (response: PatientsStoreType) => ({
				id: response.patient.id,
				onboarding_info: {
					id: response.onboarding_info.id,
					name: response.onboarding_info.name,
					surname: response.onboarding_info.surname,
					birthdate: response.onboarding_info.birthdate,
					sex: response.onboarding_info.sex,
					weight: response.onboarding_info.weight,
					height: response.onboarding_info.height,
				},
				onboarding_health: {
					id: response.onboarding_health.id,
					patients_allergies: response.onboarding_health.patients_allergies,
					patients_illness: response.onboarding_health.patients_illness,
					patients_treatments: response.onboarding_health.patients_treatments,
					patients_primary_doctor: response.onboarding_health.patients_primary_doctor,
				},
			}),
		}),
	}),
});

export const { useGetPatientByIdQuery, useLazyGetPatientByIdQuery } = extendedApi;
