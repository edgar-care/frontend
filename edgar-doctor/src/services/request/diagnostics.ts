import { backendApi } from 'services/apiService';

import { type AddDiagnosticDTO, type DiagnosticSummaryStoreType } from 'store/types/diagnostics.type';

import { type DiagnosticSummaryType } from 'types/app/dashboard/diagnostics/DiagnosticSummaryType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getDiagnosticSummaryById: builder.query<DiagnosticSummaryType, string>({
			query: (id) => `/diagnostic/summary/${id}`,
			transformResponse: (response: DiagnosticSummaryStoreType) => ({
				alerts: response.alerts,
				diseases: response.diseases.map((disease) => ({
					name: disease.name,
					presence: Math.round(disease.presence * 100),
				})),
				fiability: Math.round(response.fiability * 100),
				logs: response.logs,
				sessionId: response.session_id,
				symptoms: response.symptoms,
			}),
		}),

		addDiagnostic: builder.mutation<void, AddDiagnosticDTO>({
			query: (params) => ({
				url: `/doctor/diagnostic/${params.diagnosticId}`,
				method: 'POST',
				body: {
					reason: params.reason,
					validation: params.validation,
					healMethod: params.healMethod,
				},
			}),
			invalidatesTags: ['doctorAppointments'],
		}),
	}),
});

export const { useGetDiagnosticSummaryByIdQuery, useLazyGetDiagnosticSummaryByIdQuery, useAddDiagnosticMutation } =
	extendedApi;
