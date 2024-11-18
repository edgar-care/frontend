import { backendApi } from 'services/apiService';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		deleteAccount: builder.mutation<void, void>({
			query: () => ({
				url: '/auth/delete_account',
				method: 'PUT',
			}),
		}),
	}),
});

export const { useDeleteAccountMutation } = extendedApi;
