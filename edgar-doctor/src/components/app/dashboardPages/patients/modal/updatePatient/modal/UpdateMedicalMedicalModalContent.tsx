import { VStack } from '@chakra-ui/react';
import { type Control, type FieldErrors, type UseFormWatch } from 'react-hook-form';

import UpdateMedicalHealthModalAntecedent from 'components/app/dashboardPages/patients/modal/updatePatient/modal/forms/UpdateMedicalHealthModalAntecedent';

import type { PatientMedicalInfosHealthType } from 'types/app/dashboard/patients/PatientType';

const UpdateMedicalMedicalModalContent = ({
	control,
	watch,
	errors,
}: {
	control: Control<PatientMedicalInfosHealthType>;
	watch: UseFormWatch<PatientMedicalInfosHealthType>;
	errors: FieldErrors<PatientMedicalInfosHealthType>;
}): JSX.Element => (
	<VStack
		w="100%"
		h="100%"
		spacing="16px"
		align="start"
		sx={{
			'::-webkit-scrollbar': {
				width: '6px',
			},
			'::-webkit-scrollbar-track': {
				background: 'grey.100',
				borderRadius: '8px',
				marginTop: '64px',
				marginBottom: '64px',
			},
			'::-webkit-scrollbar-thumb': {
				background: 'grey.200',
				borderRadius: '8px',
			},
			'::-webkit-scrollbar-thumb:hover': {
				background: 'grey.300',
			},
		}}
	>
		<UpdateMedicalHealthModalAntecedent
			control={control}
			errors={errors}
			healthIssues={watch('medicalAntecedents')}
		/>
	</VStack>
);

export default UpdateMedicalMedicalModalContent;
