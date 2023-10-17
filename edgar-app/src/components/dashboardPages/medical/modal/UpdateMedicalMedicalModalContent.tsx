import { VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister, type UseFormSetValue, type UseFormWatch } from 'react-hook-form';

import UpdateMedicalMedicalModalPrimaryDoctorInput from 'components/dashboardPages/medical/modal/forms/medical/UpdateMedicalMedicalModalPrimaryDoctorInput';
import UpdateMedicalMedicalModalAllergiesInput from 'components/dashboardPages/medical/modal/forms/medical/UpdateMedicalMedicalModalAllergiesInput';
import UpdateMedicalMedicalModalDiseasesInput from 'components/dashboardPages/medical/modal/forms/medical/UpdateMedicalMedicalModalDiseasesInput';
import UpdateMedicalMedicalModalTreatmentsInput from 'components/dashboardPages/medical/modal/forms/medical/UpdateMedicalMedicalModalTreatmentsInput';

import { type MedicalProfileType } from 'types/dashboard/medical/MedicalProfileType';

const UpdateMedicalMedicalModalContent = ({
	register,
	errors,
	watch,
	setValue,
}: {
	register: UseFormRegister<MedicalProfileType>;
	errors: FieldErrors<MedicalProfileType>;
	watch: UseFormWatch<MedicalProfileType>;
	setValue: UseFormSetValue<MedicalProfileType>;
}): JSX.Element => (
	<VStack
		w="100%"
		spacing="24px"
		px={{ base: '0px', smd: '32px' }}
		align="start"
		maxH={{ base: 'auto', smd: 'calc(100vh - 400px)' }}
		overflowY={{ base: 'hidden', smd: 'scroll' }}
		sx={{
			'::-webkit-scrollbar': {
				width: '6px',
			},
			'::-webkit-scrollbar-track': {
				background: '#F1F1F1',
				borderRadius: '8px',
			},
			'::-webkit-scrollbar-thumb': {
				background: 'grey.200',
				borderRadius: '8px',
			},
			'::-webkit-scrollbar-thumb:hover': {
				background: 'grey.300',
			},
			scrollbarWidth: 'thin',
			scrollbarColor: '#CCC #F1F1F1',
		}}
	>
		<UpdateMedicalMedicalModalPrimaryDoctorInput errors={errors} register={register} />
		<UpdateMedicalMedicalModalAllergiesInput watch={watch} setValue={setValue} />
		<UpdateMedicalMedicalModalDiseasesInput watch={watch} setValue={setValue} />
		<UpdateMedicalMedicalModalTreatmentsInput watch={watch} setValue={setValue} />
	</VStack>
);

export default UpdateMedicalMedicalModalContent;
