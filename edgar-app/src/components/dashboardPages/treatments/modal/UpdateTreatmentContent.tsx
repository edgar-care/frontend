import { chakra, VStack } from '@chakra-ui/react';
import { Control, FieldErrors } from 'react-hook-form';

import UpdateTreatmentMedicineInput from 'components/dashboardPages/treatments/modal/UpdateTreatmentMedicineInput';

import { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';
import { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

const UpdateTreatmentContent = ({
	addedMedicines,
	onSubmit,
	control,
	errors,
}: {
	addedMedicines: PatientMedicineType[];
	onSubmit: () => void;
	control: Control<PatientMedicalAntecedentType>;
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
						<UpdateTreatmentMedicineInput
							addedMedicines={addedMedicines}
							control={control}
							errors={errors}
						/>
					</VStack>
				</VStack>
			</VStack>
		</chakra.form>
	</VStack>
);

export default UpdateTreatmentContent;
