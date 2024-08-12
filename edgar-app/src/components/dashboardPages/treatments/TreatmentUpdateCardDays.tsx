import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import TreatmentSmallCard from 'components/dashboardPages/treatments/TreatmentSmallCard';

import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

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
							const selectedMedicine = value.find((item) => item.medicineId === medicine.medicineId);
							const isDaySelected = selectedMedicine?.days.includes(availableDays[index]);

							return (
								<TreatmentSmallCard
									content={day}
									variant={isDaySelected ? 'SELECTED' : 'DEFAULT'}
									key={index}
									onClick={() => {
										let updatedMedicines;

										if (!selectedMedicine) {
											updatedMedicines = [
												...value,
												{
													...medicine,
													days: [availableDays[index]],
												},
											];
										} else {
											const updatedDays = isDaySelected
												? selectedMedicine.days.filter((item) => item !== availableDays[index])
												: [...selectedMedicine.days, availableDays[index]];

											updatedMedicines = value.map((item) =>
												item.medicineId === medicine.medicineId
													? { ...item, days: updatedDays }
													: item,
											);
										}

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
