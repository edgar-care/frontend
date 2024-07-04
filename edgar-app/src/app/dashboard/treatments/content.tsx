'use client';

import { useState } from 'react';
import { Button, HStack, Icon, Input, InputGroup, InputRightElement, Stack, VStack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import TreatmentsCalendar from 'components/dashboardPages/treatments/TreatmentsCalendar';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

import { type TreatmentSubNavigationType } from 'types/dashboard/treatments/TreatmentSubNavigationType';
import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

import SearchIcon from 'assets/icons/SearchIcon';
import AntecedentCard from 'components/dashboardPages/treatments/AntecedentCard';
import AntecedentInfosHandler from 'components/dashboardPages/treatments/AntecedentInfosHandler';

const TreatmentsPageContent = (): JSX.Element => {
	const { data: medicalInfo } = useGetPatientMedicalFolderQuery();

	const [searchText, setSearchText] = useState('');
	const [selectedAntecedentId, setSelectedAntecedentId] = useState('');

	const treatments: PatientMedicineType[] =
		medicalInfo?.medicalAntecedents
			.filter((antecedent) => antecedent.stillRelevant)
			.map((antecedent) => antecedent.medicines)
			.flat() || [];

	const allAntecedents: PatientMedicalAntecedentType[] =
		(medicalInfo?.medicalAntecedents
			.filter((antecedent) => antecedent.stillRelevant)
			.concat(medicalInfo?.medicalAntecedents
				.filter((antecedent) => !antecedent.stillRelevant)) || []);

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mes traitements"
				subTitle="Retrouvez tous vos traitements en cours et passés."
			/>
			<VStack w="100%" spacing="16px">
				<HStack w="100%" spacing="16px">
					<Button
						whiteSpace="nowrap"
						w={{ base: '100%', md: 'auto' }}
						id="edgar-dashboardTreatmentsPage-addTreatment-button"
					>
						Ajouter un traitement
					</Button>
						<InputGroup w="100%">
							<Input
								placeholder="Rechercher par nom de maladie ou de traitement"
								value={searchText}
								onChange={(e) => setSearchText(e.target.value)}
							/>
							<InputRightElement>
								<Icon as={SearchIcon} w="16px" h="16px" />
							</InputRightElement>
						</InputGroup>
				</HStack>
				<HStack w="100%" spacing="16px" align="start">
					<TreatmentsCalendar treatments={treatments} />
					<HStack w="100%" align="start" h="100%">
						<VStack w="100%" spacing="8px" h="100%">
							{allAntecedents.map((antecedent) => (
								<AntecedentCard key={antecedent.id} antecedent={antecedent} manageOnClick={() => setSelectedAntecedentId(antecedent.id)} />
							))}
						</VStack>
						{selectedAntecedentId && (
							<AntecedentInfosHandler antecedent={allAntecedents.find((antecedent) => antecedent.id === selectedAntecedentId)} />
						)}
					</HStack>
				</HStack>
			</VStack>
		</VStack>
	);
};

export default TreatmentsPageContent;
