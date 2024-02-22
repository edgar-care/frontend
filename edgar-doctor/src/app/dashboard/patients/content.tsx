'use client';

import { VStack, HStack, Button } from '@chakra-ui/react';

import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';
import Patients from 'components/app/dashboardPages/patients/Patients';

const PatientsPageContent = (): JSX.Element => (
	<VStack w="100%" spacing="32px" h="100%">
		<DashboardPageBanner title="Mes patients" subTitle="Retrouvez toutes les informations de vos patients." />
		<VStack w="100%" spacing="16px" h="100%">
			<HStack w="100%" spacing="16px">
				<Button id="edgar-dashboardPatientsPage-addPatient-button">Ajouter un patient</Button>
			</HStack>
			<Patients />
		</VStack>
	</VStack>
);

export default PatientsPageContent;
