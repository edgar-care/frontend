import { type Control, Controller, type FieldErrors, type UseFormWatch } from 'react-hook-form';
import { FormLabel, Stack, Text, VStack } from '@chakra-ui/react';

import SelectHealthIssueMedicineInputCard from 'components/app/dashboardPages/patients/modal/healthIssues/SelectHealthIssueMedicineInputCard';
import AddTreatmentStartDateInput from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/AddTreatmentStartDateInput';
import AddTreatmentEndDateInput from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/AddTreatmentEndDateInput';
import AddTreatmentCard from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/AddTreatmentCard';
import ErrorMessage from 'components/forms/ErrorMessage';
import AdvancedSelector from 'components/AdvancedSelector';

import { useGetMedicinesQuery } from 'services/request/medicines';

import displayMedicineUnit from 'utils/app/dashboard/diagnostic/displayMedicineUnit';

import type { HealthIssuesType, TreatmentType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

import SearchIcon from 'assets/icons/SearchIcon';

const AddTreatmentModalContent = ({
	hasHealthIssueSearch,
	healthIssues,
	control,
	watch,
	errors,
}: {
	hasHealthIssueSearch: boolean;
	healthIssues: HealthIssuesType[];
	control: Control<TreatmentType>;
	watch: UseFormWatch<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
}): JSX.Element => {
	const { data: medicines } = useGetMedicinesQuery();

	const addedMedicines = watch('medicines');

	return (
		<VStack w="100%" spacing="12px" align="start">
			<VStack spacing="12px" align="start" w="100%">
				{hasHealthIssueSearch && (
					<VStack spacing="4px" align="start" w="100%">
						<FormLabel size="lg">Le nom de votre sujet de santé</FormLabel>
						<Controller
							control={control}
							name="medicalAntecedentId"
							rules={{ validate: (value) => value !== undefined }}
							render={({ field: { value, onChange } }) => (
								<AdvancedSelector
									data={
										healthIssues
											.filter((healthIssue) => healthIssue.id)
											.map((healthIssue) => ({
												id: healthIssue.id ?? '',
												name: healthIssue.name,
												content: (
													<SelectHealthIssueMedicineInputCard
														onClick={() => {
															onChange(healthIssue.id);
														}}
													>
														<Text>{healthIssue.name}</Text>
													</SelectHealthIssueMedicineInputCard>
												),
											})) ?? []
									}
									defaultValue={healthIssues.find((healthIssue) => healthIssue.id === value)?.name}
									placeholder="Nom votre sujet de santé"
									rightIcon={SearchIcon}
								/>
							)}
						/>
						{errors.medicalAntecedentId?.type === 'validate' && (
							<ErrorMessage>Veuillez sélectionner un sujet de santé</ErrorMessage>
						)}
					</VStack>
				)}
				<Stack direction={{ base: 'column', sm: 'row' }} w="100%">
					<AddTreatmentStartDateInput control={control} errors={errors} />
					<AddTreatmentEndDateInput startDate={watch('startDate')} control={control} errors={errors} />
				</Stack>
				<VStack spacing="4px" align="start" w="100%">
					<FormLabel size="lg">Le nom du médicament</FormLabel>
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
								placeholder="Rechercher le nom du médicament"
								rightIcon={SearchIcon}
							/>
						)}
					/>
				</VStack>
				{errors.medicines?.type === 'validate' && (
					<ErrorMessage>Veuillez ajouter au moins un médicament</ErrorMessage>
				)}
			</VStack>
			<VStack w="100%">
				{medicines &&
					addedMedicines.map((addedMedicine) => (
						<AddTreatmentCard
							treatmentMedicine={addedMedicine}
							medicine={medicines.filter((medicine) => medicine.id === addedMedicine.medicineId)[0]}
							control={control}
							key={addedMedicine.medicineId}
						/>
					))}
			</VStack>
		</VStack>
	);
};

export default AddTreatmentModalContent;
