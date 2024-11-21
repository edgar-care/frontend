import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import type { TreatmentType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

const AddTreatmentEndDateInput = ({
	startDate,
	control,
	errors,
}: {
	startDate?: number;
	control: Control<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg">Date de fin (optionnel)</FormLabel>
		<Controller
			control={control}
			name="endDate"
			rules={{ min: startDate || Date.UTC(0, 0), max: Date.UTC(2100, 0) }}
			render={({ field: { value, onChange } }) => (
				<Input
					value={value ? new Date(value).toISOString().split('T')[0] : undefined}
					min="1900-01-01"
					max="2100-01-01"
					placeholder="26/09/2022"
					w="100%"
					type="date"
					onChange={(e) => onChange(new Date(e.target.value).getTime())}
				/>
			)}
		/>
		{errors.endDate?.type === 'min' && (
			<ErrorMessage>
				Renseigner une date de fin après le{' '}
				{startDate ? new Date(startDate).toLocaleDateString('fr-FR') : '1 janvier 1900'}
			</ErrorMessage>
		)}
		{errors.endDate?.type === 'max' && (
			<ErrorMessage>Renseigner une date de fin avant le 1 janvier 2100</ErrorMessage>
		)}
	</VStack>
);

export default AddTreatmentEndDateInput;
