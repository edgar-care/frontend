import { backendApi } from 'services/apiService';

import { type PatientsStoreType, type PatientDocumentStoreType, type AddPatientDTO } from 'store/types/patients.type';

import { type PatientType } from 'types/app/dashboard/patients/PatientType';
import { type PatientDocumentType } from 'types/app/dashboard/patients/documents/PatientDocumentType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getPatientById: builder.query<PatientType, string>({
			query: (patientId) => `/doctor/patient/${patientId}`,
			providesTags: ['patients'],
			transformResponse: (response: PatientsStoreType) => ({
				id: response.id,
				email: response.email,
				medicalInfos: {
					name: response.medical_folder.name,
					firstname: response.medical_folder.firstname,
					birthdate: response.medical_folder.birthdate * 1000,
					sex: response.medical_folder.sex,
					height: response.medical_folder.height,
					weight: response.medical_folder.weight,
					primaryDoctorId: response.medical_folder.primary_doctor_id,
					onboardingStatus: response.medical_folder.onboarding_status,
					medicalAntecedents:
						response.medical_folder.medical_antecedents?.map((antecedent) => ({
							id: antecedent.id,
							name: antecedent.name,
							medicines:
								antecedent.medicines?.map((medicine) => ({
									id: medicine.id,
									medicineId: medicine.medicine_id,
									periods: medicine.period,
									days: medicine.day,
									quantity: medicine.quantity,
								})) || [],
							stillRelevant: antecedent.still_relevant,
						})) || [],
				},
				appointmentIds: response.rendez_vous_ids,
				documentIds: response.document_ids,
			}),
		}),

		getPatients: builder.query<PatientType[], void>({
			query: () => '/doctor/patients',
			providesTags: ['patients'],
			transformResponse: (response: { patients: PatientsStoreType[] }) =>
				response.patients.map((patient) => ({
					id: patient.id,
					email: patient.email,
					medicalInfos: {
						name: patient.medical_folder.name,
						firstname: patient.medical_folder.firstname,
						birthdate: patient.medical_folder.birthdate * 1000,
						sex: patient.medical_folder.sex,
						height: patient.medical_folder.height,
						weight: patient.medical_folder.weight,
						primaryDoctorId: patient.medical_folder.primary_doctor_id,
						onboardingStatus: patient.medical_folder.onboarding_status,
						medicalAntecedents:
							patient.medical_folder.medical_antecedents?.map((antecedent) => ({
								id: antecedent.id,
								name: antecedent.name,
								medicines:
									antecedent.medicines?.map((medicine) => ({
										id: medicine.id,
										medicineId: medicine.medicine_id,
										periods: medicine.period,
										days: medicine.day,
										quantity: medicine.quantity,
									})) || [],
								stillRelevant: antecedent.still_relevant,
							})) || [],
					},
					appointmentIds: patient.rendez_vous_ids,
					documentIds: patient.document_ids,
				})),
		}),

		getPatientDocumentById: builder.query<PatientDocumentType, string>({
			query: (documentId) => `/doctor/document/${documentId}`,
			transformResponse: (response: { download: PatientDocumentStoreType }) => ({
				id: response.download.id,
				ownerId: response.download.owner_id,
				name: response.download.name,
				documentType: response.download.document_type,
				category: response.download.category,
				isFavorite: response.download.is_favorite,
				downloadUrl: response.download.download_url,
			}),
		}),

		addPatient: builder.mutation<void, AddPatientDTO>({
			query: (params) => ({
				url: '/doctor/patient',
				method: 'POST',
				body: {
					email: params.email,
					medical_info: {
						name: params.medicalFolder.name,
						firstname: params.medicalFolder.firstname,
						birthdate: params.medicalFolder.birthdate / 100,
						sex: params.medicalFolder.sex,
						height: params.medicalFolder.height * 100,
						weight: params.medicalFolder.weight * 100,
						primary_doctor_id: params.medicalFolder.primaryDoctorId,
						medical_antecedents: params.medicalFolder.medicalAntecedents.map((antecedent) => ({
							name: antecedent.name,
							treatments: antecedent.medicines.map((medicine) => ({
								medicine_id: medicine.medicineId,
								period: medicine.periods,
								day: medicine.days,
								quantity: medicine.quantity,
							})),
							still_relevant: antecedent.stillRelevant,
						})),
					},
				},
			}),
			invalidatesTags: ['patients'],
		}),

		uploadAPatientDocument: builder.mutation<void, FormData>({
			query: (params) => ({
				url: '/doctor/document/upload',
				method: 'POST',
				body: params,
			}),
			invalidatesTags: ['patients'],
		}),
	}),
});

export const {
	useGetPatientByIdQuery,
	useLazyGetPatientByIdQuery,
	useGetPatientsQuery,
	useLazyGetPatientsQuery,
	useGetPatientDocumentByIdQuery,
	useLazyGetPatientDocumentByIdQuery,
	useUploadAPatientDocumentMutation,
	useAddPatientMutation,
} = extendedApi;
