import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import TreatmentSmallCard from 'components/dashboardPages/treatments/TreatmentSmallCard';

import { type TreatmentType, type TreatmentMedicinesType } from 'types/dashboard/treatments/TreatmentType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';

const TreatmentCardDays = ({
	medicine,
	control,
}: {
	medicine: TreatmentMedicinesType;
	control: Control<TreatmentType>;
}): JSX.Element => {
	const displayAvailableDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
	const availableDays: TreatmentDayType[] = [
		'MONDAY',
		'TUESDAY',
		'WEDNESDAY',
		'THURSDAY',
		'FRIDAY',
		'SATURDAY',
		'SUNDAY',
	];

	return (
		<HStack w="100%" justify="space-between">
			<Controller
				control={control}
				name="treatments"
				render={({ field: { value, onChange } }) => (
					<>
						{displayAvailableDays.map((day, index) => (
							<TreatmentSmallCard
								content={day}
								variant={
									value
										.find((item) => item.medicineId === medicine.medicineId)
										?.day.includes(availableDays[index])
										? 'SELECTED'
										: 'DEFAULT'
								}
								key={index}
								id={`edgar-onboardingMedicalPage-medicineCardDay-${day}-${medicine.medicineId}-card`}
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

export default TreatmentCardDays;
