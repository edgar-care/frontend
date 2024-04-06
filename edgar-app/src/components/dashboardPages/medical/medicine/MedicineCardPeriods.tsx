import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import MedicineSmallCard from 'components/dashboardPages/medical/medicine/MedicineSmallCard';

import {
	type HealthIssuesMedicinesPeriodType,
	type HealthIssuesMedicinesType,
	type HealthIssuesType,
} from 'types/dashboard/medical/HealthIssueType';

const MedicineCardPeriods = ({
	medicine,
	control,
}: {
	medicine: HealthIssuesMedicinesType;
	control: Control<HealthIssuesType>;
}): JSX.Element => {
	const displayAvailablePeriods = ['Matin', 'Midi', 'Soir', 'Nuit'];
	const availablePeriods: HealthIssuesMedicinesPeriodType[] = ['MORNING', 'NOON', 'EVENING', 'NIGHT'];

	return (
		<HStack w="100%" justify="space-between">
			<Controller
				control={control}
				name="medicines"
				render={({ field: { value, onChange } }) => (
					<>
						{displayAvailablePeriods.map((period, index) => (
							<MedicineSmallCard
								content={period}
								variant={
									value
										.find((item) => item.medicineId === medicine.medicineId)
										?.period.includes(availablePeriods[index])
										? 'SELECTED'
										: 'DEFAULT'
								}
								key={index}
								onClick={() => {
									const medicineIndex = value.findIndex(
										(item) => item.medicineId === medicine.medicineId,
									);
									const medicineArray = [...value];
									const medicinePeriods = medicineArray[medicineIndex].period;

									medicineArray.splice(medicineIndex, 1, {
										...medicine,
										period: medicinePeriods.includes(availablePeriods[index])
											? medicinePeriods.filter((item) => item !== availablePeriods[index])
											: [...medicinePeriods, availablePeriods[index]],
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

export default MedicineCardPeriods;
