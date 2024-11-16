import { backendApi } from 'services/apiService';

import type {
	CheckFollowUpTreatmentDTO,
	FollowUpTreatmentsStoreType,
	AddTreatmentDTO,
	UpdateTreatmentDTO,
} from 'store/types/treatments.type';

import type { TreatmentFollowUpType } from 'types/dashboard/treatments/TreatmentFollowUpType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getFollowUpTreatments: builder.query<TreatmentFollowUpType[], void>({
			query: () => '/dashboard/treatment/follow-up',
			providesTags: ['patientFollowUpTreatments'],
			transformResponse: (response?: FollowUpTreatmentsStoreType[]) =>
				response?.map((treatment) => ({
					id: treatment.id,
					date: treatment.date * 1000,
					periods: treatment.period,
					treatmentId: treatment.treatment_id,
				})) || [],
		}),

		getFollowUpTreatmentById: builder.query<TreatmentFollowUpType, string>({
			query: (id) => `/dashboard/treatment/follow-up/${id}`,
			providesTags: ['patientFollowUpTreatments'],
			transformResponse: (response: FollowUpTreatmentsStoreType) => ({
				id: response.id,
				date: response.date * 1000,
				periods: response.period,
				treatmentId: response.treatment_id,
			}),
		}),

		checkFollowUpTreatment: builder.mutation<void, CheckFollowUpTreatmentDTO>({
			query: (data) => ({
				url: '/dashboard/treatment/follow-up',
				method: 'POST',
				body: {
					treatment_id: data.treatmentId,
					date: data.date / 1000,
					period: data.periods,
				},
			}),
			invalidatesTags: ['patientFollowUpTreatments'],
		}),

		uncheckFollowUpTreatment: builder.mutation<void, string>({
			query: (id) => ({
				url: `/dashboard/treatment/follow-up/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['patientFollowUpTreatments'],
		}),

		addTreatment: builder.mutation<void, AddTreatmentDTO>({
			query: (params) => ({
				url: '/dashboard/treatment',
				method: 'POST',
				body: {
					medical_antecedent_id: params.healthIssueId,
					start_date: params.startDate / 1000,
					end_date: params.endDate ? params.endDate / 1000 : undefined,
					medicines: params.medicines.map((medicine) => ({
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
				},
			}),
			invalidatesTags: ['patientTreatments', 'patientMedicalFolder'],
		}),

		updateTreatment: builder.mutation<void, UpdateTreatmentDTO>({
			query: (params) => ({
				url: `/dashboard/treatment/${params.id}`,
				method: 'PUT',
				body: {
					start_date: params.startDate / 1000,
					end_date: params.endDate ? params.endDate / 1000 : undefined,
					medicines: params.medicines.map((medicine) => ({
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
				},
			}),
			invalidatesTags: ['patientTreatments'],
		}),

		deleteTreatment: builder.mutation<void, string>({
			query: (id) => ({
				url: `/dashboard/treatment/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['patientTreatments', 'patientMedicalFolder'],
		}),
	}),
});

export const {
	useGetFollowUpTreatmentsQuery,
	useLazyGetFollowUpTreatmentsQuery,
	useGetFollowUpTreatmentByIdQuery,
	useLazyGetFollowUpTreatmentByIdQuery,
	useCheckFollowUpTreatmentMutation,
	useUncheckFollowUpTreatmentMutation,
	useAddTreatmentMutation,
	useUpdateTreatmentMutation,
	useDeleteTreatmentMutation,
} = extendedApi;
