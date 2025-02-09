import { type Control, Controller, type FieldErrors, type UseFormWatch } from 'react-hook-form';
import { Text, VStack } from '@chakra-ui/react';

import ErrorMessage from 'components/forms/ErrorMessage';
import AdvancedSelector from 'components/AdvancedSelector';
import PatientAddPrescriptionCard from 'components/app/dashboardPages/patients/subViews/prescriptions/modals/PatientAddPrescriptionCard';
import SelectHealthIssueMedicineInputCard from 'components/app/dashboardPages/patients/modal/healthIssues/SelectHealthIssueMedicineInputCard';

import type { UploadPatientPrescriptionDTO } from 'store/types/prescriptions.type';

import { useGetMedicinesQuery } from 'services/request/medicines';

import displayMedicineUnit from 'utils/app/dashboard/diagnostic/displayMedicineUnit';

import AddIcon from 'assets/icons/AddIcon';

const PatientAddPrescriptionModalContent = ({
	control,
	watch,
	errors,
}: {
	control: Control<UploadPatientPrescriptionDTO>;
	watch: UseFormWatch<UploadPatientPrescriptionDTO>;
	errors: FieldErrors<UploadPatientPrescriptionDTO>;
}): JSX.Element => {
	const { data: medicines } = useGetMedicinesQuery();
	const addedMedicines = watch('medicines');

	return (
		<VStack w="100%" spacing="12px" align="start">
			<VStack spacing="4px" align="start" w="100%">
				<Controller
					control={control}
					name="medicines"
					rules={{ validate: (value) => value.length > 0 }}
					render={({ field: { value, onChange } }) => (
						<AdvancedSelector
							data={
								medicines
									?.filter((medicine) =>
										addedMedicines.every((item) => item.medicineId !== medicine.id),
									)
									.map((medicine) => ({
										id: medicine.id,
										name: medicine.name,
										content: (
											<SelectHealthIssueMedicineInputCard
												onClick={() => {
													onChange([
														...value,
														{
															medicineId: medicine.id,
															qsp: 1,
															qspUnit: 'MOIS',
															periods: [],
														},
													]);
												}}
											>
												<Text>
													{medicine.name} - {displayMedicineUnit(medicine.dosageForm)} (
													{medicine.dosage}
													{medicine.dosageUnit})
												</Text>
											</SelectHealthIssueMedicineInputCard>
										),
									})) || []
							}
							placeholder="Nom du médicament"
							rightIcon={AddIcon}
						/>
					)}
				/>
				{errors.medicines?.type === 'validate' && (
					<ErrorMessage>Veuiilez ajouter au moins un médicament</ErrorMessage>
				)}
			</VStack>
			<VStack w="100%">
				{medicines &&
					addedMedicines.map((addedMedicine) => (
						<PatientAddPrescriptionCard
							prescriptionMedicine={addedMedicine}
							medicine={medicines.filter((medicine) => medicine.id === addedMedicine.medicineId)[0]}
							control={control}
							key={addedMedicine.medicineId}
						/>
					))}
			</VStack>
		</VStack>
	);
};

export default PatientAddPrescriptionModalContent;
