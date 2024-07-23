import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { type FieldErrors, type UseFormWatch, type Control, Controller } from 'react-hook-form';

import AdvancedSelector from 'components/AdvancedSelector';
import SelectHealthIssueMedicineInputCard from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueMedicineInputCard';
import TreatmentCard from 'components/dashboardPages/treatments/TreatmentCard';
import ErrorMessage from 'components/forms/ErrorMessage';

import { type TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import AddIcon from 'assets/icons/AddIcon';

import { useGetMedicinesQuery } from 'services/request/medicines';

const AddTreatmentMedicineInput = ({
	control,
	watch,
	errors,
}: {
	control: Control<TreatmentType>;
	watch: UseFormWatch<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
}): JSX.Element => {
	const { data: medicines } = useGetMedicinesQuery();
	const addedMedicines = watch('treatments');

	return (
		<VStack spacing="12px" align="start" w="100%">
			<VStack spacing="8px" align="start" w="100%">
				<Controller
					control={control}
					name="treatments"
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
														{ medicineId: medicine.id, day: [], period: [], quantity: '1' },
													]);
												}}
												id={`edgar-onboardingMedicalPage-medicine-option-${medicine.id}`}
											>
												<>{medicine.name}</>
											</SelectHealthIssueMedicineInputCard>
										),
									})) || []
							}
							placeholder="Nom du médicament"
							rightIcon={AddIcon}
							id="edgar-onboardingMedicalPage-medicine-selector"
						/>
					)}
				/>
				{errors.treatments?.type === 'validate' && (
					<ErrorMessage id="edgar-onboardingMedicalPage-medicineError-text">
						Ce champ est nécessaire
					</ErrorMessage>
				)}
			</VStack>
			<Wrap w="100%">
				{addedMedicines.map((medicine) => (
					<WrapItem key={medicine.medicineId}>
						<TreatmentCard medicine={medicine} control={control} />
					</WrapItem>
				))}
			</Wrap>
		</VStack>
	);
};

export default AddTreatmentMedicineInput;
