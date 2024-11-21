import { useState } from 'react';
import { HStack, Skeleton, useBreakpointValue, VStack } from '@chakra-ui/react';

import PatientsCard from 'components/app/dashboardPages/patients/PatientsCard';
import PatientsSubViewManager from 'components/app/dashboardPages/patients/subViews/PatientsSubViewManager';

import { useGetPatientsQuery } from 'services/request/patients';

const Patients = ({ patientSearch }: { patientSearch: string }): JSX.Element => {
	const { data: patients, isLoading } = useGetPatientsQuery();
	const [selectedPatientId, setSelectedPatientId] = useState('');

	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<HStack spacing="16px" w="100%" h="100%" align="stretch" overflow="hidden">
			{(!isMobile || !selectedPatientId) && (
				<VStack
					w="100%"
					maxW={{ base: '100%', md: '250px', xl: '300px', '2xl': '384px' }}
					align="start"
					h="100%"
					justify="space-between"
				>
					<Skeleton isLoaded={!isLoading && patients !== undefined} w="100%" h="100%" borderRadius="8px">
						<VStack w="100%" h="100%">
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
					</Skeleton>
				</VStack>
			)}
			{(!isMobile || selectedPatientId) && (
				<PatientsSubViewManager
					selectedPatient={patients?.filter((patient) => patient.id === selectedPatientId)[0]}
					setSelectedPatientId={setSelectedPatientId}
				/>
			)}
		</HStack>
	);
};

export default Patients;
