import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingPersonalFirstnameInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<PersonalInfos>;
	errors: FieldErrors<PersonalInfos>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%" pb={errors.firstname ? '0px' : '16px'}>
		<FormLabel size="boldLg" id="edgar-onboardingPersonalPage-formFirstname-text">
			Votre prénom
		</FormLabel>
		<Input
			{...register('firstname', { minLength: 1, maxLength: 50, required: true })}
			placeholder="Edgar"
			w="100%"
			maxLength={50}
			id="edgar-onboardingPersonalPage-formFirstname-input"
		/>
		{errors.firstname?.type === 'required' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formFirstnameError-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
	</VStack>
);

export default OnboardingPersonalFirstnameInput;
