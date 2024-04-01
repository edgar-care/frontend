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
				id: response.medical_folder.id,
				name: response.medical_folder.name,
				firstname: response.medical_folder.firstname,
				birthdate: response.medical_folder.birthdate * 1000,
				sex: response.medical_folder.sex,
				height: response.medical_folder.height / 100,
				weight: response.medical_folder.weight / 100,
				primaryDoctorId: response.medical_folder.primary_doctor_id,
				onboardingStatus: response.medical_folder.onboarding_status,
				medicalAntecedents: response.medical_folder.medical_antecedents.map((antecedent) => ({
					id: antecedent.id,
					name: antecedent.name,
					medicines: antecedent.medicines.map((medicine) => ({
						id: medicine.id,
						medicineId: medicine.medicine_id,
						periods: medicine.period,
						days: medicine.day,
						quantity: medicine.quantity,
					})),
					stillRelevant: antecedent.stillRelevant,
				})),
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
