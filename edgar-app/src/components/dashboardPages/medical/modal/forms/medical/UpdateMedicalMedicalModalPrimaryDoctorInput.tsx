import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

const UpdateMedicalMedicalModalPrimaryDoctorInput = ({
	errors,
	register,
}: {
	errors: FieldErrors<PatientMedicalType>;
	register: UseFormRegister<PatientMedicalType>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-updateMedicalPersonalModal-formPrimaryDoctor-text">
			Le nom de votre médecin traitant
		</FormLabel>
		<Input
			{...register('primaryDoctorId', { minLength: 1, maxLength: 100, required: true })}
			placeholder="Docteur Edgar"
			w="100%"
			maxLength={100}
			id="edgar-updateMedicalPersonalModal-formPrimaryDoctor-input"
		/>
		{errors.primaryDoctorId?.type === 'required' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formPrimaryDoctorError-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
	</VStack>
);

export default UpdateMedicalMedicalModalPrimaryDoctorInput;
