import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { type Control, Controller, FieldErrors } from 'react-hook-form';

import TreatmentUpdateCard from 'components/dashboardPages/treatments/TreatmentUpdateCard';
import AdvancedSelector from 'components/AdvancedSelector';
import SelectHealthIssueMedicineInputCard from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueMedicineInputCard';
import ErrorMessage from 'components/forms/ErrorMessage';

import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';
import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

import AddIcon from 'assets/icons/AddIcon';

import { useGetMedicinesQuery } from 'services/request/medicines';

const UpdateTreatmentMedicineInput = ({
	addedMedicines,
	control,
	errors,
}: {
	addedMedicines: PatientMedicineType[];
	control: Control<PatientMedicalAntecedentType>;
	errors: FieldErrors<PatientMedicalAntecedentType>;
}): JSX.Element => {
	const { data: medicinesData } = useGetMedicinesQuery();

	return (
		<VStack spacing="12px" align="start" w="100%">
			<VStack spacing="8px" align="start" w="100%">
				<Controller
					control={control}
					name="medicines"
					render={({ field: { value, onChange } }) => (
						<AdvancedSelector
							data={
								medicinesData
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
															days: [],
															periods: [],
															quantity: 1,
														},
													]);
												}}
											>
												<>{medicine.name}</>
											</SelectHealthIssueMedicineInputCard>
										),
									})) || []
							}
							placeholder="Nom du médicament"
							rightIcon={AddIcon}
						/>
					)}
				/>
				{errors.medicines?.type === 'validate' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
			</VStack>
			<Wrap w="100%">
				{addedMedicines.map((medicine) => (
					<WrapItem key={medicine.medicineId}>
						<TreatmentUpdateCard medicine={medicine} control={control} />
					</WrapItem>
				))}
			</Wrap>
		</VStack>
	);
};

export default UpdateTreatmentMedicineInput;
