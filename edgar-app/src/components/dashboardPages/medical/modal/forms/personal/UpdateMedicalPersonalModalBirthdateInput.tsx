import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

const UpdateMedicalPersonalModalBirthdateInput = ({
	errors,
	register,
}: {
	errors: FieldErrors<PatientMedicalType>;
	register: UseFormRegister<PatientMedicalType>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%" maxW="264px">
		<FormLabel size="boldLg" id="edgar-updateMedicalPersonalModal-formBirthdate-text">
			Votre date de naissance
		</FormLabel>
		<Input
			{...register('birthdate', { required: true, valueAsDate: false })}
			placeholder="Sélectionner votre date de naissance"
			w="100%"
			type="date"
			id="edgar-updateMedicalPersonalModal-formBirthdate-input"
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
