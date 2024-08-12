import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import TreatmentSmallCard from 'components/dashboardPages/treatments/TreatmentSmallCard';

import type { TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const TreatmentUpdateCardDays = ({
	medicine,
	control,
}: {
	medicine: PatientMedicineType;
	control: Control<PatientMedicalAntecedentType>;
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
				name="medicines"
				render={({ field: { value, onChange } }) => (
					<>
						{displayAvailableDays.map((day, index) => {
							const isDaySelected = medicine.days.includes(availableDays[index]);

							return (
								<TreatmentSmallCard
									content={day}
									variant={isDaySelected ? 'SELECTED' : 'DEFAULT'}
									key={index}
									onClick={() => {
										const updatedDays = isDaySelected
											? medicine.days.filter((item) => item !== availableDays[index])
											: [...medicine.days, availableDays[index]];

										const updatedMedicines = value.map((item) =>
											item.medicineId === medicine.medicineId
												? { ...item, days: updatedDays }
												: item,
										);

										onChange(updatedMedicines);
									}}
								/>
							);
						})}
					</>
				)}
			/>
		</HStack>
	);
};

export default TreatmentUpdateCardDays;
