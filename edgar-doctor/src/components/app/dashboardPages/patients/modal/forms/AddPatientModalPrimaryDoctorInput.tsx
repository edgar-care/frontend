import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import { type AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalPrimaryDoctorInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-addPatientModal-formPrimaryDoctor-text">
			Nom du médecin traitant
		</FormLabel>
		<Input
			{...register('medicalFolder.primaryDoctorId', { minLength: 1, maxLength: 100, required: true })}
			placeholder="Docteur Edgar"
			w="100%"
			maxLength={100}
			id="edgar-addPatientModal-formPrimaryDoctor-input"
		/>

		{errors.medicalFolder?.primaryDoctorId?.type === 'required' && (
			<ErrorMessageM id="edgar-addPatientModal-formPrimaryDoctorError-text">
				Ce champ est nécessaire
			</ErrorMessageM>
		)}
	</VStack>
);

export default AddPatientModalPrimaryDoctorInput;
