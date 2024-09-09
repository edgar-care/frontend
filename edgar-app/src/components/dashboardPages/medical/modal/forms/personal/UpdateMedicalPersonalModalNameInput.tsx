import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import type { UpdatePatientMedicalPersonalType } from 'types/dashboard/medical/form/UpdatePatientMedicalType';

const updateMedicalPersonalModalNameInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<UpdatePatientMedicalPersonalType>;
	errors: FieldErrors<UpdatePatientMedicalPersonalType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg" id="edgar-updateMedicalPersonalModal-formName-text">
			Votre nom
		</FormLabel>
		<Input
			{...register('name', { minLength: 1, maxLength: 50, required: true })}
			placeholder="L’assistant numérique"
			w="100%"
			maxLength={50}
			id="edgar-updateMedicalPersonalModal-formName-input"
		/>
		{errors.name?.type === 'required' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formNameError-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
	</VStack>
);

export default updateMedicalPersonalModalNameInput;
