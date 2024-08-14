import { chakra, VStack } from '@chakra-ui/react';
import { Control, FieldErrors, UseFormWatch } from 'react-hook-form';

import UpdateTreatmentMedicineInput from 'components/dashboardPages/treatments/modal/UpdateTreatmentMedicineInput';
import UpdateTreatmentExisting from 'components/dashboardPages/treatments/modal/UpdateTreatmentExisting';

import { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const UpdateTreatmentContent = ({
	onSubmit,
	control,
	watch,
	errors,
}: {
	onSubmit: () => void;
	control: Control<PatientMedicalAntecedentType>;
	watch: UseFormWatch<PatientMedicalAntecedentType>;
	errors: FieldErrors<PatientMedicalAntecedentType>;
}): JSX.Element => (
	<VStack w="100%" spacing="24px">
		<chakra.form onSubmit={onSubmit} w="100%" h="100%">
			<VStack
				w="100%"
				spacing="16px"
				h="100%"
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
				<VStack w="100%">
					<VStack w="100%" spacing="16px">
						<UpdateTreatmentExisting control={control} errors={errors} />
						<UpdateTreatmentMedicineInput medicines={watch('medicines')} control={control} watch={watch} errors={errors} />
					</VStack>
				</VStack>
			</VStack>
		</chakra.form>
	</VStack>
);

export default UpdateTreatmentContent;
