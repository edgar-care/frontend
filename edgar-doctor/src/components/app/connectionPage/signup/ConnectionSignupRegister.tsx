import { FormLabel, Input, InputGroup, InputRightElement, useDisclosure, VStack } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import type { RegisterTypeDTO } from 'store/types/account.type';

const ConnectionSignupRegister = ({
	register,
	errors,
}: {
	register: UseFormRegister<RegisterTypeDTO>;
	errors: FieldErrors<RegisterTypeDTO>;
}) => {
	const { isOpen: showPassword, onToggle: toggleShowPassword } = useDisclosure();
	return (
		<VStack w="100%" spacing="32px">
			<VStack w="100%" spacing="8px" align="start">
				<FormLabel size="boldLg">Adresse mail</FormLabel>
				<Input
					{...register('email', { minLength: 1, maxLength: 50, required: true })}
					placeholder="prenom.nom@gmail.com"
					w="100%"
					maxLength={50}
				/>
				{errors.email?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
			</VStack>
			<VStack w="100%" spacing="8px" align="start">
				<FormLabel size="boldLg">Mot de passe</FormLabel>
				<InputGroup>
					<Input
						type={showPassword ? 'text' : 'password'}
						{...register('password', { minLength: 8, maxLength: 50, required: true })}
						placeholder="Minimum 8 caractères"
						w="100%"
						maxLength={50}
						minLength={8}
					/>
					<InputRightElement>
						{showPassword ? (
							<ViewOffIcon cursor="pointer" onClick={() => toggleShowPassword()} />
						) : (
							<ViewIcon cursor="pointer" onClick={() => toggleShowPassword()} />
						)}
					</InputRightElement>
				</InputGroup>
				{errors.password?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
				{errors.password?.type === 'minLength' && (
					<ErrorMessage>Le mot de passe doit faire 8 caractères</ErrorMessage>
				)}
			</VStack>
		</VStack>
	);
};

export default ConnectionSignupRegister;
