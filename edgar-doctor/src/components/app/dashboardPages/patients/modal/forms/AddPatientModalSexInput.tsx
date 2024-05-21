import { FormLabel, HStack, Button, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { type FieldErrors, type Control, Controller } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';

import { type AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalSexInput = ({
	control,
	errors,
}: {
	control: Control<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<HStack>
			<FormLabel size="boldLg" id="edgar-addPatientModal-formSex-text">
				Adresse mail
			</FormLabel>
		</HStack>
		<Controller
			control={control}
			name="medicalFolder.sex"
			rules={{ required: true }}
			render={({ field: { value, onChange, ref } }) => (
				<Wrap ref={ref}>
					<WrapItem>
						<Button
							variant={value === 'MALE' ? 'primary' : 'secondary'}
							onClick={() => onChange('MALE')}
							id="edgar-addPatientModal-sexMale-button"
						>
							Masculin
						</Button>
					</WrapItem>
					<WrapItem>
						<Button
							variant={value === 'FEMALE' ? 'primary' : 'secondary'}
							onClick={() => onChange('FEMALE')}
							id="edgar-addPatientModal-sexFemale-button"
						>
							Féminin
						</Button>
					</WrapItem>
					<WrapItem>
						<Button
							variant={value === 'OTHER' ? 'primary' : 'secondary'}
							onClick={() => onChange('OTHER')}
							id="edgar-addPatientModal-sexOther-button"
						>
							Autre
						</Button>
					</WrapItem>
				</Wrap>
			)}
		/>
		{errors.medicalFolder?.sex?.type === 'required' && (
			<ErrorMessageM id="edgar-addPatientModal-formSexError-text">Ce champ est nécessaire</ErrorMessageM>
		)}
	</VStack>
);

export default AddPatientModalSexInput;
