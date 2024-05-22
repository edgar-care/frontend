import { backendApi } from 'services/apiService';

import { type AppointmentType } from 'types/dashboard/appointments/appointmentType';

import {
	type AddPatientAppointmentsDTO,
	type AppointmentsStoreType,
	type UpdatePatientAppointmentsDTO,
} from 'store/types/appointments.type';
import { AppointmentStatusType } from 'types/dashboard/appointments/AppointmentStatusType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getPatientAppointments: builder.query<AppointmentType[], void>({
			query: () => '/patient/appointments',
			providesTags: ['patientAppointments'],
			transformResponse: (response: { rdv: AppointmentsStoreType[] }) =>
				response.rdv.map((appointment) => ({
					id: appointment.id,
					doctorId: appointment.doctor_id,
					patientId: appointment.id_patient,
					startDate: appointment.start_date * 1000,
					endDate: appointment.end_date * 1000,
					cancelationReason: appointment.cancelation_reason,
					appointmentStatus: appointment.appointment_status as AppointmentStatusType,
					sessionId: appointment.session_id,
				})),
		}),

		getPatientAppointmentById: builder.query<AppointmentType, string>({
			query: (id) => `/patient/appointments/${id}`,
			providesTags: ['patientAppointments'],
			transformResponse: (response: { rdv: { Rdv: AppointmentsStoreType } }) => ({
				id: response.rdv.Rdv.id,
				doctorId: response.rdv.Rdv.doctor_id,
				patientId: response.rdv.Rdv.id_patient,
				startDate: response.rdv.Rdv.start_date * 1000,
				endDate: response.rdv.Rdv.end_date * 1000,
				cancelationReason: response.rdv.Rdv.cancelation_reason,
				appointmentStatus: response.rdv.Rdv.appointment_status as AppointmentStatusType,
				sessionId: response.rdv.Rdv.session_id,
			}),
		}),

		getDoctorAppointments: builder.query<AppointmentType[], string>({
			query: (id) => `/doctor/${id}/appointments`,
			providesTags: ['doctorAppointments'],
			transformResponse: (response: { rdv: AppointmentsStoreType[] }) =>
				response.rdv
					.map((appointment) => ({
						id: appointment.id,
						doctorId: appointment.doctor_id,
						patientId: appointment.id_patient,
						startDate: appointment.start_date * 1000,
						endDate: appointment.end_date * 1000,
						cancelationReason: appointment.cancelation_reason,
						appointmentStatus: appointment.appointment_status as AppointmentStatusType,
						sessionId: appointment.session_id,
					}))
					.sort((a, b) => a.startDate - b.startDate),
		}),

		addPatientAppointment: builder.mutation<void, AddPatientAppointmentsDTO>({
			query: (params) => ({
				url: `/appointments/${params.appointmentId}`,
				method: 'POST',
				body: {
					session_id: params.sessionId,
				},
			}),
			invalidatesTags: ['patientAppointments', 'doctorAppointments'],
		}),

		updatePatientAppointment: builder.mutation<void, UpdatePatientAppointmentsDTO>({
			query: (params) => ({
				url: `/appointments/${params.oldAppointmentId}`,
				method: 'PUT',
				body: {
					id: params.newAppointmentId,
				},
			}),
			invalidatesTags: ['patientAppointments', 'doctorAppointments'],
		}),

		deletePatientAppointment: builder.mutation<void, string>({
			query: (id) => ({
				url: `/appointments/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['patientAppointments'],
		}),
	}),
});

export const {
	useGetPatientAppointmentsQuery,
	useLazyGetPatientAppointmentsQuery,
	useGetPatientAppointmentByIdQuery,
	useLazyGetPatientAppointmentByIdQuery,
	useGetDoctorAppointmentsQuery,
	useLazyGetDoctorAppointmentsQuery,
	useAddPatientAppointmentMutation,
	useUpdatePatientAppointmentMutation,
	useDeletePatientAppointmentMutation,
} = extendedApi;
