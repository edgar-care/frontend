import { HStack, Text, VStack } from '@chakra-ui/react';

import MedicineSmallCard from 'components/dashboardPages/medical/modal/forms/medical/medicine/MedicineSmallCard';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import displayMedicineUsageUnit from 'utils/app/dashboard/medical/displayMedicineUsageUnit';

import type {
	HealthIssuesMedicinesDayType,
	HealthIssuesMedicinesPeriodType,
} from 'types/dashboard/medical/HealthIssueType';
import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

const ReadonlyMedicineCard = ({ medicine }: { medicine: PatientMedicineType }): JSX.Element => {
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
						{medicine.quantity} {displayMedicineUsageUnit(medicineInfo.dosageForm)}
						{medicine.quantity > 1 && 's'}
					</Text>
				</HStack>
			</VStack>
			<VStack spacing="4px" w="100%" align="start">
				<HStack>
					{displayAvailableDays.map((day, index) => (
						<MedicineSmallCard
							content={day}
							variant={medicine.days.includes(availableDays[index]) ? 'SELECTED' : 'DEFAULT'}
							key={availableDays[index]}
							id={`edgar-onboardingMedicalPage-medicineCardDay-${day}-${medicine.medicineId}-card`}
						/>
					))}
				</HStack>
				<HStack>
					{displayAvailablePeriods.map((period, index) => (
						<MedicineSmallCard
							content={period}
							variant={medicine.periods.includes(availablePeriods[index]) ? 'SELECTED' : 'DEFAULT'}
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
