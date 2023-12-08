import { backendApi } from 'services/apiService';
import { DocumentsStoreType, AddDocumentDTO, UpdateDocumentDTO, DeleteDocumentDTO } from 'store/types/documents.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getDocuments: builder.query<DocumentsStoreType[], void>({
			query: () => '/documents/download',
			providesTags: ['patientDocuments'],
			transformResponse: (response: { doc: DocumentsStoreType[] }) =>
				response.doc.map((document) => ({
					...document,
					createdDate: document.createdDate * 1000,
					updatedDate: document.updatedDate * 1000,
				})),
		}),

		addDocument: builder.mutation<DocumentsStoreType, AddDocumentDTO>({
			query: (params) => ({
				url: '/documents/upload',
				method: 'POST',
				body: params,
			}),
			invalidatesTags: ['patientDocuments'],
		}),

		updateDocument: builder.mutation<DocumentsStoreType, UpdateDocumentDTO>({
			query: (params) => ({
				url: `/documents/${params._id}`,
				method: 'PUT',
				body: {
					documentName: params.documentName,
				},
			}),
			invalidatesTags: ['patientDocuments'],
		}),

		deleteDocument: builder.mutation<DocumentsStoreType, DeleteDocumentDTO>({
			query: (params) => ({
				url: `/documents/${params._id}`,
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
} = extendedApi;
