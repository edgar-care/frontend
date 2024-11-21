import { type Control, Controller, type FieldErrors } from 'react-hook-form';
import { FormLabel, Input, VStack } from '@chakra-ui/react';

import ErrorMessage from 'components/forms/ErrorMessage';

import type { TreatmentType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

const AddTreatmentStartDateInput = ({
	control,
	errors,
}: {
	control: Control<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg">Date de début</FormLabel>
		<Controller
			control={control}
			name="startDate"
			rules={{ min: Date.UTC(0, 0), max: Date.UTC(2100, 0), required: true }}
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
		{errors.startDate?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
		{errors.startDate?.type === 'min' && (
			<ErrorMessage>Renseigner une date de début après le 1 janvier 1900</ErrorMessage>
		)}
		{errors.startDate?.type === 'max' && (
			<ErrorMessage>Renseigner une date de début avant le 1 janvier 2100</ErrorMessage>
		)}
	</VStack>
);

export default AddTreatmentStartDateInput;
