import { backendApi } from 'services/apiService';

import { type PatientsStoreType } from 'store/types/patients.type';

import { type PatientType } from 'types/app/dashboard/patients/PatientType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getPatientById: builder.query<PatientType, string>({
			query: (patientId) => `/doctor/patient/${patientId}`,
			providesTags: ['patients'],
			transformResponse: (response: { patient: PatientsStoreType }) => ({
				id: response.patient.id,
				email: response.patient.email,
				medicalInfos: {
					name: response.patient.medical_info.name,
					firstname: response.patient.medical_info.firstname,
					birthdate: response.patient.medical_info.birthdate,
					sex: response.patient.medical_info.sex,
					height: response.patient.medical_info.height,
					weight: response.patient.medical_info.weight,
					primaryDoctorId: response.patient.medical_info.primary_doctor_id,
					onboardingStatus: response.patient.medical_info.onboarding_status,
					medicalAntecedents: response.patient.medical_info.medical_antecedents.map((antecedent) => ({
						id: antecedent.id,
						name: antecedent.name,
						medicines: antecedent.medicines.map((medicine) => ({
							id: medicine.id,
							medicineId: medicine.medicine_id,
							periods: medicine.period,
							days: medicine.day,
							quantity: medicine.quantity,
						})),
						stillRelevant: antecedent.stillRelevant,
					})),
				},
				appointmentIds: response.patient.rendez_vous_ids,
				documentIds: response.patient.documents_ids,
			}),
		}),

		getPatients: builder.query<PatientType[], void>({
			query: () => '/doctor/patients',
			providesTags: ['patients'],
			transformResponse: (response: { patients: PatientsStoreType[] }) =>
				response.patients.map((patient) => ({
					id: patient.id,
					email: patient.email,
					medicalInfos: {
						name: patient.medical_info.name,
						firstname: patient.medical_info.firstname,
						birthdate: patient.medical_info.birthdate * 1000,
						sex: patient.medical_info.sex,
						height: patient.medical_info.height,
						weight: patient.medical_info.weight,
						primaryDoctorId: patient.medical_info.primary_doctor_id,
						onboardingStatus: patient.medical_info.onboarding_status,
						medicalAntecedents: patient.medical_info.medical_antecedents.map((antecedent) => ({
							id: antecedent.id,
							name: antecedent.name,
							medicines: antecedent.medicines.map((medicine) => ({
								id: medicine.id,
								medicineId: medicine.medicine_id,
								periods: medicine.period,
								days: medicine.day,
								quantity: medicine.quantity,
							})),
							stillRelevant: antecedent.stillRelevant,
						})),
					},
					appointmentIds: patient.rendez_vous_ids,
					documentIds: patient.documents_ids,
				})),
		}),
	}),
});

export const { useGetPatientByIdQuery, useLazyGetPatientByIdQuery, useGetPatientsQuery, useLazyGetPatientsQuery } =
	extendedApi;
