import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import type { AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalNameInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg" id="edgar-addPatientModal-formName-text">
			Nom
		</FormLabel>
		<Input
			{...register('medicalInfo.name', { minLength: 1, maxLength: 50, required: true })}
			placeholder="L'assistant numérique"
			w="100%"
			maxLength={50}
			id="edgar-addPatientModal-formName-input"
		/>
		{errors.medicalInfo?.name?.type === 'required' && (
			<ErrorMessageM id="edgar-addPatientModal-formNameError-text">Ce champ est nécessaire</ErrorMessageM>
		)}
	</VStack>
);

export default AddPatientModalNameInput;
