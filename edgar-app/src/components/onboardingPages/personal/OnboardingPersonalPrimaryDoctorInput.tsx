import { useState } from 'react';
import { FormLabel, Input, InputGroup, InputRightElement, useDisclosure, VStack } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';
import SelectPrimaryDoctorHandler from 'components/onboardingPages/personal/primaryDoctor/SelectPrimaryDoctorHandler';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

import AddIcon from 'assets/icons/AddIcon';

const OnboardingPersonalPrimaryDoctorInput = ({
	control,
	errors,
}: {
	control: Control<PersonalInfos>;
	errors: FieldErrors<PersonalInfos>;
}): JSX.Element => {
	// TODO: call the info of the doctor instead of storing it in a use state
	const [primaryDoctorName, setPrimaryDoctorName] = useState('');
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<VStack spacing="8px" align="start" w="100%" pb={errors.primaryDoctorId ? '0px' : '16px'}>
			<FormLabel size="boldLg" id="edgar-onboardingPersonalPage-formPrimaryDoctor-text">
				Le nom de votre médecin traitant
			</FormLabel>
			<InputGroup>
				<Controller
					control={control}
					name="primaryDoctorId"
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
					<AddIcon color="blue.700" />
				</InputRightElement>
			</InputGroup>
			{errors.primaryDoctorId?.type === 'required' && (
				<ErrorMessage id="edgar-onboardingPersonalPage-formPrimaryDoctorErrorRequired-text">
					Ce champ est nécessaire
				</ErrorMessage>
			)}
		</VStack>
	);
};

export default OnboardingPersonalPrimaryDoctorInput;
