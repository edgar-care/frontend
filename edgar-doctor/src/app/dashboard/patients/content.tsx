'use client';

import { useState } from 'react';
import { VStack, HStack, Button } from '@chakra-ui/react';
// import { useDisclosure } from '@chakra-ui/react';
// import Link from 'next/link';

import PatientCard from 'components/app/dashboardPages/patients/PatientCard';
import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';

import { PatientType } from 'types/dashboard/patients/PatientType';

const PatientsPageContent = (): JSX.Element => {
	const [patientList] = useState<PatientType[]>([
		{
			id: '1',
			date: Date.now(),
			name: 'Edgar Assistant',
			doctor: 'Vous',
		},
		{
			id: '2',
			date: Date.now(),
			name: 'Edgar Assistant 2',
			doctor: 'Docteur XX',
		},
	]);
	// const { isOpen: isOpenAddModal, onOpen: onOpenAddModal, onClose: onCloseAddModal } = useDisclosure();

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner title="Mes patients" subTitle="Retrouvez toutes les informations de vos patients." />
			<VStack w="100%" spacing="16px">
				<HStack w="100%" spacing="16px">
					<Button
						size="md"
						variant="primary"
						whiteSpace="nowrap"
						id="edgar-dashboardPatientsPage-addPatient-button"
					>
						Ajouter un patient
					</Button>
				</HStack>
				<VStack w="100%" spacing="8px" align="start">
					{patientList.map((patient) => (
						<PatientCard key={patient.id} patient={patient} />
					))}
				</VStack>
			</VStack>
		</VStack>
	);
};

export default PatientsPageContent;
