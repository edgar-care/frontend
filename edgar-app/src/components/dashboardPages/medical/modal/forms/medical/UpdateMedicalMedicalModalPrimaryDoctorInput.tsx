import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type MedicalProfileType } from 'types/dashboard/medical/MedicalProfileType';

const UpdateMedicalMedicalModalPrimaryDoctorInput = ({
	errors,
	register,
}: {
	errors: FieldErrors<MedicalProfileType>;
	register: UseFormRegister<MedicalProfileType>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-updateMedicalPersonalModal-formPrimaryDoctor-text">
			Le nom de votre médecin traitant
		</FormLabel>
		<Input
			{...register('primaryDoctorName', { minLength: 1, maxLength: 100, required: true })}
			placeholder="Docteur Edgar"
			w="100%"
			maxLength={100}
			id="edgar-updateMedicalPersonalModal-formPrimaryDoctor-input"
		/>
		{errors.primaryDoctorName?.type === 'required' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formPrimaryDoctorError-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
	</VStack>
);

export default UpdateMedicalMedicalModalPrimaryDoctorInput;
