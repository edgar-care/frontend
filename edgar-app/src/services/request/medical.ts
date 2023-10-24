import { backendApi } from 'services/apiService';

import { type MedicalFolderStoreType } from 'store/types/medical.type';

import { type MedicalProfileType } from 'types/dashboard/medical/MedicalProfileType';
import { type HealthInfos, type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getPatientMedicalFolder: builder.query<{ personalInfos: PersonalInfos; healthInfos: HealthInfos }, void>({
			query: () => '/dashboard/medical-info',
			providesTags: ['patientMedicalFolder'],
			transformResponse: (response: MedicalFolderStoreType) => ({
				personalInfos: {
					name: response.patient_info.surname,
					firstname: response.patient_info.name,
					birthDate: response.patient_info.birthdate,
					sex: response.patient_info.sex,
					size: response.patient_info.height,
					weight: response.patient_info.weight,
				},
				healthInfos: {
					primaryDoctorName: response.patient_health.patients_primary_doctor,
					allergies: response.patient_health.patients_allergies,
					diseases: response.patient_health.patients_illness,
					treatmentsInProgress: response.patient_health.patients_treatments,
				},
			}),
		}),

		updatePatientMedicalFolder: builder.mutation<void, MedicalProfileType>({
			query: (params) => ({
				url: '/dashboard/medical-info',
				method: 'PUT',
				body: {
					onboarding_info: {
						name: params.firstname,
						surname: params.name,
						birthdate: params.birthDate,
						sex: params.sex,
						weight: params.weight,
						height: params.size,
					},
					onboarding_health: {
						patients_allergies: params.allergies,
						patients_illness: params.diseases,
						patients_treatments: params.treatmentsInProgress,
						patients_primary_doctor: params.primaryDoctorName,
					},
				},
			}),
			invalidatesTags: ['patientMedicalFolder'],
		}),
	}),
});

export const {
	useGetPatientMedicalFolderQuery,
	useLazyGetPatientMedicalFolderQuery,
	useUpdatePatientMedicalFolderMutation,
} = extendedApi;
