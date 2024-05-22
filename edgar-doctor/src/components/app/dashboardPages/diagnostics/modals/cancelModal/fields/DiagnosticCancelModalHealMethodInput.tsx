import { FormLabel, Textarea, VStack } from '@chakra-ui/react';
import { type UseFormRegister, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type AddDiagnosticDTO } from 'store/types/diagnostics.type';

const DiagnosticCancelModalReasonInput = ({
	errors,
	register,
}: {
	errors: FieldErrors<AddDiagnosticDTO>;
	register: UseFormRegister<AddDiagnosticDTO>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg">Méthode de soins</FormLabel>
		<Textarea
			{...register('healMethod', { required: true, min: 0, max: 1000 })}
			placeholder="Renseigner les méthodes de soins pour diminuer les symptômes"
			w="100%"
			maxLength={1000}
			resize="none"
		/>
		{errors.healMethod?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}*
	</VStack>
);

export default DiagnosticCancelModalReasonInput;
