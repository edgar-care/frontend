import { HStack, Icon, Skeleton, Text, VStack } from '@chakra-ui/react';

import LIcon from 'assets/icons/TreatmentCardIcon/Days/LIcon';
import MIcon from 'assets/icons/TreatmentCardIcon/Days/MIcon';
import JIcon from 'assets/icons/TreatmentCardIcon/Days/JIcon';
import VIcon from 'assets/icons/TreatmentCardIcon/Days/VIcon';
import SIcon from 'assets/icons/TreatmentCardIcon/Days/SIcon';
import DIcon from 'assets/icons/TreatmentCardIcon/Days/DIcon';
import MorningIcon from 'assets/icons/TreatmentCardIcon/Periods/MorningIcon';
import NoonIcon from 'assets/icons/TreatmentCardIcon/Periods/NoonIcon';
import EveningIcon from 'assets/icons/TreatmentCardIcon/Periods/EveningIcon';
import NightIcon from 'assets/icons/TreatmentCardIcon/Periods/NightIcon';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';

const dayIconMap: Record<TreatmentDayType, typeof LIcon> = {
	MONDAY: LIcon,
	TUESDAY: MIcon,
	WEDNESDAY: MIcon,
	THURSDAY: JIcon,
	FRIDAY: VIcon,
	SATURDAY: SIcon,
	SUNDAY: DIcon,
};

const periodIconMap: Record<TreatmentPeriodType, typeof MorningIcon> = {
	MORNING: MorningIcon,
	NOON: NoonIcon,
	EVENING: EveningIcon,
	NIGHT: NightIcon,
};

const periodIconWidthMap: Record<TreatmentPeriodType, string> = {
	MORNING: '52px',
	NOON: '43px',
	EVENING: '40px',
	NIGHT: '41px',
};

const TreatmentCard = ({ treatment }: { treatment: PatientMedicineType }) => {
	const { data: medicineInfo, isLoading } = useGetMedicineByIdQuery(treatment.medicineId);
	console.log(treatment.days);
	console.log(treatment.periods);
	const getDayIconColor = (day: TreatmentDayType): string => (treatment.days.includes(day) ? 'blue.700' : 'grey.300');
	const getPeriodIconColor = (period: TreatmentPeriodType): string =>
		treatment.periods.includes(period) ? 'blue.700' : 'grey.300';
	const getPeriodIconWidth = (period: TreatmentPeriodType): string => periodIconWidthMap[period];

	return (
		<Skeleton isLoaded={!isLoading} w="100%">
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
					<HStack spacing="9px">
						{Object.keys(dayIconMap).map((day) => (
							<Icon
								key={day}
								as={dayIconMap[day as TreatmentDayType]}
								w="20px"
								h="20px"
								color={getDayIconColor(day as TreatmentDayType)}
							/>
						))}
					</HStack>
					<HStack spacing="6px">
						{Object.keys(periodIconMap).map((period) => (
							<Icon
								key={period}
								as={periodIconMap[period as TreatmentPeriodType]}
								w={getPeriodIconWidth(period as TreatmentPeriodType)}
								h="21px"
								color={getPeriodIconColor(period as TreatmentPeriodType)}
							/>
						))}
					</HStack>
				</VStack>
			</VStack>
		</Skeleton>
	);
};

export default TreatmentCard;
