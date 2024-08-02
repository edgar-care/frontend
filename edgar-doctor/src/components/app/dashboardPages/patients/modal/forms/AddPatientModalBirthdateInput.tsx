import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalBirthdateInput = ({
	control,
	errors,
}: {
	control: Control<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%" maxW="264px">
		<FormLabel size="lg" id="edgar-onboardingPersonalPage-formBirthdate-text">
			Date de naissance
		</FormLabel>
		<Controller
			control={control}
			name="medicalFolder.birthdate"
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
		{errors.medicalFolder?.birthdate?.type === 'required' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formBirthdateErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
		{errors.medicalFolder?.birthdate?.type === 'min' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formBirthdateErrorMin-text">
				Renseigner une date de naissance après le 1 janvier 1900
			</ErrorMessage>
		)}
		{errors.medicalFolder?.birthdate?.type === 'max' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formBirthdateErrorMax-text">
				Renseigner une date de naissance avant celle d'aujourd'hui
			</ErrorMessage>
		)}
	</VStack>
);

export default AddPatientModalBirthdateInput;
