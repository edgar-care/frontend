import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import type { PatientMedicalInfosType } from 'types/app/dashboard/patients/PatientType';

const UpdateMedicalPersonalModalWeightInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<PatientMedicalInfosType>;
	errors: FieldErrors<PatientMedicalInfosType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg" id="edgar-updateMedicalPersonalModal-formWeight-text">
			Votre poids
		</FormLabel>
		<Input
			{...register('weight', { valueAsNumber: true, min: 2, max: 300, required: true })}
			placeholder="45"
			w="100%"
			type="number"
			step="0.01"
			id="edgar-updateMedicalPersonalModal-formWeight-input"
		/>
		{errors.weight?.type === 'required' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formWeightErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
		{errors.weight?.type === 'min' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formWeightErrorMin-text">
				Renseigner un poids supérieur à 2 kilogrammes
			</ErrorMessage>
		)}
		{errors.weight?.type === 'max' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formWeightErrorMax-text">
				Renseigner un poids inférieur à 300 kilogrammes
			</ErrorMessage>
		)}
	</VStack>
);

export default UpdateMedicalPersonalModalWeightInput;
