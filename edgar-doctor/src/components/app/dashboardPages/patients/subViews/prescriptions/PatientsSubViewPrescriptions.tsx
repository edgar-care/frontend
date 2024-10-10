import { useEffect, useState } from 'react';
import { Button, Skeleton, useDisclosure, VStack } from '@chakra-ui/react';

import Pagination from 'components/navigation/Pagination';
import PatientPrescriptionCard from 'components/app/dashboardPages/patients/subViews/prescriptions/PatientPrescriptionCard';
import PatientAddPrescriptionHandler from 'components/app/dashboardPages/patients/subViews/prescriptions/modals/PatientAddPrescriptionHandler';

import { useGetPrescriptionsQuery } from 'services/request/prescriptions';

import type { PatientType } from 'types/app/dashboard/patients/PatientType';
import type { PatientPrescriptionType } from 'types/app/dashboard/patients/prescriptions/PatientPrescriptionType';

import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';
import paginationHandler from 'utils/navigation/paginationHandler';

const PatientsSubViewPrescriptions = ({
	selectedPatient,
}: {
	selectedPatient: PatientType | undefined;
}): JSX.Element => {
	const { data: prescriptions, isLoading: isPrescriptionsLoading } = useGetPrescriptionsQuery();

	const [pageIndex, setPageIndex] = useState(1);
	const [patientPrescriptions, setPatientPrescriptions] = useState<PatientPrescriptionType[]>([]);

	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (prescriptions) {
			const filteredPrescriptions = prescriptions.filter(
				(prescription) => prescription.patientId === selectedPatient?.id,
			);
			setPatientPrescriptions(filteredPrescriptions);
		}
	}, [prescriptions]);

	return (
		<Skeleton
			isLoaded={selectedPatient !== undefined && !isPrescriptionsLoading}
			w="100%"
			h="100%"
			borderRadius="8px"
		>
			{selectedPatient && (
				<VStack w="100%" h="100%" justify="space-between">
					<VStack w="100%" spacing="16px" align="start">
						<Button w={{ base: '100%', md: 'auto' }} onClick={onOpen}>
							Créer une ordonnance
						</Button>
						<VStack w="100%" spacing="4px">
							{paginationHandler(patientPrescriptions, pageIndex, 6).map((prescription) => (
								<PatientPrescriptionCard prescriptionId={prescription.id} key={prescription.id} />
							))}
						</VStack>
					</VStack>
					{patientPrescriptions.length > 6 && (
						<Pagination
							pageIndex={pageIndex}
							maxPageNumbers={countMaxNumberPage(patientPrescriptions, 6)}
							setPageIndex={setPageIndex}
							variant="secondary"
							size="small"
						/>
					)}
					<PatientAddPrescriptionHandler isOpen={isOpen} onClose={onClose} patient={selectedPatient} />
				</VStack>
			)}
		</Skeleton>
	);
};

export default PatientsSubViewPrescriptions;
