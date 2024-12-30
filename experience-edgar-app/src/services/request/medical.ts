import { backendApi } from 'services/apiService';

import type {
	AddHealthIssueDTO,
	AddPatientMedicalFolderDTO,
	MedicalFolderStoreType,
	UpdateHealthIssueDTO,
	UpdatePatientMedicalFolderDTO,
} from 'store/types/medical.type';

import type { OnboardingInfos } from 'types/onboarding/OnboardingInfos';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getPatientMedicalFolder: builder.query<OnboardingInfos, void>({
			query: () => '/dashboard/medical-info',
			providesTags: ['patientMedicalFolder', 'patientTreatments'],
			transformResponse: (response: MedicalFolderStoreType) => ({
				id: response.medical_folder.id,
				name: response.medical_folder.name,
				firstname: response.medical_folder.firstname,
				birthdate: response.medical_folder.birthdate * 1000,
				sex: response.medical_folder.sex,
				height: response.medical_folder.height / 100,
				weight: response.medical_folder.weight / 100,
				primaryDoctorId: response.medical_folder.primary_doctor_id,
				hasMedicalAntecedents: !!response.medical_folder.medical_antecedents,
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
					family_members_med_info_id: [],
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
						symptoms: [],
						treatments: antecedent.treatments.map((treatment) => ({
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
			}),
			invalidatesTags: ['patientMedicalFolder'],
		}),

		addHealthIssue: builder.mutation<void, AddHealthIssueDTO>({
			query: (params) => ({
				url: '/dashboard/medical-antecedent',
				method: 'POST',
				body: {
					name: params.name,
					symptoms: [],
					treatments: params.treatments.map((treatment) => ({
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
				},
			}),
			invalidatesTags: ['patientMedicalFolder'],
		}),

		updateHealthIssue: builder.mutation<void, UpdateHealthIssueDTO>({
			query: (params) => ({
				url: `/dashboard/medical-antecedent/${params.id}`,
				method: 'PUT',
				body: {
					medical_antecedent: {
						name: params.name,
					},
				},
			}),
			invalidatesTags: ['patientMedicalFolder'],
		}),

		deleteHealthIssue: builder.mutation<void, string>({
			query: (params) => ({
				url: `/dashboard/medical-antecedent/${params}`,
				method: 'DELETE',
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
	useAddHealthIssueMutation,
	useUpdateHealthIssueMutation,
	useDeleteHealthIssueMutation,
} = extendedApi;
