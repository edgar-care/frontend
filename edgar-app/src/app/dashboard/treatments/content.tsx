'use client';

import { useState } from 'react';
import { Button, HStack, Icon, Input, InputGroup, InputRightElement, Stack, VStack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import TreatmentsCalendar from 'components/dashboardPages/treatments/TreatmentsCalendar';
import TreatmentsCurrentAntecedents from 'components/dashboardPages/treatments/TreatmentsCurrentAntecedents';
import TreatmentsPastAntecedents from 'components/dashboardPages/treatments/TreatmentsPastAntecedents';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

import { type TreatmentSubNavigationType } from 'types/dashboard/treatments/TreatmentSubNavigationType';
import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

import SearchIcon from 'assets/icons/SearchIcon';

const TreatmentsPageContent = (): JSX.Element => {
	const { data: medicalInfo } = useGetPatientMedicalFolderQuery();

	const [searchText, setSearchText] = useState('');
	const [subNavigationState, setSubNavigationState] = useState<TreatmentSubNavigationType>('CALENDAR');

	const treatments: PatientMedicineType[] =
		medicalInfo?.medicalAntecedents
			.filter((antecedent) => antecedent.stillRelevant)
			.map((antecedent) => antecedent.medicines)
			.flat() || [];

	const currentAntecedents: PatientMedicalAntecedentType[] =
		medicalInfo?.medicalAntecedents
			.filter((antecedent) => antecedent.stillRelevant)
			.map((antecedent) => antecedent)
			.flat() || [];

	const pastAntecedents: PatientMedicalAntecedentType[] =
		medicalInfo?.medicalAntecedents
			.filter((antecedent) => !antecedent.stillRelevant)
			.map((antecedent) => antecedent)
			.flat() || [];

	const subNavigation: { [key: string]: JSX.Element } = {
		CALENDAR: <TreatmentsCalendar treatments={treatments} />,
		CURRENT: <TreatmentsCurrentAntecedents antecedents={currentAntecedents} />,
		PASSED: <TreatmentsPastAntecedents antecedents={pastAntecedents} />,
	};

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
					{subNavigationState !== 'CALENDAR' && (
						<InputGroup w="100%">
							<Input
								placeholder="Rechercher par nom du document ou nom du médecin"
								value={searchText}
								onChange={(e) => setSearchText(e.target.value)}
							/>
							<InputRightElement>
								<Icon as={SearchIcon} w="16px" h="16px" />
							</InputRightElement>
						</InputGroup>
					)}
				</HStack>
				<Stack direction={{ base: 'column', md: 'row' }} w="100%">
					<Button
						variant={subNavigationState === 'CALENDAR' ? 'primary' : 'secondary'}
						onClick={() => setSubNavigationState('CALENDAR')}
						w="100%"
						id="edgar-dashboardTreatmentsPage-calendarNavigation-button"
					>
						Calendrier
					</Button>
					<Button
						variant={subNavigationState === 'CURRENT' ? 'primary' : 'secondary'}
						onClick={() => setSubNavigationState('CURRENT')}
						w="100%"
						id="edgar-dashboardTreatmentsPage-currentTreatmentsNavigation-button"
					>
						Traitements en cours
					</Button>
					<Button
						variant={subNavigationState === 'PASSED' ? 'primary' : 'secondary'}
						onClick={() => setSubNavigationState('PASSED')}
						w="100%"
						id="edgar-dashboardTreatmentsPage-passedTreatmentsNavigation-button"
					>
						Traitements finis
					</Button>
				</Stack>
				{subNavigation[subNavigationState]}
			</VStack>
		</VStack>
	);
};

export default TreatmentsPageContent;
