import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import type { AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalFirstnameInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg" id="edgar-addPatientModal-formFirstname-text">
			Prénom
		</FormLabel>
		<Input
			{...register('medicalInfo.firstname', { minLength: 1, maxLength: 50, required: true })}
			placeholder="Edgar"
			w="100%"
			maxLength={50}
			id="edgar-addPatientModal-formFirstname-input"
		/>
		{errors.medicalInfo?.firstname?.type === 'required' && (
			<ErrorMessageM id="edgar-addPatientModal-formFirstnameError-text">Ce champ est nécessaire</ErrorMessageM>
		)}
	</VStack>
);

export default AddPatientModalFirstnameInput;
