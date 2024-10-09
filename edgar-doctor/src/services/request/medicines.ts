import { backendApi } from 'services/apiService';

import { type MedicinesStoreType } from 'store/types/medicines.type';

import { type MedicineType } from 'types/app/dashboard/diagnostics/MedicineType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getMedicines: builder.query<MedicineType[], void>({
			query: () => '/medicine',
			providesTags: [],
			transformResponse: (response: { medicament?: MedicinesStoreType[] }) =>
				response.medicament?.map((medicament) => ({
					id: medicament.id,
					dci: medicament.dci,
					dosage: medicament.dosage,
					dosageUnit: medicament.dosage_unit,
					dosageForm: medicament.dosage_form,
					container: medicament.container,
					name: medicament.name,
				})) || [],
		}),

		getMedicineById: builder.query<MedicineType, string>({
			query: (id) => `/medicine/${id}`,
			providesTags: [],
			transformResponse: (response: { medicament: MedicinesStoreType }) => ({
				id: response.medicament.id,
				dci: response.medicament.dci,
				dosage: response.medicament.dosage,
				dosageUnit: response.medicament.dosage_unit,
				dosageForm: response.medicament.dosage_form,
				container: response.medicament.container,
				name: response.medicament.name,
			}),
		}),
	}),
});

export const { useGetMedicinesQuery, useLazyGetMedicinesQuery, useGetMedicineByIdQuery, useLazyGetMedicineByIdQuery } =
	extendedApi;
