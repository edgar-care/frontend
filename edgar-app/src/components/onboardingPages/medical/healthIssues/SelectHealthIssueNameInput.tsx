import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

const SelectHealthIssueNameInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<HealthIssuesType>;
	errors: FieldErrors<HealthIssuesType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg" id="edgar-onboardingMedicalPage-medicineName-text">
			Nom de votre sujet de santé
		</FormLabel>
		<Input
			{...register('name', { minLength: 1, maxLength: 50, required: true })}
			placeholder="Edgar"
			w="100%"
			maxLength={50}
			id="edgar-onboardingMedicalPage-medicineName-input"
		/>
		{errors.name?.type === 'required' && (
			<ErrorMessage id="edgar-onboardingMedicalPage-medicineNameError-text">Ce champ est nécessaire</ErrorMessage>
		)}
	</VStack>
);

export default SelectHealthIssueNameInput;
