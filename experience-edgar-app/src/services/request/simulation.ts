import { backendApi } from 'services/apiService';

import { type DiagnoseDiagnosticDTO, type InitiateDiagnosticStoreType } from 'store/types/simulation.type';

import { type SimulationChatDiagnoseDiagnosticType } from 'types/simulation/chat/SimulationChatDiagnoseDiagnosticType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getNlpStatus: builder.query<boolean, void>({
			query: () => '/nlp/status',
			transformResponse: (response: { status: string }) => response.status === 'running',
		}),

		// Diagnostic mutations
		initiateDiagnostic: builder.mutation<string, void>({
			query: () => ({
				url: '/diagnostic/initiate',
				method: 'POST',
			}),
			transformResponse: (response: InitiateDiagnosticStoreType) => response.sessionId,
			invalidatesTags: ['patientSimulation'],
		}),

		diagnoseDiagnostic: builder.mutation<SimulationChatDiagnoseDiagnosticType, DiagnoseDiagnosticDTO>({
			query: (params) => ({
				url: '/diagnostic/diagnose',
				method: 'POST',
				body: params,
			}),
			invalidatesTags: ['patientSimulation'],
		}),
	}),
});

export const {
	useGetNlpStatusQuery,
	useLazyGetNlpStatusQuery,
	useInitiateDiagnosticMutation,
	useDiagnoseDiagnosticMutation,
} = extendedApi;
