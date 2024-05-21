import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import { type AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalBirthdateInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%" maxW="264px">
		<FormLabel size="boldLg" id="edgar-addPatientModal-formBirthdate-text">
			Date de naissance
		</FormLabel>
		<Input
			{...register('medicalFolder.birthdate', { required: true, valueAsDate: false })}
			placeholder="26/09/2022"
			w="100%"
			type="date"
			id="edgar-addPatientModal-formBirthdate-input"
		/>
		{errors.medicalFolder?.birthdate?.type === 'required' && (
			<ErrorMessageM id="edgar-addPatientModal-formBirthdateErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessageM>
		)}
		{errors.medicalFolder?.birthdate?.type === 'min' && (
			<ErrorMessageM id="edgar-addPatientModal-formBirthdateErrorMin-text">
				Renseigner une date de naissance après le 1 janvier 1900
			</ErrorMessageM>
		)}
		{errors.medicalFolder?.birthdate?.type === 'max' && (
			<ErrorMessageM id="edgar-addPatientModal-formBirthdateErrorMax-text">
				Renseigner une date de naissance avant celle d'aujourd'hui
			</ErrorMessageM>
		)}
	</VStack>
);

export default AddPatientModalBirthdateInput;
