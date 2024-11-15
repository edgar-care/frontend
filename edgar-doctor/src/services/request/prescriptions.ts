import { backendApi } from 'services/apiService';

import type { PatientPrescriptionStoreType, UploadPatientPrescriptionDTO } from 'store/types/prescriptions.type';

import type { PatientPrescriptionType } from 'types/app/dashboard/patients/prescriptions/PatientPrescriptionType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getPrescriptionById: builder.query<PatientPrescriptionType, string>({
			query: (prescriptionId) => `/dashboard/prescription/${prescriptionId}`,
			transformResponse: (response: {
				prescription: PatientPrescriptionStoreType;
				url_prescription: string;
			}) => ({
				id: response.prescription.id,
				createdBy: response.prescription.created_by,
				patientId: response.prescription.patient_id,
				downloadUrl: response.url_prescription,
				createdAt: response.prescription.createdAt * 1000,
			}),
			providesTags: ['doctorPrescriptions'],
		}),

		getPrescriptions: builder.query<PatientPrescriptionType[], void>({
			query: () => '/dashboard/prescription',
			transformResponse: (response: { prescriptions?: PatientPrescriptionStoreType[] }) =>
				response.prescriptions?.map((prescription) => ({
					id: prescription.id,
					createdBy: prescription.created_by,
					patientId: prescription.patient_id,
					downloadUrl: prescription.URL,
					createdAt: prescription.createdAt * 1000,
				})) || [],
			providesTags: ['doctorPrescriptions'],
		}),

		uploadPrescription: builder.mutation<void, UploadPatientPrescriptionDTO>({
			query: (data) => ({
				url: '/dashboard/prescription',
				method: 'POST',
				body: {
					patient_id: data.patientId,
					medicines: data.medicines.map((medicine) => ({
						medicine_id: medicine.medicineId,
						qsp: medicine.qsp,
						qsp_unit: medicine.qspUnit,
						comment: medicine.comment,
						periods: medicine.periods.map((period) => ({
							quantity: period.quantity,
							frequency: period.frequency,
							frequency_ratio: period.frequencyRatio,
							frequency_unit: period.frequencyUnit,
							period_length: period.periodLength,
							period_unit: period.periodUnit,
						})),
					})),
				},
			}),
			invalidatesTags: ['doctorPrescriptions'],
		}),
	}),
});

export const {
	useGetPrescriptionByIdQuery,
	useLazyGetPrescriptionByIdQuery,
	useGetPrescriptionsQuery,
	useLazyGetPrescriptionsQuery,
	useUploadPrescriptionMutation,
} = extendedApi;
