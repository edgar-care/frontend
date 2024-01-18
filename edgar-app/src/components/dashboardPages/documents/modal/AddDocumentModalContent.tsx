import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormLabel, HStack, Input, Select, VStack } from '@chakra-ui/react';

import ErrorMessage from 'components/forms/ErrorMessage';

import { AddDocumentType } from 'types/dashboard/documents/AddDocumentType';

const AddDocumentModalContent = ({
	register,
	errors,
}: {
	register: UseFormRegister<AddDocumentType>;
	errors: FieldErrors<AddDocumentType>;
}): JSX.Element => (
	<VStack spacing="24px" w="100%" px="32px">
		<VStack w="100%" align="start">
			<FormLabel size="boldLg">Votre document</FormLabel>
			<Input
				{...register('document', { required: true })}
				type="file"
				accept=".pdf, .doc, .docx, .png, .jpeg, .jpg, .odt, .odtx"
			/>
			{errors.document?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
		</VStack>
		<HStack w="100%" spacing="32px">
			<VStack w="100%" align="start">
				<FormLabel size="boldLg">Le type de votre document</FormLabel>
				<Select {...register('documentType', { required: true })}>
					<option value="" disabled selected>
						Ordonnance
					</option>
					<option value="PRESCRIPTION">Ordonnance</option>
					<option value="CERTIFICAT">Certificat</option>
					<option value="XRAY">Radio</option>
					<option value="OTHER">Autre</option>
				</Select>
				{errors.documentType?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
			</VStack>
			<VStack w="100%" align="start">
				<FormLabel size="boldLg">Le type de médecine</FormLabel>
				<Select {...register('category', { required: true })}>
					<option value="" disabled selected>
						Générale
					</option>
					<option value="GENERAL">Générale</option>
				</Select>
				{errors.category?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
			</VStack>
		</HStack>
	</VStack>
);

export default AddDocumentModalContent;
