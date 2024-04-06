import { backendApi } from 'services/apiService';

import { type MedicinesStoreType } from 'store/types/medicines.type';

import { type MedicineType } from 'types/dashboard/medical/MedicineType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getMedicines: builder.query<MedicineType[], void>({
			query: () => '/medicaments',
			providesTags: [],
			transformResponse: (response: { medicament: MedicinesStoreType[] }) =>
				response.medicament.map((medicament) => ({
					id: medicament.id,
					name: medicament.name,
					unit: medicament.unit,
				})),
		}),
	}),
});

export const { useGetMedicinesQuery, useLazyGetMedicinesQuery } = extendedApi;
