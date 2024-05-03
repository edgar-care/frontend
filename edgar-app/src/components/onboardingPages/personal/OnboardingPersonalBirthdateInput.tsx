import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingPersonalBirthdateInput = ({
	control,
	errors,
}: {
	control: Control<PersonalInfos>;
	errors: FieldErrors<PersonalInfos>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%" pb={errors.birthdate ? '0px' : '16px'}>
		<FormLabel size="boldLg" id="edgar-onboardingPersonalPage-formBirthdate-text">
			Votre date de naissance
		</FormLabel>
		<Controller
			control={control}
			name="birthdate"
			rules={{ min: Date.UTC(0, 0), max: Date.now(), required: true }}
			render={({ field: { value, onChange } }) => (
				<Input
					value={new Date(value || 0).toISOString().split('T')[0]}
					min="1900-01-01"
					max={new Date().toISOString().split('T')[0]}
					placeholder="Sélectionner votre date de naissance"
					w="100%"
					type="date"
					onChange={(e) => onChange(new Date(e.target.value).getTime())}
					id="edgar-onboardingPersonalPage-formBirthdate-input"
				/>
			)}
		/>
		{errors.birthdate?.type === 'required' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formBirthdateErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
		{errors.birthdate?.type === 'min' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formBirthdateErrorMin-text">
				Renseigner une date de naissance après le 1 janvier 1900
			</ErrorMessage>
		)}
		{errors.birthdate?.type === 'max' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formBirthdateErrorMax-text">
				Renseigner une date de naissance avant celle d'aujourd'hui
			</ErrorMessage>
		)}
	</VStack>
);

export default OnboardingPersonalBirthdateInput;
