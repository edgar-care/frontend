import { backendApi } from 'services/apiService';

import { type DoctorStoreType, type SlotsStoreType } from 'store/types/doctor.type';

import { type DoctorType } from 'types/dashboard/DoctorType';
import { type SlotType } from 'types/simulation/appointments/SlotType';

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

		getDoctors: builder.query<DoctorType[], void>({
			query: () => `/doctors`,
			providesTags: ['doctor'],
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

		getDoctorByIdSlots: builder.query<SlotType[], string>({
			query: (id) => `/doctor/${id}/appointments`,
			providesTags: ['doctor'],
			transformResponse: (response: { rdv?: SlotsStoreType[] }) =>
				response.rdv
					?.filter(
						(slot) => slot.appointment_status === 'OPENED' && slot.start_date * 1000 > new Date().getTime(),
					)
					.map((slot) => ({
						id: slot.id,
						startDate: slot.start_date * 1000,
						endDate: slot.end_date * 1000,
						doctorId: slot.doctor_id,
					})) || [],
		}),
	}),
});

export const {
	useGetDoctorByIdQuery,
	useLazyGetDoctorByIdQuery,
	useGetDoctorsQuery,
	useLazyGetDoctorsQuery,
	useGetDoctorByIdSlotsQuery,
	useLazyGetDoctorByIdSlotsQuery,
} = extendedApi;
