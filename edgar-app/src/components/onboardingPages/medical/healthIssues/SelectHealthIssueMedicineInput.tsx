import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors, type UseFormWatch } from 'react-hook-form';

import AdvancedSelector from 'components/AdvancedSelector';
import SelectHealthIssueMedicineInputCard from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueMedicineInputCard';
import MedicineCard from 'components/dashboardPages/medical/medicine/MedicineCard';
import ErrorMessage from 'components/forms/ErrorMessage';

import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';
import { type MedicineType } from 'types/dashboard/medical/MedicineType';

import AddIcon from 'assets/icons/AddIcon';

const MedicineStillRelevantInput = ({
	control,
	watch,
	errors,
}: {
	control: Control<HealthIssuesType>;
	watch: UseFormWatch<HealthIssuesType>;
	errors: FieldErrors<HealthIssuesType>;
}): JSX.Element => {
	const addedMedicines = watch('medicines');

	const medicines: MedicineType[] = [
		{
			id: '1',
			name: 'Doliprane1',
			unit: 'APPLICATION',
		},
		{
			id: '2',
			name: 'Doliprane',
			unit: 'APPLICATION',
		},
		{
			id: '3',
			name: 'Doliprane',
			unit: 'APPLICATION',
		},
		{
			id: '4',
			name: 'Doliprane',
			unit: 'APPLICATION',
		},
		{
			id: '5',
			name: 'Doliprane',
			unit: 'APPLICATION',
		},
		{
			id: '6',
			name: 'Doliprane',
			unit: 'APPLICATION',
		},
		{
			id: '7',
			name: 'Doliprane',
			unit: 'APPLICATION',
		},
		{
			id: '8',
			name: 'Doliprane',
			unit: 'APPLICATION',
		},
		{
			id: '9',
			name: 'Doliprane',
			unit: 'APPLICATION',
		},
		{
			id: '10',
			name: 'Doliprane',
			unit: 'APPLICATION',
		},
	];

	return (
		<VStack spacing="12px" align="start" w="100%">
			<VStack spacing="8px" align="start" w="100%">
				<Controller
					control={control}
					name="medicines"
					render={({ field: { value, onChange } }) => (
						<AdvancedSelector
							data={medicines.map((medicine) => ({
								id: medicine.id,
								name: medicine.name,
								content: (
									<SelectHealthIssueMedicineInputCard
										onClick={() =>
											onChange([...value, { id: medicine.id, day: [], period: [], quantity: 1 }])
										}
									>
										<>{medicine.name}</>
									</SelectHealthIssueMedicineInputCard>
								),
							}))}
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
						<MedicineCard medicine={medicine} control={control} />
					</WrapItem>
				))}
			</Wrap>
		</VStack>
	);
};

export default MedicineStillRelevantInput;
