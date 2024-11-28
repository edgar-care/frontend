import { backendApi } from 'services/apiService';

import type {
	PatientsStoreType,
	PatientDocumentStoreType,
	AddPatientDTO,
	UpdatePatientDTO,
} from 'store/types/patients.type';

import type { PatientType } from 'types/app/dashboard/patients/PatientType';
import type { PatientDocumentType } from 'types/app/dashboard/patients/documents/PatientDocumentType';

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
					height: response.medical_folder.height / 100,
					weight: response.medical_folder.weight / 100,
					primaryDoctorId: response.medical_folder.primary_doctor_id,
					onboardingStatus: response.medical_folder.onboarding_status,
					healthIssues:
						response.medical_folder.medical_antecedents?.map((antecedent) => ({
							id: antecedent.id,
							name: antecedent.name,
							treatments:
								antecedent.treatments?.map((treatment) => ({
									id: treatment.id,
									startDate: treatment.start_date * 1000,
									endDate: treatment.end_date ? treatment.end_date * 1000 : undefined,
									medicines:
										treatment.medicines?.map((medicine) => ({
											medicineId: medicine.medicine_id,
											comment: medicine.comment,
											periods:
												medicine.period?.map((period) => ({
													quantity: period.quantity,
													frequency: period.frequency,
													frequencyRatio: period.frequency_ratio,
													frequencyUnit: period.frequency_unit,
													periodLength: period.period_length,
													periodUnit: period.period_unit,
												})) ?? [],
										})) ?? [],
								})) ?? [],
						})) ?? [],
				},
				appointmentIds: response.rendez_vous_ids ?? [],
				documentIds: response.document_ids ?? [],
			}),
		}),

		getPatients: builder.query<PatientType[], void>({
			query: () => '/doctor/patients',
			providesTags: ['patients'],
			transformResponse: (response: { patients?: PatientsStoreType[] }) =>
				response.patients
					?.filter((patient, index, self) => self.findIndex((p) => p.id === patient.id) === index)
					.map((patient) => ({
						id: patient.id,
						email: patient.email,
						medicalInfos: {
							name: patient.medical_folder.name,
							firstname: patient.medical_folder.firstname,
							birthdate: patient.medical_folder.birthdate * 1000,
							sex: patient.medical_folder.sex,
							height: patient.medical_folder.height / 100,
							weight: patient.medical_folder.weight / 100,
							primaryDoctorId: patient.medical_folder.primary_doctor_id,
							onboardingStatus: patient.medical_folder.onboarding_status,
							healthIssues:
								patient.medical_folder.medical_antecedents?.map((antecedent) => ({
									id: antecedent.id,
									name: antecedent.name,
									treatments:
										antecedent.treatments?.map((treatment) => ({
											id: treatment.id,
											startDate: treatment.start_date * 1000,
											endDate: treatment.end_date ? treatment.end_date * 1000 : undefined,
											medicines:
												treatment.medicines?.map((medicine) => ({
													medicineId: medicine.medicine_id,
													comment: medicine.comment,
													periods:
														medicine.period?.map((period) => ({
															quantity: period.quantity,
															frequency: period.frequency,
															frequencyRatio: period.frequency_ratio,
															frequencyUnit: period.frequency_unit,
															periodLength: period.period_length,
															periodUnit: period.period_unit,
														})) ?? [],
												})) ?? [],
										})) ?? [],
								})) ?? [],
						},
						appointmentIds: patient.rendez_vous_ids ?? [],
						documentIds: patient.document_ids ?? [],
					})) || [],
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
						name: params.medicalInfo.name,
						firstname: params.medicalInfo.firstname,
						birthdate: params.medicalInfo.birthdate / 1000,
						sex: params.medicalInfo.sex,
						height: params.medicalInfo.height * 100,
						weight: params.medicalInfo.weight * 100,
						primary_doctor_id: params.medicalInfo.primaryDoctorId,
						medical_antecedents: params.medicalInfo.healthIssues.map((healthIssue) => ({
							name: healthIssue.name,
							symptoms: [],
							treatments: healthIssue.treatments.map((treatment) => ({
								start_date: treatment.startDate / 1000,
								end_date: treatment.endDate ? treatment.endDate / 1000 : undefined,
								medicines: treatment.medicines.map((medicine) => ({
									medicine_id: medicine.medicineId,
									comment: medicine.comment,
									period: medicine.periods.map((period) => ({
										quantity: period.quantity,
										frequency: period.frequency,
										frequency_ratio: period.frequencyRatio,
										frequency_unit: period.frequencyUnit,
										period_length: period.periodLength,
										period_unit: period.periodUnit,
									})),
								})),
							})),
						})),
						family_members_med_info_id: [],
					},
				},
			}),
			invalidatesTags: ['patients'],
		}),

		updatePatient: builder.mutation<void, UpdatePatientDTO>({
			query: (params) => ({
				url: `/doctor/patient/${params.patientId}`,
				method: 'PUT',
				body: {
					name: params.medicalFolder.name,
					firstname: params.medicalFolder.firstname,
					birthdate: params.medicalFolder.birthdate / 1000,
					sex: params.medicalFolder.sex,
					height: params.medicalFolder.height * 100,
					weight: params.medicalFolder.weight * 100,
					primary_doctor_id: params.medicalFolder.primaryDoctorId,
					family_members_med_info_id: [],
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

		deleteAPatient: builder.mutation<void, string>({
			query: (id) => ({
				url: `/doctor/patient/${id}`,
				method: 'DELETE',
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
	useUpdatePatientMutation,
	useDeleteAPatientMutation,
} = extendedApi;
