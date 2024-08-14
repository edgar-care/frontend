import { Button, FormLabel, HStack, VStack } from '@chakra-ui/react';
import { Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

const AddTreatmentExisting = ({
	control,
	errors,
}: {
	control: Control<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%" pb={errors.alreadyExist ? '0px' : '16px'}>
		<FormLabel size="boldLg">Avez-vous déjà ajouté votre sujet de santé ?</FormLabel>
		<Controller
			control={control}
			name="alreadyExist"
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
		{errors.alreadyExist?.type === 'validate' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
	</VStack>
);

export default AddTreatmentExisting;
