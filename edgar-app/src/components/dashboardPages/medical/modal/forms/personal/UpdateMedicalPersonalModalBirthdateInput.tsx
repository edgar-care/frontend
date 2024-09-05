import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import type { UpdatePatientMedicalPersonalType } from 'types/dashboard/medical/form/UpdatePatientMedicalType';

const UpdateMedicalPersonalModalBirthdateInput = ({
	errors,
	control,
}: {
	errors: FieldErrors<UpdatePatientMedicalPersonalType>;
	control: Control<UpdatePatientMedicalPersonalType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%" maxW="264px">
		<FormLabel size="lg" id="edgar-updateMedicalPersonalModal-formBirthdate-text">
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
					id="edgar-updateMedicalPersonalModal-formBirthdate-input"
				/>
			)}
		/>
		{errors.birthdate?.type === 'required' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formBirthdateErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
		{errors.birthdate?.type === 'min' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formBirthdateErrorMin-text">
				Renseigner une date de naissance après le 1 janvier 1900
			</ErrorMessage>
		)}
		{errors.birthdate?.type === 'max' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formBirthdateErrorMax-text">
				Renseigner une date de naissance avant celle d'aujourd'hui
			</ErrorMessage>
		)}
	</VStack>
);

export default UpdateMedicalPersonalModalBirthdateInput;
