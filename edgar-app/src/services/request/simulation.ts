import { backendApi } from 'services/apiService';

import { type DiagnoseDiagnosticDTO, InitiateDiagnosticStoreType } from 'store/types/simulation.type';
import { type SimulationChatDiagnoseDiagnosticType } from 'types/simulation/SimulationChatDiagnoseDiagnosticType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
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
export const { useInitiateDiagnosticMutation, useDiagnoseDiagnosticMutation } = extendedApi;
