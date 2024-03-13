import { useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';

import PatientsCard from 'components/app/dashboardPages/patients/PatientsCard';
import PatientsSubViewManager from 'components/app/dashboardPages/patients/subViews/PatientsSubViewManager';

import { useGetPatientsQuery } from 'services/request/patients';

const Patients = ({ patientSearch }: { patientSearch: string }): JSX.Element => {
	const { data: patients } = useGetPatientsQuery();
	const [selectedPatientId, setSelectedPatientId] = useState('');

	return (
		<HStack spacing="16px" w="100%" h="100%">
			<VStack w="100%" maxW="384px" align="start" h="100%" justify="space-between">
				<VStack w="100%">
					{patients
						?.filter((patient) =>
							`${patient.medicalInfos.name} ${patient.medicalInfos.firstname}`
								.toLowerCase()
								.includes(patientSearch.toLowerCase()),
						)
						.map((patient) => (
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
			<PatientsSubViewManager
				selectedPatient={patients?.filter((patient) => patient.id === selectedPatientId)[0]}
			/>
		</HStack>
	);
};

export default Patients;
