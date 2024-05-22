import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import MedicineSmallCard from 'components/app/dashboardPages/patients/modal/forms/medicine/MedicineSmallCard';

import { type PatientMedicineType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicineType';
import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';
import { type TreatmentDayType } from 'types/app/dashboard/patients/medicalInfos/TreatmentDayType';

const MedicineCardDays = ({
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
