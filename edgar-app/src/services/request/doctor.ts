import { backendApi } from 'services/apiService';

import { type DoctorStoreType } from 'store/types/doctor.type';

import { type DoctorType } from 'types/dashboard/DoctorType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getDoctorById: builder.query<DoctorType, string>({
			query: (id) => `/doctor/${id}`,
			providesTags: ['doctor'],
			transformResponse: (response: { Doctors: DoctorStoreType }) => ({
				id: response.Doctors.id,
				email: response.Doctors.email,
				name: response.Doctors.name,
				firstname: response.Doctors.firstname,
				address: {
					street: response.Doctors.address.street,
					city: response.Doctors.address.city,
					zipCode: response.Doctors.address.zip_code,
					country: response.Doctors.address.country,
				},
			}),
		}),
	}),
});

export const { useGetDoctorByIdQuery, useLazyGetDoctorByIdQuery } = extendedApi;
