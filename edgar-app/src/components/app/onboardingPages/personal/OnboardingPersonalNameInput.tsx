import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingPersonalNameInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<PersonalInfos>;
	errors: FieldErrors<PersonalInfos>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-onboardingPersonalPage-formName-text">
			Votre nom
		</FormLabel>
		<Input
			{...register('name', { minLength: 1, maxLength: 50, required: true })}
			placeholder="L’assistant numérique"
			w="100%"
			maxLength={50}
			id="edgar-onboardingPersonalPage-formName-input"
		/>
		{errors.name?.type === 'required' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formNameError-text">Ce champ est nécessaire</ErrorMessage>
		)}
	</VStack>
);

export default OnboardingPersonalNameInput;
