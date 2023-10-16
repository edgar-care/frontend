import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormSetValue, type UseFormWatch } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type MedicalProfileType } from 'types/dashboard/medical/MedicalProfileType';

const UpdateMedicalPersonalModalBirthdateInput = ({
	errors,
	watch,
	setValue,
}: {
	errors: FieldErrors<MedicalProfileType>;
	watch: UseFormWatch<MedicalProfileType>;
	setValue: UseFormSetValue<MedicalProfileType>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%" maxW="264px">
		<FormLabel size="boldLg" id="edgar-updateMedicalPersonalModal-formBirthdate-text">
			Votre date de naissance
		</FormLabel>
		<Input
			placeholder="Sélectionner votre date de naissance"
			w="100%"
			value={watch('birthDate').toLocaleDateString('fr-FR').replaceAll('/', '-').split('-').reverse().join('-')}
			onChange={(e) => setValue('birthDate', new Date(e.target.value))}
			type="date"
			id="edgar-updateMedicalPersonalModal-formBirthdate-input"
		/>
		{errors.birthDate?.type === 'required' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formBirthdateErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
		{errors.birthDate?.type === 'min' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formBirthdateErrorMin-text">
				Renseigner une date de naissance après le 1 janvier 1900
			</ErrorMessage>
		)}
		{errors.birthDate?.type === 'max' && (
			<ErrorMessage id="edgar-updateMedicalPersonalModal-formBirthdateErrorMax-text">
				Renseigner une date de naissance avant celle d'aujourd'hui
			</ErrorMessage>
		)}
	</VStack>
);

export default UpdateMedicalPersonalModalBirthdateInput;
