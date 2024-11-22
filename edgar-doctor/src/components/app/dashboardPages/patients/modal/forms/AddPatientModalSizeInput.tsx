import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import type { AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalSizeInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="84x" align="start" w="100%">
		<FormLabel size="lg" id="edgar-addPatientModal-formSize-text">
			Taille
		</FormLabel>
		<Input
			{...register('medicalInfo.height', { valueAsNumber: true, min: 0.5, max: 3, required: true })}
			placeholder="1.52m"
			type="number"
			w="100%"
			step="0.01"
			id="edgar-addPatientModal-formSize-input"
		/>
		{errors.medicalInfo?.height?.type === 'required' && (
			<ErrorMessageM id="edgar-addPatientModal-formSizeErrorRequired-text">Ce champ est nécessaire</ErrorMessageM>
		)}
		{errors.medicalInfo?.height?.type === 'min' && (
			<ErrorMessageM id="edgar-addPatientModal-formSizeErrorMin-text">
				Renseigner une taille supérieure à 0.5 mètres
			</ErrorMessageM>
		)}
		{errors.medicalInfo?.height?.type === 'max' && (
			<ErrorMessageM id="edgar-addPatientModal-formSizeErrorMax-text">
				Renseigner une taille inférieure à 3 mètres
			</ErrorMessageM>
		)}
	</VStack>
);

export default AddPatientModalSizeInput;
