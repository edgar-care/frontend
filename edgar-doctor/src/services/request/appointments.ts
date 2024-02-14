import { backendApi } from 'services/apiService';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

import { type AppointmentsStoreType, type UpdateAppointmentDTO } from 'store/types/appointments.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getDoctorAppointments: builder.query<AppointmentType[], void>({
			query: () => '/doctor/appointments',
			providesTags: ['doctorAppointments'],
			transformResponse: (response: { appointments: AppointmentsStoreType[] }) =>
				response.appointments.map((appointment) => ({
					id: appointment.id,
					doctorId: appointment.doctor_id,
					patientId: appointment.id_patient,
					startDate: appointment.start_date * 1000,
					endDate: appointment.end_date * 1000,
				})),
		}),
		updateDoctorAppointment: builder.mutation<void, UpdateAppointmentDTO>({
			query: (params) => ({
				url: `/doctor/appointments/${params.selectedAppointmentId}`,
				method: 'PUT',
				body: {
					id: params.newAppointmentId,
				},
			}),
			invalidatesTags: ['doctorAppointments', 'doctorSlots'],
		}),
	}),
});

export const { useGetDoctorAppointmentsQuery, useLazyGetDoctorAppointmentsQuery, useUpdateDoctorAppointmentMutation } = extendedApi;
