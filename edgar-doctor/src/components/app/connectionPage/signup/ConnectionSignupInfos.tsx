import { FormLabel, HStack, Input, VStack } from '@chakra-ui/react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type RegisterType } from 'types/app/login/RegisterType';

const ConnectionSignupInfos = ({
	register,
	errors,
}: {
	register: UseFormRegister<RegisterType>;
	errors: FieldErrors<RegisterType>;
}): JSX.Element => (
	<VStack w="100%" spacing="16px">
		<VStack w="100%" spacing="8px" align="start">
			<FormLabel size="boldLg">Votre prénom</FormLabel>
			<Input
				{...register('firstname', { minLength: 1, maxLength: 50, required: true })}
				placeholder="Edgar"
				w="100%"
				maxLength={50}
			/>
			{errors.firstname?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
		</VStack>
		<VStack w="100%" spacing="8px" align="start">
			<FormLabel size="boldLg">Votre nom</FormLabel>
			<Input
				{...register('name', { minLength: 1, maxLength: 50, required: true })}
				placeholder="L'assitant numérique"
				w="100%"
				maxLength={50}
			/>
			{errors.name?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
		</VStack>
		<VStack w="100%" spacing="8px" align="start">
			<FormLabel size="boldLg">Adresse de votre cabinet</FormLabel>
			<Input
				{...register('address.street', { minLength: 1, maxLength: 50, required: true })}
				placeholder="1 rue du médecin"
				w="100%"
				maxLength={50}
			/>
			{errors.address?.street?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
		</VStack>
		<HStack w="100%" spacing="8px">
			<VStack w="100%" spacing="8px" align="start">
				<FormLabel size="boldLg">Ville</FormLabel>
				<Input
					{...register('address.city', { minLength: 1, maxLength: 50, required: true })}
					placeholder="Lyon"
					w="100%"
					maxLength={50}
				/>
				{errors.address?.city?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
			</VStack>
			<VStack w="100%" spacing="8px" align="start">
				<FormLabel size="boldLg">Code postal</FormLabel>
				<Input
					{...register('address.zip_code', { minLength: 1, maxLength: 50, required: true })}
					placeholder="69000"
					w="100%"
					maxLength={50}
				/>
				{errors.address?.zip_code?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
			</VStack>
		</HStack>
		<VStack w="100%" spacing="8px" align="start">
			<FormLabel size="boldLg">Pays</FormLabel>
			<Input
				{...register('address.country', { minLength: 1, maxLength: 50, required: true })}
				placeholder="France"
				w="100%"
				maxLength={50}
			/>
			{errors.address?.country?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
		</VStack>
	</VStack>
);

export default ConnectionSignupInfos;
