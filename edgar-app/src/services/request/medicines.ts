import { backendApi } from 'services/apiService';

import { type MedicinesStoreType } from 'store/types/medicines.type';

import { type MedicineType } from 'types/dashboard/medical/MedicineType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getMedicines: builder.query<MedicineType[], void>({
			query: () => '/medicine',
			providesTags: [],
			transformResponse: (response: { medicament?: MedicinesStoreType[] }) =>
				response.medicament?.map((medicament) => ({
					id: medicament.id,
					name: medicament.name,
					unit: medicament.unit,
				})) || [],
		}),

		getMedicineById: builder.query<MedicineType, string>({
			query: (id) => `/medicine/${id}`,
			providesTags: [],
			transformResponse: (response: { medicament: MedicinesStoreType }) => ({
				id: response.medicament.id,
				name: response.medicament.name,
				unit: response.medicament.unit,
			}),
		}),
	}),
});

export const { useGetMedicinesQuery, useLazyGetMedicinesQuery, useGetMedicineByIdQuery, useLazyGetMedicineByIdQuery } =
	extendedApi;
