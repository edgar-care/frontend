import { HStack, Text, VStack } from '@chakra-ui/react';

import displayMedicineUnit from 'utils/app/dashboard/medical/displayMedicineUnit';

import {
	type HealthIssuesMedicinesDayType,
	type HealthIssuesMedicinesPeriodType,
	type HealthIssuesMedicinesType,
} from 'types/dashboard/medical/HealthIssueType';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import MedicineSmallCard from './MedicineSmallCard';

const ReadonlyMedicineCard = ({ medicine }: { medicine: HealthIssuesMedicinesType }): JSX.Element => {
	const { data: medicineInfo } = useGetMedicineByIdQuery(medicine.medicineId);

	const displayAvailableDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
	const availableDays: HealthIssuesMedicinesDayType[] = [
		'MONDAY',
		'TUESDAY',
		'WEDNESDAY',
		'THURSDAY',
		'FRIDAY',
		'SATURDAY',
		'SUNDAY',
	];
	const displayAvailablePeriods = ['Matin', 'Midi', 'Soir', 'Nuit'];
	const availablePeriods: HealthIssuesMedicinesPeriodType[] = ['MORNING', 'NOON', 'EVENING', 'NIGHT'];

	if (!medicineInfo) return <></>;

	return (
		<VStack
			align="start"
			p="8px 16px"
			borderRadius="8px"
			bg="blue.50"
			border="2px solid"
			borderColor="blue.200"
			w="100%"
		>
			<VStack w="100%" align="start" spacing="0px">
				<Text size="boldLg">{medicineInfo.name}</Text>
				<HStack spacing="4px">
					<Text size="sm">
						{medicine.quantity} {displayMedicineUnit(medicineInfo.unit)}(s)
					</Text>
				</HStack>
			</VStack>
			<VStack spacing="4px" w="100%" align="start">
				<HStack>
					{displayAvailableDays.map((day, index) => (
						<MedicineSmallCard
							content={day}
							variant={medicine.day.includes(availableDays[index]) ? 'SELECTED' : 'DEFAULT'}
							key={availableDays[index]}
							id={`edgar-onboardingMedicalPage-medicineCardDay-${day}-${medicine.medicineId}-card`}
						/>
					))}
				</HStack>
				<HStack>
					{displayAvailablePeriods.map((period, index) => (
						<MedicineSmallCard
							content={period}
							variant={medicine.period.includes(availablePeriods[index]) ? 'SELECTED' : 'DEFAULT'}
							key={availablePeriods[index]}
							id={`edgar-onboardingMedicalPage-medicineCardPeriod-${period}-${medicine.medicineId}-card`}
						/>
					))}
				</HStack>
			</VStack>
		</VStack>
	);
};

export default ReadonlyMedicineCard;
