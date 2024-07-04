import { useState } from 'react';
import { HStack, Icon, Skeleton, useBreakpointValue } from '@chakra-ui/react';

import TreatmentsCalendarDay from 'components/dashboardPages/treatments/TreatmentsCalendarDay';

import groupTreatmentsByDayPeriod from 'utils/app/dashboard/treatments/groupTreatmentsByDayPeriod';
import groupFollowUpTreatmentsByDayPeriod from 'utils/app/dashboard/treatments/groupFollowUpTreatmentsByDayPeriod';

import { useGetMedicinesQuery } from 'services/request/medicines';
import { useGetFollowUpTreatmentsQuery } from 'services/request/treatments';

import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { type HealthIssuesMedicinesDayType } from 'types/dashboard/medical/HealthIssueType';

import LeftChevronIcon from 'assets/icons/Chevron/LeftChevronIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

const TreatmentsCalendar = ({ treatments }: { treatments: PatientMedicineType[] }): JSX.Element => {
	const { data: medicinesInfo, isLoading } = useGetMedicinesQuery();
	const { data: checkedTreatments } = useGetFollowUpTreatmentsQuery();

	const [startDay, setStartDay] = useState(0);
	const nbrOfDays = 1;

	const groupedTreatments = groupTreatmentsByDayPeriod(treatments);

	const groupedFollowUpTreatments = groupFollowUpTreatmentsByDayPeriod(checkedTreatments || []);

	return (
		<Skeleton isLoaded={!isLoading} borderRadius="8px">
			<HStack
				bg="white"
				p="12px 16px"
				borderRadius="16px"
				border="2px solid"
				borderColor="blue.200"
				spacing="16px"
			>
				{startDay > 0 && (
					<Icon
						as={LeftChevronIcon}
						h="16px"
						w="auto"
						cursor="pointer"
						onClick={() => setStartDay((prev) => prev - 1)}
					/>
				)}
				{Object.entries(groupedTreatments)
					.slice(startDay, nbrOfDays + startDay)
					.map(([day, periods]) => (
						<TreatmentsCalendarDay
							key={day}
							day={day as HealthIssuesMedicinesDayType}
							periods={periods}
							checkedTreatments={groupedFollowUpTreatments[day]}
							medicinesInfo={medicinesInfo || []}
						/>
					))}
				{nbrOfDays + startDay < 7 && (
					<Icon
						as={RightChevronIcon}
						h="16px"
						w="auto"
						cursor="pointer"
						onClick={() => setStartDay((prev) => prev + 1)}
					/>
				)}
			</HStack>
		</Skeleton>
	);
};

export default TreatmentsCalendar;
