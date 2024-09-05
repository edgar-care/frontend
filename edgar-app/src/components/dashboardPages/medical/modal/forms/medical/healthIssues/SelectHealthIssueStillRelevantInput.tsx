import { Button, FormLabel, HStack, VStack } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const SelectHealthIssueStillRelevantInput = ({
	control,
	errors,
}: {
	control: Control<PatientMedicalAntecedentType>;
	errors: FieldErrors<PatientMedicalAntecedentType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg" id="edgar-onboardingMedicalPage-medicineStillRelevant-text">
			Votre sujet de santé est-il toujours en cours ?
		</FormLabel>
		<Controller
			control={control}
			name="stillRelevant"
			rules={{ validate: (value) => value !== undefined }}
			render={({ field: { value, onChange } }) => (
				<HStack spacing="16px">
					<Button
						variant={value === true ? 'primary' : 'secondary'}
						id="edgar-onboardingMedicalPage-medicineStillRelevantYes-button"
						onClick={() => onChange(true)}
					>
						Oui
					</Button>
					<Button
						variant={value === false ? 'primary' : 'secondary'}
						id="edgar-onboardingMedicalPage-medicineStillRelevantNo-button"
						onClick={() => onChange(false)}
					>
						Non
					</Button>
				</HStack>
			)}
		/>
		{errors.stillRelevant?.type === 'validate' && (
			<ErrorMessage id="edgar-onboardingMedicalPage-medicineStillRelevantError-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
	</VStack>
);

export default SelectHealthIssueStillRelevantInput;
