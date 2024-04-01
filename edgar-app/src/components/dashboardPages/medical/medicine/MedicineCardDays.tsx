import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import MedicineSmallCard from 'components/dashboardPages/medical/medicine/MedicineSmallCard';

import {
	type HealthIssuesMedicinesDayType,
	type HealthIssuesMedicinesType,
	type HealthIssuesType,
} from 'types/dashboard/medical/HealthIssueType';

const MedicineCardDays = ({
	medicine,
	control,
}: {
	medicine: HealthIssuesMedicinesType;
	control: Control<HealthIssuesType>;
}): JSX.Element => {
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

	return (
		<HStack>
			<Controller
				control={control}
				name="medicines"
				render={({ field: { value, onChange } }) => (
					<>
						{displayAvailableDays.map((day, index) => (
							<MedicineSmallCard
								content={day}
								variant={
									value
										.find((item) => item.medicineId === medicine.medicineId)
										?.day.includes(availableDays[index])
										? 'SELECTED'
										: 'DEFAULT'
								}
								key={index}
								onClick={() => {
									const medicineIndex = value.findIndex(
										(item) => item.medicineId === medicine.medicineId,
									);
									const medicineArray = [...value];
									const medicineDays = medicineArray[medicineIndex].day;

									medicineArray.splice(medicineIndex, 1, {
										...medicine,
										day: medicineDays.includes(availableDays[index])
											? medicineDays.filter((item) => item !== availableDays[index])
											: [...medicineDays, availableDays[index]],
									});
									onChange(medicineArray);
								}}
							/>
						))}
					</>
				)}
			/>
		</HStack>
	);
};

export default MedicineCardDays;
