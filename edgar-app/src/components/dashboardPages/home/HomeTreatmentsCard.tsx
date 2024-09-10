import { Box, Button, HStack, Icon, Skeleton, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import TreatmentsCalendarHome from 'components/dashboardPages/treatments/TreatmentsCalendarHome';

import { useGetMedicinesQuery } from 'services/request/medicines';
import { useGetFollowUpTreatmentsQuery } from 'services/request/treatments';
import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

import groupTreatmentsByDayPeriod from 'utils/app/dashboard/treatments/groupTreatmentsByDayPeriod';
import groupFollowUpTreatmentsByDayPeriod from 'utils/app/dashboard/treatments/groupFollowUpTreatmentsByDayPeriod';

import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import type { HealthIssuesMedicinesDayType } from 'types/dashboard/medical/HealthIssueType';

import WarningIcon from 'assets/icons/WarningIcon';

const HomeTreatmentsCard = (): JSX.Element => {
	const { data: medicalInfo } = useGetPatientMedicalFolderQuery();
	const { data: medicinesInfo } = useGetMedicinesQuery();
	const { data: checkedTreatments, isLoading } = useGetFollowUpTreatmentsQuery();

	const todayDay = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();

	const treatments: PatientMedicineType[] =
		medicalInfo?.medicalAntecedents
			.filter((antecedent) => antecedent.stillRelevant)
			.map((antecedent) => antecedent.medicines)
			.flat() || [];

	const groupedTreatments = groupTreatmentsByDayPeriod(treatments);
	const groupedFollowUpTreatments = groupFollowUpTreatmentsByDayPeriod(checkedTreatments || []);

	return (
		<VStack spacing="16px" w="100%" bg="white" borderRadius="16px" p="16px" border="2px" borderColor="blue.200">
			<Box w="100%">
				<Link href="/dashboard/treatments">
					<Button w="100%" size="customLg" id="edgar-dashboardHomePage-chat-button">
						Consulter mes traitements
					</Button>
				</Link>
			</Box>
			<Box w="100%" h="2px" bg="blue.700" />
			{treatments.length > 0 ? (
				<VStack w="100%" align="start">
					<Text size="boldMd">Vos médicaments d'aujourd'hui</Text>
					<Skeleton isLoaded={!isLoading}>
						{!isLoading && (
							<TreatmentsCalendarHome
								day={todayDay as HealthIssuesMedicinesDayType}
								periods={groupedTreatments[todayDay]}
								checkedTreatments={groupedFollowUpTreatments[todayDay]}
								medicinesInfo={medicinesInfo || []}
								displayDay={false}
							/>
						)}
					</Skeleton>
				</VStack>
			) : (
				<VStack
					w="100%"
					borderRadius="16px"
					border="2px"
					borderColor="orange.300"
					bg="orange.100"
					p="8px 16px"
					spacing="8px"
				>
					<HStack spacing="16px" w="100%">
						<Icon as={WarningIcon} w="32px" h="32px" color="orange.600" />
						<Text color="orange.600" size="boldMd">
							Vous n’avez pas encore enregistré de suivi sur vos traitements
						</Text>
					</HStack>
					<Button size="sm" variant="secondary" w="100%">
						Ajouter un suivi
					</Button>
				</VStack>
			)}
		</VStack>
	);
};

export default HomeTreatmentsCard;
