import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormLabel, Input, VStack } from '@chakra-ui/react';

import ErrorMessage from 'components/forms/ErrorMessage';

import type { UpdateDocumentType } from 'types/dashboard/documents/UpdateDocumentType';

const UpdateDocumentModalContent = ({
	placeholder,
	register,
	errors,
}: {
	placeholder: string;
	register: UseFormRegister<UpdateDocumentType>;
	errors: FieldErrors<UpdateDocumentType>;
}): JSX.Element => (
	<VStack w="100%" align="start">
		<FormLabel size="lg">Le nouveau nom de votre document</FormLabel>
		<Input placeholder={placeholder} {...register('documentName', { required: true })} maxLength={100} />
		{errors.documentName?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
	</VStack>
);

export default UpdateDocumentModalContent;
