import {
	FormLabel,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	VStack,
	Wrap,
	WrapItem,
	useDisclosure,
} from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessageM from 'components/forms/ErrorMessage';
import SelectMedicalAntecedentsHandler from 'components/app/dashboardPages/patients/modal/SelectMedicalAntecedentsHandler';
import MedicalAntecedentsCard from 'components/app/dashboardPages/patients/modal/forms/medicalAntecedents/MedicalAntecedentsCard';

import AddIcon from 'assets/icons/AddIcon';

import { type AddPatientDTO } from 'store/types/patients.type';
import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

const AddPatientModalMedicalAntecedents = ({
	control,
	errors,
	medicalAntecedents,
}: {
	control: Control<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
	medicalAntecedents: PatientMedicalAntecedentType[];
}): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<VStack w="100%" spacing="24px" align="start">
			<VStack spacing="4px" align="start" w="100%">
				<FormLabel size="lg" id="edgar-addPatientModal-formMedicalAntecedents-text">
					Antécédents médicaux et sujets de santé
				</FormLabel>
				<InputGroup>
					<Controller
						control={control}
						name="medicalFolder.medicalAntecedents"
						rules={{ required: true }}
						render={({ field: { value, onChange } }) => (
							<>
								<Input
									placeholder="Renseignez vos informations"
									type="text"
									w="100%"
									readOnly
									onClick={onOpen}
									cursor="pointer"
									id="edgar-addPatientModal-formMedicalAntecedents-input"
								/>
								<SelectMedicalAntecedentsHandler
									isOpen={isOpen}
									onClose={onClose}
									onChange={onChange}
									medicalAntecedents={value}
								/>
							</>
						)}
					/>
					<InputRightElement>
						<Icon as={AddIcon} color="blue.700" w="14px" h="14px" />
					</InputRightElement>
				</InputGroup>
				{errors.medicalFolder?.medicalAntecedents?.type === 'required' && (
					<ErrorMessageM id="edgar-addPatientModal-formMedicalAntecedentsErrorRequired-text">
						Ce champ est nécessaire
					</ErrorMessageM>
				)}
			</VStack>
			<VStack w="100%" align="start">
				<Text id="edgar-addPatientModal-formMedicalAntecedentsAdded-text">
					Antécédents médicaux et sujets de santé renseignés
				</Text>
				<Wrap w="100%">
					{medicalAntecedents.map((medicalAntecedent) => (
						<WrapItem key={medicalAntecedent.name}>
							<Controller
								control={control}
								name="medicalFolder.medicalAntecedents"
								render={({ field: { value, onChange } }) => (
									<MedicalAntecedentsCard
										medicalAntecedent={medicalAntecedent}
										onClick={() =>
											onChange(value.filter((item) => item.name !== medicalAntecedent.name))
										}
									/>
								)}
							/>
						</WrapItem>
					))}
				</Wrap>
			</VStack>
		</VStack>
	);
};

export default AddPatientModalMedicalAntecedents;
