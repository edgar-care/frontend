import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import type { AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalMailInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg" id="edgar-addPatientModal-formMail-text">
			Adresse mail
		</FormLabel>
		<Input
			{...register('email', { minLength: 1, maxLength: 50, required: true, pattern: /^\S+@\S+.\S+$/ })}
			placeholder="edgar.assistant@edgar-sante.fr"
			w="100%"
			maxLength={50}
			id="edgar-addPatientModal-formMail-input"
		/>
		{errors.email?.type === 'required' && (
			<ErrorMessageM id="edgar-addPatientModal-formMailError-text">Ce champ est nécessaire</ErrorMessageM>
		)}
		{errors.email?.type === 'pattern' && (
			<ErrorMessageM id="edgar-addPatientModal-formMailError-text">Adresse mail invalide</ErrorMessageM>
		)}
	</VStack>
);

export default AddPatientModalMailInput;
