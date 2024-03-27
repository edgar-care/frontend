import { Button, FormLabel, HStack, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

const updateMedicalPersonalModalSexInput = ({
	control,
	errors,
}: {
	control: Control<PatientMedicalType>;
	errors: FieldErrors<PatientMedicalType>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<HStack>
			<FormLabel size="boldLg" id="edgar-updateMedicalPersonalModal-formSex-text">
				Votre sexe
			</FormLabel>
		</HStack>
		<Controller
			control={control}
			name="sex"
			rules={{ required: true }}
			render={({ field: { value, onChange, ref } }) => (
				<Wrap ref={ref}>
					<WrapItem>
						<Button
							variant={value === 'MALE' ? 'primary' : 'secondary'}
							onClick={() => onChange('MALE')}
							id="edgar-updateMedicalPersonalModal-sexMale-button"
						>
							Masculin
						</Button>
					</WrapItem>
					<WrapItem>
						<Button
							variant={value === 'FEMALE' ? 'primary' : 'secondary'}
							onClick={() => onChange('FEMALE')}
							id="edgar-updateMedicalPersonalModal-sexFemale-button"
						>
							Féminin
						</Button>
					</WrapItem>
					<WrapItem>
						<Button
							variant={value === 'OTHER' ? 'primary' : 'secondary'}
							onClick={() => onChange('OTHER')}
							id="edgar-updateMedicalPersonalModal-sexOther-button"
						>
							Autre
						</Button>
					</WrapItem>
				</Wrap>
			)}
		/>
		{errors.sex?.type === 'required' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formSexError-text">Ce champ est nécessaire</ErrorMessage>
		)}
	</VStack>
);

export default updateMedicalPersonalModalSexInput;
