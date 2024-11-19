import { backendApi } from 'services/apiService';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		deleteAccount: builder.mutation<void, void>({
			query: () => ({
				url: '/auth/delete_account',
				method: 'POST',
			}),
		}),
	}),
});

export const { useDeleteAccountMutation } = extendedApi;
