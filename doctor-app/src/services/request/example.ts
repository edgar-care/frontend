import { backendApi } from 'services/apiService';
import { Example } from 'store/types/example.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		// Queries

		// This query takes no parameters and returns a Example object, the query is cached under the tag 'Example'
		// To add a tag, add a string to the array in the providesTags property of the query
		// To add a new tag type, add a string to the array in the tagTypes property of the api in apiService.ts
		getExample: builder.query<Example, void>({
			query: () => '/example',
			providesTags: ['Example'],
		}),

		// Mutations
		// This mutation takes a string as a parameter and returns a Example object, the query is cached under the tag 'Example'
		// When the mutation is called, the tag 'Example' is invalidated and so all queries with the tag 'Example' are refetched and cached automatically
		updateExample: builder.mutation<Example, string>({
			query: (params) => ({
				url: '/example',
				method: 'POST',
				body: params,
			}),
			invalidatesTags: ['Example'],
		}),
	}),
});

// This exports the hooks to use the queries and mutations
// The hooks are automatically typed by the typescript compiler
// The hooks are constructed from the endpoints defined above in the injectEndpoints method
// For the query, the hook is named useGetExampleQuery => use + name of the query + Query
// For the mutation, the hook is named useUpdateExampleMutation => use + name of the mutation + Mutation
//
// For the query, there is a second hook that is lazy, it is named useLazyGetExampleQuery => useLazy + name of the query + Query
export const { useGetExampleQuery, useLazyGetExampleQuery, useUpdateExampleMutation } = extendedApi;
