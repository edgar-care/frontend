import { Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors, type UseFormWatch } from 'react-hook-form';

import AdvancedSelector from 'components/AdvancedSelector';
import SelectHealthIssueMedicineInputCard from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueMedicineInputCard';
import MedicineCard from 'components/dashboardPages/medical/medicine/MedicineCard';
import ErrorMessage from 'components/forms/ErrorMessage';

import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

import AddIcon from 'assets/icons/AddIcon';

import { useGetMedicinesQuery } from 'services/request/medicines';

import displayMedicineUnit from 'utils/app/dashboard/medical/displayMedicineUnit';

const MedicineStillRelevantInput = ({
	control,
	watch,
	errors,
}: {
	control: Control<HealthIssuesType>;
	watch: UseFormWatch<HealthIssuesType>;
	errors: FieldErrors<HealthIssuesType>;
}): JSX.Element => {
	const { data: medicines } = useGetMedicinesQuery();
	const addedMedicines = watch('medicines');

	return (
		<VStack spacing="12px" align="start" w="100%">
			<VStack spacing="8px" align="start" w="100%">
				<Controller
					control={control}
					name="medicines"
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
												<Text>
													{medicine.name} - {displayMedicineUnit(medicine.dosageForm)}
												</Text>
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
				{errors.medicines?.type === 'validate' && (
					<ErrorMessage id="edgar-onboardingMedicalPage-medicineError-text">
						Ce champ est nécessaire
					</ErrorMessage>
				)}
			</VStack>
			<Wrap w="100%">
				{addedMedicines.map((medicine) => (
					<WrapItem key={medicine.medicineId}>
						<MedicineCard medicine={medicine} control={control} />
					</WrapItem>
				))}
			</Wrap>
		</VStack>
	);
};

export default MedicineStillRelevantInput;
