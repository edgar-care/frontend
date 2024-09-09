import { HStack, VStack } from '@chakra-ui/react';
import { type Control, type FieldErrors, type UseFormRegister } from 'react-hook-form';

import AddPatientModalMailInput from 'components/app/dashboardPages/patients/modal/forms/AddPatientModalMailInput';
import AddPatientModalFirstnameInput from 'components/app/dashboardPages/patients/modal/forms/AddPatientModalFirstnameInput';
import AddPatientModalNameInput from 'components/app/dashboardPages/patients/modal/forms/AddPatientModalNameInput';
import AddPatientModalBirthdateInput from 'components/app/dashboardPages/patients/modal/forms/AddPatientModalBirthdateInput';
import AddPatientModalSexInput from 'components/app/dashboardPages/patients/modal/forms/AddPatientModalSexInput';
import AddPatientModalSizeInput from 'components/app/dashboardPages/patients/modal/forms/AddPatientModalSizeInput';
import AddPatientModalWeightInput from 'components/app/dashboardPages/patients/modal/forms/AddPatientModalWeightInput';
import AddPatientModalPrimaryDoctorInput from 'components/app/dashboardPages/patients/modal/forms/AddPatientModalPrimaryDoctorInput';

import { type AddPatientDTO } from 'store/types/patients.type';

const AddPatientModalContent = ({
	register,
	control,
	errors,
}: {
	register: UseFormRegister<AddPatientDTO>;
	control: Control<AddPatientDTO>;
	errors: FieldErrors<AddPatientDTO>;
}): JSX.Element => (
	<VStack w="100%" spacing="16px" align="start">
		<AddPatientModalMailInput register={register} errors={errors} />
		<HStack w="100%" spacing="32px">
			<AddPatientModalFirstnameInput register={register} errors={errors} />
			<AddPatientModalNameInput register={register} errors={errors} />
		</HStack>
		<AddPatientModalBirthdateInput control={control} errors={errors} />
		<AddPatientModalSexInput control={control} errors={errors} />
		<HStack w="100%" spacing="32px">
			<AddPatientModalSizeInput register={register} errors={errors} />
			<AddPatientModalWeightInput register={register} errors={errors} />
		</HStack>
		<AddPatientModalPrimaryDoctorInput control={control} errors={errors} />
	</VStack>
);

export default AddPatientModalContent;
