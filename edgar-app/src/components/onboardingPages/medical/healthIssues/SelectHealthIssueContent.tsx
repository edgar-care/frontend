import { VStack, chakra } from '@chakra-ui/react';
import type { Control, FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

import SelectHealthIssueNameInput from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueNameInput';
import SelectHealthIssueStillRelevantInput from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueStillRelevantInput';
import SelectHealthIssueMedicineInput from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueMedicineInput';

import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

const SelectHealthIssueContent = ({
	onSubmit,
	register,
	control,
	errors,
	watch,
}: {
	onSubmit: () => void;
	register: UseFormRegister<HealthIssuesType>;
	control: Control<HealthIssuesType>;
	errors: FieldErrors<HealthIssuesType>;
	watch: UseFormWatch<HealthIssuesType>;
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
