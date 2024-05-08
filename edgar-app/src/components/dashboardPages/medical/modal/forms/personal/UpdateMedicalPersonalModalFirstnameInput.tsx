import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

const updateMedicalPersonalModalFirstnameInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<PatientMedicalType>;
	errors: FieldErrors<PatientMedicalType>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-updateMedicalPersonalModal-formFirstname-text">
			Votre prénom
		</FormLabel>
		<Input
			{...register('firstname', { minLength: 1, maxLength: 50, required: true })}
			placeholder="Edgar"
			w="100%"
			maxLength={50}
			id="edgar-updateMedicalPersonalModal-formFirstname-input"
		/>
		{errors.firstname?.type === 'required' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formFirstnameError-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
	</VStack>
);

export default updateMedicalPersonalModalFirstnameInput;
