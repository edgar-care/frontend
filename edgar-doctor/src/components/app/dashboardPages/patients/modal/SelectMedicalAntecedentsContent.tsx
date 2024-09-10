import { VStack, chakra } from '@chakra-ui/react';
import type { Control, FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

import SelectMedicalAntecedentsNameInput from 'components/app/dashboardPages/patients/modal/forms/SelectMedicalAntecedentsNameInput';
import SelectMedicalAntecedentsStillRelevantInput from 'components/app/dashboardPages/patients/modal/forms/SelectMedicalAntecedentsStillRelevantInput';
import SelectMedicalAntecedentsMedicineInput from 'components/app/dashboardPages/patients/modal/forms/SelectMedicalAntecedentsMedicineInput';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

const SelectMedicalAntecedentsContent = ({
	onSubmit,
	register,
	control,
	errors,
	watch,
}: {
	onSubmit: () => void;
	register: UseFormRegister<PatientMedicalAntecedentType>;
	control: Control<PatientMedicalAntecedentType>;
	errors: FieldErrors<PatientMedicalAntecedentType>;
	watch: UseFormWatch<PatientMedicalAntecedentType>;
}): JSX.Element => (
	<VStack w="100%" spacing="16px">
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
						<SelectMedicalAntecedentsNameInput register={register} errors={errors} />
						<SelectMedicalAntecedentsStillRelevantInput control={control} errors={errors} />
						<SelectMedicalAntecedentsMedicineInput control={control} watch={watch} errors={errors} />
					</VStack>
				</VStack>
			</VStack>
		</chakra.form>
	</VStack>
);

export default SelectMedicalAntecedentsContent;
