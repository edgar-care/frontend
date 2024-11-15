import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import type { PatientMedicalInfosType } from 'types/app/dashboard/patients/PatientType';

const UpdateMedicalPersonalModalSizeInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<PatientMedicalInfosType>;
	errors: FieldErrors<PatientMedicalInfosType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg" id="edgar-updateMedicalPersonalModal-formSize-text">
			Votre taille
		</FormLabel>
		<Input
			{...register('height', { valueAsNumber: true, min: 0.5, max: 3, required: true })}
			placeholder="1.52"
			type="number"
			w="100%"
			step="0.01"
			id="edgar-updateMedicalPersonalModal-formSize-input"
		/>
		{errors.height?.type === 'required' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formSizeErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
		{errors.height?.type === 'min' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formSizeErrorMin-text">
				Renseigner une taille supérieure à 0.5 mètres
			</ErrorMessage>
		)}
		{errors.height?.type === 'max' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formSizeErrorMax-text">
				Renseigner une taille inférieure à 3 mètres
			</ErrorMessage>
		)}
	</VStack>
);

export default UpdateMedicalPersonalModalSizeInput;
