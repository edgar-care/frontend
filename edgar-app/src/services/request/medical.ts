import { backendApi } from 'services/apiService';

import type {
	AddPatientMedicalFolderDTO,
	MedicalFolderStoreType,
	UpdatePatientMedicalFolderDTO,
} from 'store/types/medical.type';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getPatientMedicalFolder: builder.query<PatientMedicalType, void>({
			query: () => '/dashboard/medical-info',
			providesTags: ['patientMedicalFolder'],
			transformResponse: (response: MedicalFolderStoreType) => ({
				id: response['Medical-info'].id,
				name: response['Medical-info'].name,
				firstname: response['Medical-info'].firstname,
				birthdate: response['Medical-info'].birthdate * 1000,
				sex: response['Medical-info'].sex,
				height: response['Medical-info'].height / 100,
				weight: response['Medical-info'].weight / 100,
				primaryDoctorId: response['Medical-info'].primary_doctor_id,
				onboardingStatus: response['Medical-info'].onboarding_status,
				// medicalAntecedents: response['Medical-info'].antecedent_diseases.map((antecedent) => ({
				// 	id: antecedent.id,
				// 	name: antecedent.name,
				// 	medicines: antecedent.medicines.map((medicine) => ({
				// 		id: medicine.id,
				// 		medicineId: medicine.medicine_id,
				// 		periods: medicine.period,
				// 		days: medicine.day,
				// 		quantity: medicine.quantity,
				// 	})),
				// 	stillRelevant: antecedent.stillRelevant,
				// })),
				medicalAntecedents: [],
			}),
		}),

		updatePatientMedicalFolder: builder.mutation<void, UpdatePatientMedicalFolderDTO>({
			query: (params) => ({
				url: '/dashboard/medical-info',
				method: 'PUT',
				body: {
					name: params.name,
					firstname: params.firstname,
					birthdate: params.birthdate / 1000,
					sex: params.sex,
					height: params.height * 100,
					weight: params.weight * 100,
					primary_doctor_id: params.primaryDoctorId,
					medical_antecedents: params.medicalAntecedents.map((antecedent) => ({
						name: antecedent.name,
						medicines: antecedent.medicines.map((medicine) => ({
							medicine_id: medicine.medicineId,
							period: medicine.period,
							day: medicine.day,
							quantity: medicine.quantity,
						})),
						still_relevant: antecedent.stillRelevant,
					})),
				},
			}),
			invalidatesTags: ['patientMedicalFolder'],
		}),

		addPatientMedicalFolder: builder.mutation<void, AddPatientMedicalFolderDTO>({
			query: (params) => ({
				url: '/dashboard/medical-info',
				method: 'POST',
				body: {
					name: params.name,
					firstname: params.firstname,
					birthdate: params.birthdate / 1000,
					sex: params.sex,
					height: params.height * 100,
					weight: params.weight * 100,
					primary_doctor_id: params.primaryDoctorId,
					medical_antecedents: params.medicalAntecedents.map((antecedent) => ({
						name: antecedent.name,
						medicines: antecedent.medicines.map((medicine) => ({
							medicine_id: medicine.medicineId,
							period: medicine.period,
							day: medicine.day,
							quantity: parseInt(medicine.quantity, 10),
						})),
						still_relevant: antecedent.stillRelevant,
					})),
				},
			}),
			invalidatesTags: ['patientMedicalFolder'],
		}),
	}),
});

export const {
	useGetPatientMedicalFolderQuery,
	useLazyGetPatientMedicalFolderQuery,
	useAddPatientMedicalFolderMutation,
	useUpdatePatientMedicalFolderMutation,
} = extendedApi;
