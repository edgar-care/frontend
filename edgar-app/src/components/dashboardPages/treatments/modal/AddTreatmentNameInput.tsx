import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type TreatmentType } from 'types/dashboard/treatments/TreatmentType';

const AddTreatmentNameInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%" pb={errors.name ? '0px' : '16px'}>
		<FormLabel size="boldLg">Nom de votre sujet de santé</FormLabel>
		<Input
			{...register('name', { minLength: 1, maxLength: 50, required: true })}
			placeholder="Rechercher par nom de maladie"
			w="100%"
			maxLength={50}
		/>
		{errors.name?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
	</VStack>
);

export default AddTreatmentNameInput;
