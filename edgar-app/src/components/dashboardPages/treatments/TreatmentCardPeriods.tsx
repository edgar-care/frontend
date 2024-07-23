import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import TreatmentSmallCard from 'components/dashboardPages/treatments/TreatmentSmallCard';

import { type TreatmentType, type TreatmentMedicinesType } from 'types/dashboard/treatments/TreatmentType';
import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';

const TreatmentCardPeriods = ({
	medicine,
	control,
}: {
	medicine: TreatmentMedicinesType;
	control: Control<TreatmentType>;
}): JSX.Element => {
	const displayAvailablePeriods = ['Matin', 'Midi', 'Soir', 'Nuit'];
	const availablePeriods: TreatmentPeriodType[] = ['MORNING', 'NOON', 'EVENING', 'NIGHT'];

	return (
		<HStack w="100%" justify="space-between">
			<Controller
				control={control}
				name="treatments"
				render={({ field: { value, onChange } }) => (
					<>
						{displayAvailablePeriods.map((period, index) => (
							<TreatmentSmallCard
								content={period}
								variant={
									value
										.find((item) => item.medicineId === medicine.medicineId)
										?.period.includes(availablePeriods[index])
										? 'SELECTED'
										: 'DEFAULT'
								}
								key={index}
								id={`edgar-onboardingMedicalPage-medicineCardPeriod-${period}-${medicine.medicineId}-card`}
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

export default TreatmentCardPeriods;
