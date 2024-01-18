import { backendApi } from 'services/apiService';

import { DocumentsStoreType, UpdateDocumentDTO, DeleteDocumentDTO } from 'store/types/documents.type';

import { DocumentType } from 'types/dashboard/documents/DocumentType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getDocuments: builder.query<DocumentType[], void>({
			query: () => '/document/download',
			providesTags: ['patientDocuments'],
			transformResponse: (response: { document: DocumentsStoreType[] }) =>
				response.document.map((document) => ({
					...document,
					ownerId: document.owner_id,
					documentType: document.document_type,
					url: document.download_url,
					isFavorite: document.is_favorite,
					createdDate: document.createdDate * 1000,
					updatedDate: document.updatedDate * 1000,
				})),
		}),

		addDocument: builder.mutation<void, FormData>({
			query: (params) => ({
				url: '/document/upload',
				method: 'POST',
				body: params,
			}),
			invalidatesTags: ['patientDocuments'],
		}),

		updateDocument: builder.mutation<void, UpdateDocumentDTO>({
			query: (params) => ({
				url: `/document/${params.id}`,
				method: 'PUT',
				body: {
					name: params.documentName,
				},
			}),
			invalidatesTags: ['patientDocuments'],
		}),

		deleteDocument: builder.mutation<void, DeleteDocumentDTO>({
			query: (params) => ({
				url: `/document/${params.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['patientDocuments'],
		}),

		addDocumentToFavorite: builder.mutation<void, string>({
			query: (id) => ({
				url: `/document/favorite/${id}`,
				method: 'POST',
			}),
			invalidatesTags: ['patientDocuments'],
		}),

		removeDocumentToFavorite: builder.mutation<void, string>({
			query: (id) => ({
				url: `/document/favorite/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['patientDocuments'],
		}),
	}),
});

export const {
	useGetDocumentsQuery,
	useLazyGetDocumentsQuery,
	useAddDocumentMutation,
	useUpdateDocumentMutation,
	useDeleteDocumentMutation,
	useAddDocumentToFavoriteMutation,
	useRemoveDocumentToFavoriteMutation,
} = extendedApi;
