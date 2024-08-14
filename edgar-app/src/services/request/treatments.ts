import { backendApi } from 'services/apiService';

import type {
	CheckFollowUpTreatmentDTO,
	FollowUpTreatmentsStoreType,
	AddTreatmentDTO,
	AddTreatmentAndHealthIssueDTO,
} from 'store/types/treatments.type';
import { type TreatmentFollowUpType } from 'types/dashboard/treatments/TreatmentFollowUpType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getFollowUpTreatments: builder.query<TreatmentFollowUpType[], void>({
			query: () => '/dashboard/treatment/follow-up',
			providesTags: ['patientFollowUpTreatments'],
			transformResponse: (response: FollowUpTreatmentsStoreType[]) =>
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
					disease_id: params.diseaseId,
					still_relevant: params.stillRelevant,
					treatments: params.treatments.map((treatment) => ({
						period: treatment.period,
						day: treatment.day,
						quantity: treatment.quantity,
						medicine_id: treatment.medicineId,
					})),
				},
			}),
			invalidatesTags: ['patientTreatments'],
		}),

		addTreatmentAndHealthIssue: builder.mutation<void, AddTreatmentAndHealthIssueDTO>({
			query: (params) => ({
				url: '/dashboard/treatment',
				method: 'POST',
				body: {
					name: params.name,
					still_relevant: params.stillRelevant,
					treatments: params.treatments.map((treatment) => ({
						period: treatment.period,
						day: treatment.day,
						quantity: treatment.quantity,
						medicine_id: treatment.medicineId,
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
			invalidatesTags: ['patientTreatments'],
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
	useAddTreatmentAndHealthIssueMutation,
	useDeleteTreatmentMutation,
} = extendedApi;
