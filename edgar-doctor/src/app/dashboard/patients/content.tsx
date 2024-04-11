'use client';

import { useState } from 'react';
import { Button, InputGroup, Input, Icon, InputRightElement, Stack, VStack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';
import Patients from 'components/app/dashboardPages/patients/Patients';

import SearchIcon from 'assets/icons/SearchIcon';

const PatientsPageContent = (): JSX.Element => {
	const [patientSearch, setPatientSearch] = useState('');

	return (
		<VStack w="100%" spacing="32px" h="100%">
			<DashboardPageBanner title="Mes patients" subTitle="Retrouvez toutes les informations de vos patients." />
			<VStack w="100%" spacing="16px" h="100%">
				<Stack direction={{ base: 'column', sm2: 'row' }} w="100%" spacing="16px">
					<Button id="edgar-dashboardPatientsPage-addPatient-button" whiteSpace="nowrap">
						Ajouter un patient
					</Button>
					<InputGroup>
						<Input
							placeholder="Rechercher par nom du patient"
							onChange={(e) => setPatientSearch(e.target.value)}
							id="edgar-dashboardPatientsPage-searchBar-input"
						/>
						<InputRightElement>
							<Icon as={SearchIcon} w="16px" h="16px" />
						</InputRightElement>
					</InputGroup>
				</Stack>
				<Patients patientSearch={patientSearch} />
			</VStack>
		</VStack>
	);
};

export default PatientsPageContent;
