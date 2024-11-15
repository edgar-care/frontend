import { backendApi } from 'services/apiService';

import { type DoctorType } from 'types/app/dashboard/DoctorType';
import { type DoctorStoreType } from 'store/types/doctor.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getDoctorById: builder.query<DoctorType, string>({
			query: (id) => `/doctor/${id}`,
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

		getDoctors: builder.query<DoctorType[], void>({
			query: () => `/doctors`,
			transformResponse: (response: { Doctors?: DoctorStoreType[] }) =>
				response.Doctors?.map((doctor) => ({
					id: doctor.id,
					email: doctor.email,
					name: doctor.name,
					firstname: doctor.firstname,
					address: {
						street: doctor.address.street,
						city: doctor.address.city,
						zipCode: doctor.address.zip_code,
						country: doctor.address.country,
					},
				})) || [],
		}),
	}),
});

export const { useGetDoctorByIdQuery, useLazyGetDoctorByIdQuery, useGetDoctorsQuery, useLazyGetDoctorsQuery } =
	extendedApi;
