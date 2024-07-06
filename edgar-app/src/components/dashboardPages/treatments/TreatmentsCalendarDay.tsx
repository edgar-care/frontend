import { Box, HStack, Text, VStack, Icon } from '@chakra-ui/react';

import TreatmentsCheckboxTreatment from 'components/dashboardPages/treatments/TreatmentsCheckboxTreatment';

import getPeriodOfTheDay from 'utils/app/dashboard/treatments/getPeriodOfTheDay';
import getDateOfTheDay from 'utils/app/dashboard/treatments/getDateOfTheDay';

import LeftChevronIcon from 'assets/icons/Chevron/LeftChevronIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import type {
	HealthIssuesMedicinesDayType,
	HealthIssuesMedicinesPeriodType,
} from 'types/dashboard/medical/HealthIssueType';
import { type TreatmentFollowUpType } from 'types/dashboard/treatments/TreatmentFollowUpType';
import { type MedicineType } from 'types/dashboard/medical/MedicineType';
import type { TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';

const TreatmentsCalendarDay = ({
	day,
	periods,
	checkedTreatments,
	medicinesInfo,
	displayDay = true,
	setStartDay,
}: {
	day: HealthIssuesMedicinesDayType;
	periods: Record<string, PatientMedicineType[]>;
	checkedTreatments: Record<string, TreatmentFollowUpType[]>;
	medicinesInfo: MedicineType[];
	displayDay?: boolean;
	setStartDay: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
	const availableDays: HealthIssuesMedicinesDayType[] = [
		'MONDAY',
		'TUESDAY',
		'WEDNESDAY',
		'THURSDAY',
		'FRIDAY',
		'SATURDAY',
		'SUNDAY',
	];
	const displayedDay = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
	const availablePeriods: HealthIssuesMedicinesPeriodType[] = ['MORNING', 'NOON', 'EVENING', 'NIGHT'];
	const displayedPeriods = ['Matin', 'Midi', 'Soir', 'Nuit'];

	return (
		<VStack align="start" w="100%" minW="300px" bg="white" p="12px 16px" borderRadius="16px" border="2px solid" borderColor="blue.200" spacing="8px">
			{displayDay && (
				<HStack w="100%" justify="space-between">
					<Text size="boldLg" id={`edgar-dashboardTreatmentsPage-dayTitle-${day}-text`}>
						{displayedDay[availableDays.indexOf(day)]}
					</Text>
					<HStack spacing="8px">
					<Icon
						as={LeftChevronIcon}
						h="16px"
						w="auto"
						cursor="pointer"
						onClick={() => setStartDay((prev) => prev - 1)}
					/>
					<Icon
						as={RightChevronIcon}
						h="16px"
						w="auto"
						cursor="pointer"
						onClick={() => setStartDay((prev) => prev + 1)}
					/>
					</HStack>
				</HStack>
			)}
			{Object.entries(periods).map(([period, treatments]) => {
				const isToday =
					(new Date().toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase() as TreatmentDayType) ===
						day && getPeriodOfTheDay(new Date()) === period;

				return (
					<VStack key={period} w="100%" bg={isToday ? 'blue.100' : ''} borderRadius="0px 0px 12px 12px">
						<Box as="span" w="100%" h="2px" bg={isToday ? 'blue.700' : 'blue.100'} />
						<VStack pb="4px" w="100%" align="start" px={isToday ? '8px' : '0px'}>
							<Text size="lg" id={`edgar-dashboardTreatmentsPage-dayTitle-${period}-text`}>
								{displayedPeriods[availablePeriods.indexOf(period as HealthIssuesMedicinesPeriodType)]}
							</Text>
							<VStack
								spacing="4px"
								w="100%"
								h="80px"
								overflowY="auto"
								sx={{
									'::-webkit-scrollbar': {
										width: '6px',
									},
									'::-webkit-scrollbar-track': {
										background: 'transparent',
									},
									'::-webkit-scrollbar-thumb': {
										background: 'grey.200',
										borderRadius: '8px',
										marginTop: '0px',
										marginBottom: '0px',
									},
									'::-webkit-scrollbar-thumb:hover': {
										background: 'grey.300',
									},
									scrollbarWidth: 'thin',
									scrollbarColor: '#CCC transparent',
								}}
							>
								{treatments.map((treatment) => (
									<TreatmentsCheckboxTreatment
										treatment={treatment}
										medicinesInfo={medicinesInfo}
										checkedTreatmentId={
											checkedTreatments[period].find(
												(checkedTreatment) => checkedTreatment.treatmentId === treatment.id,
											)?.id || ''
										}
										isToday={isToday}
										period={period as TreatmentPeriodType}
										day={getDateOfTheDay(availableDays.indexOf(day))}
										key={treatment.id}
									/>
								))}
								{treatments.length === 0 && (
									<VStack w="100%" align="start">
										<Text size="sm">Aucun traitement</Text>
									</VStack>
								)}
							</VStack>
						</VStack>
					</VStack>
				);
			})}
		</VStack>
	);
};

export default TreatmentsCalendarDay;
