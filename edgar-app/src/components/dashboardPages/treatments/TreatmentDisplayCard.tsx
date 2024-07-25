import { HStack, Skeleton, Text, VStack } from '@chakra-ui/react';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';

const dayLetterMap: Record<TreatmentDayType, string> = {
	MONDAY: 'L',
	TUESDAY: 'M',
	WEDNESDAY: 'M',
	THURSDAY: 'J',
	FRIDAY: 'V',
	SATURDAY: 'S',
	SUNDAY: 'D',
};

const periodLetterMap: Record<TreatmentPeriodType, string> = {
	MORNING: 'Matin',
	NOON: 'Midi',
	EVENING: 'Soir',
	NIGHT: 'Nuit',
};

const TreatmentDisplayCard = ({ treatment }: { treatment: PatientMedicineType }) => {
	const { data: medicineInfo, isLoading } = useGetMedicineByIdQuery(treatment.medicineId);

	return (
		<Skeleton isLoaded={!isLoading && medicineInfo !== undefined} w="100%">
			<VStack
				bg="blue.50"
				borderRadius="8px"
				p="8px 16px"
				border="2px solid"
				borderColor="blue.200"
				align="start"
				w="100%"
			>
				<HStack spacing="4px">
					<Text size="boldLg">{medicineInfo?.name}</Text>
					<Text size="md">-</Text>
					<Text size="md">
						{treatment?.quantity} {medicineInfo?.unit}
					</Text>
				</HStack>
				<VStack spacing="4px" align="start">
					<HStack w="100%" justify="space-between">
						{Object.keys(dayLetterMap).map((day) => (
							<VStack
								key={day}
								px="6px"
								borderRadius="4px"
								bg={treatment.days.includes(day as TreatmentDayType) ? 'blue.700' : 'grey.300'}
							>
								<Text color="white" userSelect="none">
									{dayLetterMap[day as TreatmentDayType]}
								</Text>
							</VStack>
						))}
					</HStack>
					<HStack w="100%" justify="space-between">
						{Object.keys(periodLetterMap).map((period) => (
							<VStack
								key={period}
								px="6px"
								borderRadius="4px"
								bg={treatment.periods.includes(period as TreatmentPeriodType) ? 'blue.700' : 'grey.300'}
								cursor="pointer"
								_hover={{ bg: 'blue.300' }}
							>
								<Text color="white" userSelect="none">
									{periodLetterMap[period as TreatmentPeriodType]}
								</Text>
							</VStack>
						))}
					</HStack>
				</VStack>
			</VStack>
		</Skeleton>
	);
};

export default TreatmentDisplayCard;
