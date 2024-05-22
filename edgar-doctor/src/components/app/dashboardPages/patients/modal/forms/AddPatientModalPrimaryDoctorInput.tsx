import { useState } from 'react';
import { FormLabel, Icon, Input, InputGroup, InputRightElement, useDisclosure, VStack } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';
import SelectPrimaryDoctorHandler from 'components/app/dashboardPages/patients/modal/forms/primaryDoctor/SelectPrimaryDoctorHandler';

import { AddPatientDTO } from 'store/types/patients.type';

import AddIcon from 'assets/icons/AddIcon';

const OnboardingPersonalPrimaryDoctorInput = ({
	control,
	errors,
}: {
	control: Control<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => {
	const [primaryDoctorName, setPrimaryDoctorName] = useState('');

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<VStack spacing="8px" align="start" w="100%" pb={errors.medicalFolder?.primaryDoctorId ? '0px' : '16px'}>
			<FormLabel size="boldLg" id="edgar-onboardingPersonalPage-formPrimaryDoctor-text">
				Nom du médecin traitant
			</FormLabel>
			<InputGroup>
				<Controller
					control={control}
					name="medicalFolder.primaryDoctorId"
					rules={{ required: true }}
					render={({ field: { onChange } }) => (
						<>
							<Input
								placeholder="Docteur Edgar"
								value={primaryDoctorName}
								type="text"
								w="100%"
								readOnly
								onClick={onOpen}
								cursor="pointer"
								id="edgar-onboardingPersonalPage-formPrimaryDoctor-input"
							/>
							<SelectPrimaryDoctorHandler
								isOpen={isOpen}
								onClose={onClose}
								onChange={onChange}
								setPrimaryDoctorName={setPrimaryDoctorName}
							/>
						</>
					)}
				/>
				<InputRightElement>
					<Icon as={AddIcon} color="blue.700" />
				</InputRightElement>
			</InputGroup>
			{errors.medicalFolder?.primaryDoctorId?.type === 'required' && (
				<ErrorMessage id="edgar-onboardingPersonalPage-formPrimaryDoctorErrorRequired-text">
					Ce champ est nécessaire
				</ErrorMessage>
			)}
		</VStack>
	);
};

export default OnboardingPersonalPrimaryDoctorInput;
