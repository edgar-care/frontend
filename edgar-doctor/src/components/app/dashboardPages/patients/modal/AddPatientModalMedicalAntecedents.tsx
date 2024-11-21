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

import SelectHealthIssueHandler from 'components/app/dashboardPages/patients/modal/healthIssues/SelectHealthIssueHandler';
import HealthIssueCard from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/HealthIssueCard';
import ErrorMessageM from 'components/forms/ErrorMessage';

import type { HealthIssuesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';
import type { PatientMedicalHealthInfosType } from 'types/app/dashboard/patients/PatientType';

import AddIcon from 'assets/icons/AddIcon';

const AddPatientModalMedicalAntecedents = ({
	control,
	errors,
	healthIssues,
}: {
	control: Control<PatientMedicalHealthInfosType>;
	errors: FieldErrors<PatientMedicalHealthInfosType>;
	healthIssues: HealthIssuesType[];
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
						name="healthIssues"
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
								<SelectHealthIssueHandler
									isOpen={isOpen}
									onClose={onClose}
									onChange={onChange}
									healthIssues={value}
								/>
							</>
						)}
					/>
					<InputRightElement>
						<Icon as={AddIcon} color="blue.700" w="14px" h="14px" />
					</InputRightElement>
				</InputGroup>
				{errors.healthIssues?.type === 'required' && (
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
					{healthIssues.map((healthIssue) => (
						<WrapItem key={healthIssue.name}>
							<Controller
								control={control}
								name="healthIssues"
								render={({ field: { value, onChange } }) => (
									<HealthIssueCard
										healthIssue={healthIssue}
										onUpdate={(name: string) =>
											onChange(
												value.map((item) =>
													item.name === healthIssue.name ? { ...item, name } : item,
												),
											)
										}
										onDelete={() =>
											onChange(value.filter((item) => item.name !== healthIssue.name))
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
