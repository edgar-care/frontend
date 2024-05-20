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
		<FormLabel size="boldLg">La raison de l’annulation</FormLabel>
		<Textarea
			{...register('reason', { required: true, min: 0, max: 1000 })}
			placeholder="Renseigner la raison de l’annulation"
			w="100%"
			maxLength={1000}
			resize="none"
		/>
		{errors.reason?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}*
	</VStack>
);

export default DiagnosticCancelModalReasonInput;
