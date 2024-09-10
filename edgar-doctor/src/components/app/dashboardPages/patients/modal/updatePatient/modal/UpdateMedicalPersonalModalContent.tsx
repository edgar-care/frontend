import { HStack, VStack } from '@chakra-ui/react';
import { type Control, type FieldErrors, type UseFormRegister } from 'react-hook-form';

import UpdateMedicalPersonalModalFirstnameInput from 'components/app/dashboardPages/patients/modal/updatePatient/modal/forms/personal/UpdateMedicalPersonalModalFirstnameInput';
import UpdateMedicalPersonalModalNameInput from 'components/app/dashboardPages/patients/modal/updatePatient/modal/forms/personal/UpdateMedicalPersonalModalNameInput';
import UpdateMedicalPersonalModalBirthdateInput from 'components/app/dashboardPages/patients/modal/updatePatient/modal/forms/personal/UpdateMedicalPersonalModalBirthdateInput';
import UpdateMedicalPersonalModalSexInput from 'components/app/dashboardPages/patients/modal/updatePatient/modal/forms/personal/UpdateMedicalPersonalModalSexInput';
import UpdateMedicalPersonalModalSizeInput from 'components/app/dashboardPages/patients/modal/updatePatient/modal/forms/personal/UpdateMedicalPersonalModalSizeInput';
import UpdateMedicalPersonalModalWeightInput from 'components/app/dashboardPages/patients/modal/updatePatient/modal/forms/personal/UpdateMedicalPersonalModalWeightInput';
import UpdateMedicalMedicalModalPrimaryDoctorInput from 'components/app/dashboardPages/patients/modal/updatePatient/modal/forms/personal/UpdateMedicalMedicalModalPrimaryDoctorInput';

import type { PatientMedicalInfosType } from 'types/app/dashboard/patients/PatientType';

const UpdateMedicalPersonalModal = ({
	register,
	control,
	errors,
	primaryDoctorId,
}: {
	register: UseFormRegister<PatientMedicalInfosType>;
	control: Control<PatientMedicalInfosType>;
	errors: FieldErrors<PatientMedicalInfosType>;
	primaryDoctorId: string;
}): JSX.Element => (
	<VStack w="100%" spacing="16px" align="start">
		<HStack w="100%" spacing="32px">
			<UpdateMedicalPersonalModalFirstnameInput register={register} errors={errors} />
			<UpdateMedicalPersonalModalNameInput register={register} errors={errors} />
		</HStack>
		<UpdateMedicalPersonalModalBirthdateInput errors={errors} control={control} />
		<UpdateMedicalPersonalModalSexInput control={control} errors={errors} />
		<HStack w="100%" spacing="32px">
			<UpdateMedicalPersonalModalSizeInput register={register} errors={errors} />
			<UpdateMedicalPersonalModalWeightInput register={register} errors={errors} />
		</HStack>
		<UpdateMedicalMedicalModalPrimaryDoctorInput
			control={control}
			errors={errors}
			primaryDoctorId={primaryDoctorId}
		/>
	</VStack>
);

export default UpdateMedicalPersonalModal;
