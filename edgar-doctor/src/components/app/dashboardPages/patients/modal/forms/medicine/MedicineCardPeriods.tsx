import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import MedicineSmallCard from 'components/app/dashboardPages/patients/modal/forms/medicine/MedicineSmallCard';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';
import { type PatientMedicineType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicineType';
import { type TreatmentPeriodType } from 'types/app/dashboard/patients/medicalInfos/TreatmentPeriodType';

const MedicineCardPeriods = ({
	medicine,
	control,
}: {
	medicine: PatientMedicineType;
	control: Control<PatientMedicalAntecedentType>;
}): JSX.Element => {
	const displayAvailablePeriods = ['Matin', 'Midi', 'Soir', 'Nuit'];
	const availablePeriods: TreatmentPeriodType[] = ['MORNING', 'NOON', 'EVENING', 'NIGHT'];

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
										?.periods.includes(availablePeriods[index])
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
									const medicinePeriods = medicineArray[medicineIndex].periods;

									medicineArray.splice(medicineIndex, 1, {
										...medicine,
										periods: medicinePeriods.includes(availablePeriods[index])
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
