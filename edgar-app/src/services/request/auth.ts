import { backendApi } from 'services/apiService';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		disableAccount: builder.mutation<void, void>({
			query: () => ({
				url: '/auth/disable_account',
				method: 'PUT',
			}),
		}),
		enableAccount: builder.mutation<void, void>({
			query: () => ({
				url: 'auth/enable_account',
				method: 'PUT',
			}),
		}),
	}),
});

export const { useDisableAccountMutation, useEnableAccountMutation } = extendedApi;
