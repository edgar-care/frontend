import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import type { AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalWeightInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg" id="edgar-addPatientModal-formWeight-text">
			Poids
		</FormLabel>
		<Input
			{...register('medicalInfo.weight', { valueAsNumber: true, min: 2, max: 300, required: true })}
			placeholder="45kg"
			type="number"
			w="100%"
			step="0.01"
			id="edgar-addPatientModal-formWeight-input"
		/>
		{errors.medicalInfo?.weight?.type === 'required' && (
			<ErrorMessageM id="edgar-addPatientModal-formWeightErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessageM>
		)}
		{errors.medicalInfo?.weight?.type === 'min' && (
			<ErrorMessageM id="edgar-addPatientModal-formWeightErrorMin-text">
				Renseigner une taille supérieure à 2 kilogrammes
			</ErrorMessageM>
		)}
		{errors.medicalInfo?.weight?.type === 'max' && (
			<ErrorMessageM id="edgar-addPatientModal-formWeightErrorMax-text">
				Renseigner une taille inférieure à 300 kilogrammes
			</ErrorMessageM>
		)}
	</VStack>
);

export default AddPatientModalWeightInput;
