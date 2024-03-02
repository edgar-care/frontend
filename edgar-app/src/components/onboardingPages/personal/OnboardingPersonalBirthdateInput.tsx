import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingPersonalBirthdateInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<PersonalInfos>;
	errors: FieldErrors<PersonalInfos>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%" pb={errors.birthDate ? '0px' : '16px'}>
		<FormLabel size="boldLg" id="edgar-onboardingPersonalPage-formBirthdate-text">
			Votre date de naissance
		</FormLabel>
		<Input
			{...register('birthDate', {
				valueAsDate: true,
				min: Date.UTC(0, 0),
				max: Date.now(),
				required: true,
			})}
			placeholder="Sélectionner votre date de naissance"
			w="100%"
			type="date"
			id="edgar-onboardingPersonalPage-formBirthdate-input"
		/>
		{errors.birthDate?.type === 'required' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formBirthdateErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
		{errors.birthDate?.type === 'min' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formBirthdateErrorMin-text">
				Renseigner une date de naissance après le 1 janvier 1900
			</ErrorMessage>
		)}
		{errors.birthDate?.type === 'max' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formBirthdateErrorMax-text">
				Renseigner une date de naissance avant celle d'aujourd'hui
			</ErrorMessage>
		)}
	</VStack>
);

export default OnboardingPersonalBirthdateInput;
