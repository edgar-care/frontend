import { VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import UpdateMedicalMedicalModalPrimaryDoctorInput from 'components/dashboardPages/medical/modal/forms/medical/UpdateMedicalMedicalModalPrimaryDoctorInput';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

const UpdateMedicalMedicalModalContent = ({
	register,
	errors,
}: {
	register: UseFormRegister<PatientMedicalType>;
	errors: FieldErrors<PatientMedicalType>;
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
	</VStack>
);

export default UpdateMedicalMedicalModalContent;
