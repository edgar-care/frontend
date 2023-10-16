import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type MedicalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingMedicalPrimaryDoctorInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<MedicalInfos>;
	errors: FieldErrors<MedicalInfos>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-onboardingMedicalPage-formPrimaryDoctor-text">
			Le nom de votre médecin traitant
		</FormLabel>
		<Input
			{...register('primaryDoctorName', { minLength: 1, maxLength: 100, required: true })}
			placeholder="Docteur Edgar"
			w="100%"
			maxLength={100}
			id="edgar-onboardingMedicalPage-formPrimaryDoctor-input"
		/>
		{errors.primaryDoctorName?.type === 'required' && (
			<ErrorMessage id="edgar-onboardingMedicalPage-formPrimaryDoctorError-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
	</VStack>
);

export default OnboardingMedicalPrimaryDoctorInput;
