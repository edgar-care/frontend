import { Button, FormLabel, HStack, VStack } from '@chakra-ui/react';
import { Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingPersonalHasAntecedentsInput = ({
	control,
	errors,
}: {
	control: Control<PersonalInfos>;
	errors: FieldErrors<PersonalInfos>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%" pb={errors.hasMedicalAntecedents ? '0px' : '16px'}>
		<FormLabel size="boldLg" id="edgar-onboardingPersonalPage-formHasAntecedents-text">
			Avez-vous des antécédents médicaux ou sujets de santé ?
		</FormLabel>
		<Controller
			control={control}
			name="hasMedicalAntecedents"
			rules={{ validate: (value) => value !== undefined }}
			render={({ field: { value, onChange } }) => (
				<HStack spacing="16px">
					<Button
						variant={value === true ? 'primary' : 'secondary'}
						onClick={() => onChange(true)}
						id="edgar-onboardingPersonalPage-hasAntecedentsYes-button"
					>
						Oui
					</Button>
					<Button
						variant={value === false ? 'primary' : 'secondary'}
						onClick={() => onChange(false)}
						id="edgar-onboardingPersonalPage-hasAntecedentsNo-button"
					>
						Non
					</Button>
				</HStack>
			)}
		/>
		{errors.hasMedicalAntecedents?.type === 'validate' && (
			<ErrorMessage id="edgar-onboardingPersonalPage-formHasAntecedentsErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
	</VStack>
);

export default OnboardingPersonalHasAntecedentsInput;
