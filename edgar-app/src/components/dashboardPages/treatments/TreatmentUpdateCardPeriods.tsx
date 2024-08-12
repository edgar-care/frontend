import { HStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import TreatmentSmallCard from 'components/dashboardPages/treatments/TreatmentSmallCard';

import { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';
import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';

const TreatmentUpdateCardPeriods = ({
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
						{displayAvailablePeriods.map((period, index) => {
							const selectedMedicine = value.find((item) => item.medicineId === medicine.medicineId);
							const isPeriodSelected = selectedMedicine?.periods.includes(availablePeriods[index]);

							return (
								<TreatmentSmallCard
									content={period}
									variant={isPeriodSelected ? 'SELECTED' : 'DEFAULT'}
									key={index}
									onClick={() => {
										let updatedMedicines;

										if (!selectedMedicine) {
											updatedMedicines = [
												...value,
												{
													...medicine,
													periods: [availablePeriods[index]],
												},
											];
										} else {
											const updatedPeriods = isPeriodSelected
												? selectedMedicine.periods.filter(
														(item) => item !== availablePeriods[index],
													)
												: [...selectedMedicine.periods, availablePeriods[index]];

											updatedMedicines = value.map((item) =>
												item.medicineId === medicine.medicineId
													? { ...item, periods: updatedPeriods }
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

export default TreatmentUpdateCardPeriods;
