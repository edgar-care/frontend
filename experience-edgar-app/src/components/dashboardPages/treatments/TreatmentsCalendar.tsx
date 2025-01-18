import { useState } from 'react';
import { Skeleton } from '@chakra-ui/react';

import TreatmentsCalendarDay from 'components/dashboardPages/treatments/TreatmentsCalendarDay';

import groupTreatmentsByDayPeriod from 'utils/app/dashboard/treatments/groupTreatmentsByDayPeriod';
import groupFollowUpTreatmentsByDayPeriod from 'utils/app/dashboard/treatments/groupFollowUpTreatmentsByDayPeriod';

import { useGetMedicinesQuery } from 'services/request/medicines';
import { useGetFollowUpTreatmentsQuery } from 'services/request/treatments';

import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { type HealthIssuesMedicinesDayType } from 'types/dashboard/medical/HealthIssueType';

const TreatmentsCalendar = ({ treatments }: { treatments: PatientMedicineType[] }): JSX.Element => {
	const { data: medicinesInfo, isLoading } = useGetMedicinesQuery();
	const { data: checkedTreatments, isLoading: isLoadingCheckedTreatments } = useGetFollowUpTreatmentsQuery();

	const [startDay, setStartDay] = useState(0);

	const groupedTreatments = groupTreatmentsByDayPeriod(treatments);

	const groupedFollowUpTreatments = groupFollowUpTreatmentsByDayPeriod(checkedTreatments || []);

	const handlePreviousDay = () => {
		setStartDay((prev) => (prev === 0 ? 6 : prev - 1));
	};

	const handleNextDay = () => {
		setStartDay((prev) => (prev === 6 ? 0 : prev + 1));
	};

	return (
		<Skeleton isLoaded={!isLoading && !isLoadingCheckedTreatments} borderRadius="8px">
			{!isLoading &&
				!isLoadingCheckedTreatments &&
				Object.entries(groupedTreatments)
					.slice(startDay, 1 + startDay)
					.map(([day, periods]) => (
						<TreatmentsCalendarDay
							key={day}
							day={day as HealthIssuesMedicinesDayType}
							periods={periods}
							checkedTreatments={groupedFollowUpTreatments[day]}
							medicinesInfo={medicinesInfo || []}
							handlePreviousDay={handlePreviousDay}
							handleNextDay={handleNextDay}
						/>
					))}
		</Skeleton>
	);
};

export default TreatmentsCalendar;
