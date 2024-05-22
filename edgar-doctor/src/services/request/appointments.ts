import { backendApi } from 'services/apiService';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

import {
	type AppointmentsStoreType,
	type UpdateAppointmentDTO,
	type CancelAppointmentDTO,
} from 'store/types/appointments.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getDoctorAppointments: builder.query<AppointmentType[] | undefined, void>({
			query: () => '/doctor/appointments',
			providesTags: ['doctorAppointments'],
			transformResponse: (response: { appointments?: AppointmentsStoreType[] }) =>
				response.appointments?.map((appointment) => ({
					id: appointment.id,
					doctorId: appointment.doctor_id,
					patientId: appointment.id_patient,
					startDate: appointment.start_date * 1000,
					endDate: appointment.end_date * 1000,
					cancelationReason: appointment.cancelation_reason,
					appointmentStatus: appointment.appointment_status,
					sessionId: appointment.session_id,
				})) || [],
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
		cancelDoctorAppointment: builder.mutation<void, CancelAppointmentDTO>({
			query: (params) => ({
				url: `/doctor/appointments/${params.appointmentId}`,
				method: 'DELETE',
				body: {
					reason: params.reason,
				},
			}),
			invalidatesTags: ['doctorAppointments', 'doctorSlots'],
		}),
	}),
});

export const {
	useGetDoctorAppointmentsQuery,
	useLazyGetDoctorAppointmentsQuery,
	useUpdateDoctorAppointmentMutation,
	useCancelDoctorAppointmentMutation,
} = extendedApi;
