import { backendApi } from 'services/apiService';

import { type AgendaSlotType } from 'types/app/dashboard/agenda/AgendaSlotType';

import { type OpenSlotDTO, SlotsStoreType } from 'store/types/slots.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getSlots: builder.query<AgendaSlotType[], void>({
			query: () => '/doctor/slots',
			providesTags: ['doctorSlots'],
			transformResponse: (response: { slot: SlotsStoreType[] }) =>
				response.slot.map((elem) => ({
					id: elem.id,
					startDate: elem.start_date * 1000,
					endDate: elem.end_date * 1000,
					patientId: elem.id_patient,
					status: elem.id_patient ? 'BOOKED' : 'OPEN',
				})),
		}),

		getOpenSlots: builder.query<AgendaSlotType[], void>({
			query: () => '/doctor/slots',
			providesTags: ['doctorSlots'],
			transformResponse: (response: { slot: SlotsStoreType[] }) =>
				response.slot
					.filter((slot) => !slot.id_patient)
					.map((slot) => ({
						id: slot.id,
						startDate: slot.start_date * 1000,
						endDate: slot.end_date * 1000,
						patientId: slot.id_patient,
						status: 'OPEN',
					})),
		}),

		openSlot: builder.mutation<SlotsStoreType, OpenSlotDTO>({
			query: (params) => ({
				url: '/doctor/slot',
				method: 'POST',
				body: {
					start_date: params.start_date / 1000,
					end_date: params.end_date / 1000,
				},
			}),
			invalidatesTags: ['doctorSlots'],
		}),

		closeSlot: builder.mutation<SlotsStoreType, string>({
			query: (id) => ({
				url: `/doctor/slot/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['doctorSlots'],
		}),
	}),
});

export const {
	useGetSlotsQuery,
	useLazyGetSlotsQuery,
	useGetOpenSlotsQuery,
	useLazyGetOpenSlotsQuery,
	useOpenSlotMutation,
	useCloseSlotMutation,
} = extendedApi;
