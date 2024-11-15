import { useState } from 'react';
import { FormLabel, Icon, Input, InputGroup, InputRightElement, useDisclosure, VStack } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';
import SelectPrimaryDoctorHandler from 'components/app/dashboardPages/patients/modal/forms/primaryDoctor/SelectPrimaryDoctorHandler';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

import type { PatientMedicalInfosType } from 'types/app/dashboard/patients/PatientType';

import AddIcon from 'assets/icons/AddIcon';

const UpdateMedicalMedicalModalPrimaryDoctorInput = ({
	control,
	errors,
	primaryDoctorId,
}: {
	control: Control<PatientMedicalInfosType>;
	errors: FieldErrors<PatientMedicalInfosType>;
	primaryDoctorId: string;
}): JSX.Element => {
	const { data: doctor } = useGetDoctorByIdQuery(primaryDoctorId);
	const [primaryDoctorName, setPrimaryDoctorName] = useState(
		doctor ? `Docteur ${doctor.firstname.substring(0, 1)}. ${doctor.name}` : '',
	);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<VStack spacing="4px" align="start" w="100%">
			<FormLabel size="lg" id="edgar-updateMedicalPersonalModal-formPrimaryDoctor-text">
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
								id="edgar-updateMedicalPersonalModal-formPrimaryDoctor-input"
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
			{errors.primaryDoctorId?.type === 'required' && (
				<ErrorMessage id="edgar-updateMedicalPersonalModal-formPrimaryDoctorError-text">
					Ce champ est nécessaire
				</ErrorMessage>
			)}
		</VStack>
	);
};

export default UpdateMedicalMedicalModalPrimaryDoctorInput;
