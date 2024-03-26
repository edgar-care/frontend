import { HStack, VStack } from '@chakra-ui/react';
import { type Control, type FieldErrors, type UseFormRegister } from 'react-hook-form';

import UpdateMedicalPersonalModalFirstnameInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalFirstnameInput';
import UpdateMedicalPersonalModalNameInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalNameInput';
import UpdateMedicalPersonalModalBirthdateInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalBirthdateInput';
import UpdateMedicalPersonalModalSexInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalSexInput';
import UpdateMedicalPersonalModalSizeInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalSizeInput';
import UpdateMedicalPersonalModalWeightInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalWeightInput';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

const UpdateMedicalPersonalModal = ({
	register,
	control,
	errors,
}: {
	register: UseFormRegister<PatientMedicalType>;
	control: Control<PatientMedicalType>;
	errors: FieldErrors<PatientMedicalType>;
}): JSX.Element => (
	<VStack w="100%" spacing="24px" px={{ base: '0px', smd: '32px' }} align="start">
		<HStack w="100%" spacing="32px">
			<UpdateMedicalPersonalModalFirstnameInput register={register} errors={errors} />
			<UpdateMedicalPersonalModalNameInput register={register} errors={errors} />
		</HStack>
		<UpdateMedicalPersonalModalBirthdateInput errors={errors} register={register} />
		<UpdateMedicalPersonalModalSexInput control={control} errors={errors} />
		<HStack w="100%" spacing="32px">
			<UpdateMedicalPersonalModalSizeInput register={register} errors={errors} />
			<UpdateMedicalPersonalModalWeightInput register={register} errors={errors} />
		</HStack>
	</VStack>
);

export default UpdateMedicalPersonalModal;
