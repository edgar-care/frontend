import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import { type AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalMailInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-addPatientModal-formMail-text">
			Adresse mail
		</FormLabel>
		<Input
			{...register('email', { minLength: 1, maxLength: 50, required: true })}
			placeholder="edgar.assistant@edgar-sante.fr"
			w="100%"
			maxLength={50}
			id="edgar-addPatientModal-formMail-input"
		/>
		{errors.email?.type === 'required' && (
			<ErrorMessageM id="edgar-addPatientModal-formMailError-text">Ce champ est nécessaire</ErrorMessageM>
		)}
	</VStack>
);

export default AddPatientModalMailInput;
