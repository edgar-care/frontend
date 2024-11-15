'use client';

import { useState } from 'react';
import {
	Button,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	useBreakpointValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import TreatmentsCalendar from 'components/dashboardPages/treatments/TreatmentsCalendar';
import AddTreatmentHandler from 'components/dashboardPages/treatments/modal/AddTreatmentHandler';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

import SearchIcon from 'assets/icons/SearchIcon';
import AntecedentCard from 'components/dashboardPages/treatments/AntecedentCard';
import AntecedentInfosHandler from 'components/dashboardPages/treatments/AntecedentInfosHandler';

const TreatmentsPageContent = (): JSX.Element => {
	const { data: medicalInfo } = useGetPatientMedicalFolderQuery();

	const hasDrawerOnTheLeft = useBreakpointValue({ base: false, '2xl': true });

	const [searchText, setSearchText] = useState('');
	const [selectedAntecedentId, setSelectedAntecedentId] = useState('');

	const treatments: PatientMedicineType[] =
		medicalInfo?.medicalAntecedents
			.filter((antecedent) => antecedent.stillRelevant)
			.map((antecedent) => antecedent.medicines)
			.flat() || [];

	const { isOpen: isOpenAddModal, onOpen: onOpenAddModal, onClose: onCloseAddModal } = useDisclosure();

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mes traitements"
				subTitle="Retrouvez tous vos traitements en cours et passés."
			/>
			<VStack w="100%" spacing="16px">
				<Stack direction={{ base: 'column', md: 'row' }} w="100%" spacing="16px">
					<Button
						whiteSpace="nowrap"
						w={{ base: '100%', md: 'auto' }}
						onClick={onOpenAddModal}
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
				</Stack>
				<Stack direction={{ base: 'column', md: 'row' }} w="100%" spacing="16px" align="start">
					<TreatmentsCalendar treatments={treatments} />
					<HStack w="100%" align="start" h="100%">
						<VStack w="100%" spacing="8px" h="100%">
							{medicalInfo?.medicalAntecedents.map((antecedent) => (
								<VStack w="100%">
									<AntecedentCard
										key={antecedent.id}
										antecedent={antecedent}
										manageOnClick={() => setSelectedAntecedentId(antecedent.id)}
									/>
									{!hasDrawerOnTheLeft && selectedAntecedentId === antecedent.id && (
										<AntecedentInfosHandler antecedent={antecedent} />
									)}
								</VStack>
							))}
						</VStack>
						{hasDrawerOnTheLeft && selectedAntecedentId && (
							<AntecedentInfosHandler
								antecedent={medicalInfo?.medicalAntecedents.find(
									(antecedent) => antecedent.id === selectedAntecedentId,
								)}
							/>
						)}
					</HStack>
				</Stack>
			</VStack>
			<AddTreatmentHandler isOpen={isOpenAddModal} onClose={onCloseAddModal} />
		</VStack>
	);
};

export default TreatmentsPageContent;
