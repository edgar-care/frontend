import { useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';

import PatientsCard from 'components/app/dashboardPages/patients/PatientsCard';
import PatientsSubViewManager from 'components/app/dashboardPages/patients/subViews/PatientsSubViewManager';

import { type PatientType } from 'types/app/dashboard/patients/PatientType';

const Patients = (): JSX.Element => {
	const [selectedPatientId, setSelectedPatientId] = useState('');

	const patientList: PatientType[] = [
		{
			id: '1',
			email: 'test@gmail.com',
			medicalInfos: {
				firstname: 'John',
				name: 'Doe',
				birthdate: 123456789,
				sex: 'MALE',
				weight: 80,
				height: 180,
				primaryDoctorId: '658d868d459367c3ebf4d7e6',
				onboardingStatus: 'IN_PROGRESS',
				medicalAntecedents: [
					{
						id: '1',
						name: 'Diabète',
						treatments: [
							{
								id: '1',
								medicineId: '1',
								periods: ['MORNING', 'EVENING'],
								days: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'],
								quantity: 2,
							},
						],
						stillRelevant: true,
					},
				],
			},
		},
		{
			id: '2',
			email: 'jane@gmail.com',
			medicalInfos: {
				firstname: 'Jane',
				name: 'Doe',
				birthdate: 234567890,
				sex: 'FEMALE',
				weight: 60,
				height: 170,
				primaryDoctorId: '658d868d459367c3ebf4d7e6',
				onboardingStatus: 'DONE',
				medicalAntecedents: [
					{
						id: '2',
						name: 'Hypertension',
						treatments: [
							{
								id: '2',
								medicineId: '2',
								periods: ['MORNING', 'EVENING'],
								days: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'],
								quantity: 1,
							},
						],
						stillRelevant: true,
					},
				],
			},
		},
	];

	return (
		<HStack spacing="16px" w="100%" h="100%">
			<VStack w="100%" maxW="384px" align="start" h="100%" justify="space-between">
				<VStack w="100%">
					{patientList.map((patient) => (
						<PatientsCard
							key={patient.id}
							patient={patient}
							selectedPatientId={selectedPatientId}
							setSelectedPatientId={setSelectedPatientId}
						/>
					))}
				</VStack>
				{/*	TODO: add pagination */}
			</VStack>
			<PatientsSubViewManager selectedPatientId={selectedPatientId} />
		</HStack>
	);
};

export default Patients;
