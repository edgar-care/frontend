import { HStack, VStack } from '@chakra-ui/react';
import {
	type Control,
	type FieldErrors,
	type UseFormRegister,
	type UseFormSetValue,
	type UseFormWatch,
} from 'react-hook-form';

import UpdateMedicalPersonalModalFirstnameInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalFirstnameInput';
import UpdateMedicalPersonalModalNameInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalNameInput';
import UpdateMedicalPersonalModalBirthdateInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalBirthdateInput';
import UpdateMedicalPersonalModalSexInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalSexInput';
import UpdateMedicalPersonalModalSizeInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalSizeInput';
import UpdateMedicalPersonalModalWeightInput from 'components/dashboardPages/medical/modal/forms/personal/UpdateMedicalPersonalModalWeightInput';

import { type MedicalProfileType } from 'types/dashboard/medical/MedicalProfileType';

const UpdateMedicalPersonalModal = ({
	register,
	control,
	errors,
	watch,
	setValue,
}: {
	register: UseFormRegister<MedicalProfileType>;
	control: Control<MedicalProfileType>;
	errors: FieldErrors<MedicalProfileType>;
	watch: UseFormWatch<MedicalProfileType>;
	setValue: UseFormSetValue<MedicalProfileType>;
}): JSX.Element => (
	<VStack w="100%" spacing="24px" px={{ base: '0px', smd: '32px' }} align="start">
		<HStack w="100%" spacing="32px">
			<UpdateMedicalPersonalModalFirstnameInput register={register} errors={errors} />
			<UpdateMedicalPersonalModalNameInput register={register} errors={errors} />
		</HStack>
		<UpdateMedicalPersonalModalBirthdateInput errors={errors} watch={watch} setValue={setValue} />
		<UpdateMedicalPersonalModalSexInput control={control} errors={errors} />
		<HStack w="100%" spacing="32px">
			<UpdateMedicalPersonalModalSizeInput register={register} errors={errors} />
			<UpdateMedicalPersonalModalWeightInput register={register} errors={errors} />
		</HStack>
	</VStack>
);

export default UpdateMedicalPersonalModal;
