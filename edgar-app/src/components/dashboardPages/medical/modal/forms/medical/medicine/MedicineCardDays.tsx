import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import MedicineSmallCard from 'components/dashboardPages/medical/medicine/MedicineSmallCard';

import type { HealthIssuesMedicinesDayType } from 'types/dashboard/medical/HealthIssueType';
import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';
import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

const MedicineCardDays = ({
	medicine,
	control,
}: {
	medicine: PatientMedicineType;
	control: Control<PatientMedicalAntecedentType>;
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
		<HStack w="100%" justify="space-between">
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
										?.days.includes(availableDays[index])
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
									const medicineDays = medicineArray[medicineIndex].days;

									medicineArray.splice(medicineIndex, 1, {
										...medicine,
										days: medicineDays.includes(availableDays[index])
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
