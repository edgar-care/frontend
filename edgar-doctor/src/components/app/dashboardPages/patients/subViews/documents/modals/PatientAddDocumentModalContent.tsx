import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormLabel, Input, Select, Stack, VStack } from '@chakra-ui/react';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type UploadAPatientDocumentDTO } from 'store/types/patients.type';

const PatientAddDocumentModalContent = ({
	register,
	errors,
}: {
	register: UseFormRegister<UploadAPatientDocumentDTO>;
	errors: FieldErrors<UploadAPatientDocumentDTO>;
}): JSX.Element => (
	<VStack spacing="24px" w="100%">
		<VStack w="100%" align="start" spacing="4px">
			<FormLabel size="lg">Votre document</FormLabel>
			<Input
				{...register('document', { required: true })}
				type="file"
				accept=".pdf, .doc, .docx, .png, .odt, .odtx"
			/>
			{errors.document?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
		</VStack>
		<Stack direction={{ base: 'column', smd: 'row' }} w="100%" spacing="16px">
			<VStack w="100%" align="start" spacing="4px">
				<FormLabel size="lg">Le type de votre document</FormLabel>
				<Select {...register('documentType', { required: true })}>
					<option value="PRESCRIPTION">Ordonnance</option>
					<option value="CERTIFICATE">Certificat</option>
					<option value="XRAY">Radio</option>
					<option value="OTHER">Autre</option>
				</Select>
				{errors.documentType?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
			</VStack>
			<VStack w="100%" align="start" spacing="4px">
				<FormLabel size="lg">Le type de médecine</FormLabel>
				<Select {...register('category', { required: true })}>
					<option value="GENERAL">Générale</option>
				</Select>
				{errors.category?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
			</VStack>
		</Stack>
	</VStack>
);

export default PatientAddDocumentModalContent;
