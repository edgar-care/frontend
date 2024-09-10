import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

const SelectMedicalAntecedentsNameInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<PatientMedicalAntecedentType>;
	errors: FieldErrors<PatientMedicalAntecedentType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg">Nom du sujet de santé</FormLabel>
		<Input
			{...register('name', { minLength: 1, maxLength: 50, required: true })}
			placeholder="Edgar"
			w="100%"
			maxLength={50}
		/>
		{errors.name?.type === 'required' && <ErrorMessageM>Ce champ est nécessaire</ErrorMessageM>}
	</VStack>
);

export default SelectMedicalAntecedentsNameInput;
