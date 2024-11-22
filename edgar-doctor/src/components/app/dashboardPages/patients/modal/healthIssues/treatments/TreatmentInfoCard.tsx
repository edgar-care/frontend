import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import displayMedicineUsageUnit from 'utils/app/dashboard/diagnostic/displayMedicineUsageUnit';
import displayMedicineUnit from 'utils/app/dashboard/diagnostic/displayMedicineUnit';
import displayTimeUnit from 'utils/app/dashboard/diagnostic/displayTimeUnit';

import type { TreatmentMedicinesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

import MedicineIcon from 'assets/icons/MedicineIcon';

const TreatmentInfoCard = ({ medicine }: { medicine: TreatmentMedicinesType }): JSX.Element => {
	const { data: medicineInfo } = useGetMedicineByIdQuery(medicine.medicineId);

	if (!medicineInfo) return <></>;

	return (
		<VStack p="8px 12px" bg="blue.50" border="2px solid" borderColor="blue.200" borderRadius="8px" w="100%">
			<HStack w="100%">
				<Icon as={MedicineIcon} />
				<Text size="lg" w="100%">
					{medicineInfo.name} - {displayMedicineUnit(medicineInfo.dosageForm)}
				</Text>
			</HStack>
			{medicine.periods.map((period, index) => (
				<>
					<Text w="100%">
						{index !== 0 && 'Puis'} {period.quantity}{' '}
						{displayMedicineUsageUnit(medicineInfo.dosageForm, period.quantity > 1)} {period.frequency} fois
						tou
						{period.frequencyUnit === 'JOUR' || period.frequencyUnit === 'MOIS' ? 's' : 'tes'} les{' '}
						{period.frequencyRatio > 1 && period.frequencyRatio}{' '}
						{displayTimeUnit(period.frequencyUnit, true)}{' '}
						{period.periodLength &&
							period.periodUnit &&
							`pendant ${period.periodLength} ${displayTimeUnit(period.periodUnit, period.periodLength > 1)}`}
					</Text>
					<Box as="span" w="100%" h="1px" bg="blue.100" />
				</>
			))}
			{medicine.comment && (
				<VStack spacing="0px" w="100%" align="start">
					<Text size="sm">Commentaire :</Text>
					<Text size="sm" w="100%">
						{medicine.comment}
					</Text>
				</VStack>
			)}
		</VStack>
	);
};

export default TreatmentInfoCard;
