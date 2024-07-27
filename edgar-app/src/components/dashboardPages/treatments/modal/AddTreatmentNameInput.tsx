import { useState } from 'react';
import { FormLabel, Input, VStack, Text } from '@chakra-ui/react';
import { type UseFormWatch, type FieldErrors, type UseFormRegister, Controller, Control } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';
import AdvancedSelector from 'components/AdvancedSelector';
import AddTreatmentNameInputCard from 'components/dashboardPages/treatments/modal/AddTreatmentNameInputCard';

import { type TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

const AddTreatmentNameInput = ({
	register,
	control,
	watch,
	errors,
}: {
	register: UseFormRegister<TreatmentType>;
	control: Control<TreatmentType>;
	watch: UseFormWatch<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
}): JSX.Element => {
	const { data: medicalInfo } = useGetPatientMedicalFolderQuery();
	const existing = watch('existing');

	const [selectedDiseaseName, setSelectedDiseaseName] = useState<string | undefined>(undefined);

	return existing ? (
		<VStack spacing="8px" align="start" w="100%" pb={errors.diseaseId ? '0px' : '16px'}>
			<Text size="boldLg">Nom de votre sujet de santé : {selectedDiseaseName}</Text>
			<Controller
				control={control}
				name="diseaseId"
				render={({ field: { onChange } }) => (
					<AdvancedSelector
						data={
							medicalInfo?.medicalAntecedents?.map((antecedent) => ({
								id: antecedent.id,
								name: antecedent.name,
								content: (
									<AddTreatmentNameInputCard
										onClick={() => {
											onChange(antecedent.id);
											setSelectedDiseaseName(antecedent.name);
										}}
									>
										<>{antecedent.name}</>
									</AddTreatmentNameInputCard>
								),
							})) || []
						}
						placeholder="Nom de maladie"
					/>
				)}
			/>
			{errors.diseaseId?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
		</VStack>
	) : (
		<VStack spacing="8px" align="start" w="100%" pb={errors.name ? '0px' : '16px'}>
			<FormLabel size="boldLg">Nom de votre sujet de santé</FormLabel>
			<Input
				{...register('name', { minLength: 1, maxLength: 50, required: true })}
				placeholder="Rechercher par nom de maladie"
				w="100%"
				maxLength={50}
			/>
			{errors.name?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
		</VStack>
	);
};

export default AddTreatmentNameInput;
