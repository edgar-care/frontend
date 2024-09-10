import { Button, FormLabel, HStack, VStack } from '@chakra-ui/react';
import { Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

const SelectMedicalAntecedentsStillRelevantInput = ({
	control,
	errors,
}: {
	control: Control<PatientMedicalAntecedentType>;
	errors: FieldErrors<PatientMedicalAntecedentType>;
}): JSX.Element => (
	<VStack spacing="4px" align="start" w="100%">
		<FormLabel size="lg">Le sujet de santé est-il toujours en cours ?</FormLabel>
		<Controller
			control={control}
			name="stillRelevant"
			rules={{ validate: (value) => value !== undefined }}
			render={({ field: { value, onChange } }) => (
				<HStack spacing="16px">
					<Button variant={value === true ? 'primary' : 'secondary'} onClick={() => onChange(true)}>
						Oui
					</Button>
					<Button variant={value === false ? 'primary' : 'secondary'} onClick={() => onChange(false)}>
						Non
					</Button>
				</HStack>
			)}
		/>
		{errors.stillRelevant?.type === 'validate' && <ErrorMessageM>Ce champ est nécessaire</ErrorMessageM>}
	</VStack>
);

export default SelectMedicalAntecedentsStillRelevantInput;
