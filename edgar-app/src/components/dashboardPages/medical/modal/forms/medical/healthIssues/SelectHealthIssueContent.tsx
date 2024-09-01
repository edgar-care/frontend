import { VStack, chakra } from '@chakra-ui/react';
import type { Control, FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

import SelectHealthIssueNameInput from 'components/dashboardPages/medical/modal/forms/medical/healthIssues/SelectHealthIssueNameInput';
import SelectHealthIssueStillRelevantInput from 'components/dashboardPages/medical/modal/forms/medical/healthIssues/SelectHealthIssueStillRelevantInput';
import SelectHealthIssueMedicineInput from 'components/dashboardPages/medical/modal/forms/medical/healthIssues/SelectHealthIssueMedicineInput';

import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const SelectHealthIssueContent = ({
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
					<VStack w="100%" spacing="12px">
						<SelectHealthIssueNameInput register={register} errors={errors} />
						<SelectHealthIssueStillRelevantInput control={control} errors={errors} />
						<SelectHealthIssueMedicineInput control={control} watch={watch} errors={errors} />
					</VStack>
				</VStack>
			</VStack>
		</chakra.form>
	</VStack>
);

export default SelectHealthIssueContent;
