import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingPersonalWeightInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<PersonalInfos>;
	errors: FieldErrors<PersonalInfos>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-onboardingPersonalPage-formWeight-text">
			Votre poids (en kilogrammes)
		</FormLabel>
		<Input
			{...register('weight', { valueAsNumber: true, min: 2, max: 300, required: true })}
			placeholder="45"
			w="100%"
			type="number"
			step="0.01"
			id="edgar-onboardingPersonalPage-formWeight-input"
		/>
		{errors.weight?.type === 'required' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formWeightErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
		{errors.weight?.type === 'min' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formWeightErrorMin-text">
				Renseigner un poids supérieur à 2 kilogrammes
			</ErrorMessage>
		)}
		{errors.weight?.type === 'max' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formWeightErrorMax-text">
				Renseigner un poids inférieur à 300 kilogrammes
			</ErrorMessage>
		)}
	</VStack>
);

export default OnboardingPersonalWeightInput;
