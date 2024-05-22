import { backendApi } from 'services/apiService';

import { DocumentsStoreType, UpdateDocumentDTO, DeleteDocumentDTO } from 'store/types/documents.type';

import { DocumentType } from 'types/dashboard/documents/DocumentType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getDocuments: builder.query<DocumentType[], void>({
			query: () => '/document/download',
			providesTags: ['patientDocuments'],
			transformResponse: (response: { document: DocumentsStoreType[] | null }) =>
				response.document?.map((document) => ({
					id: document.id,
					ownerId: document.owner_id,
					name: document.name,
					documentType: document.document_type,
					category: document.category,
					url: document.download_url,
					isFavorite: document.is_favorite,
					createdDate: 0,
					updatedDate: 0,
				})) || [],
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
