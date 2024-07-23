import { VStack, chakra } from '@chakra-ui/react';
import { UseFormRegister, UseFormWatch, FieldErrors, Control } from 'react-hook-form';

import AddTreatmentNameInput from 'components/dashboardPages/treatments/modal/AddTreatmentNameInput';
import AddTreatmentStillRelevantInput from 'components/dashboardPages/treatments/modal/AddTreatmentStillRelevantInput';
import AddTreatmentMedicineInput from 'components/dashboardPages/treatments/modal/AddTreatmentMedicineInput';

import { type TreatmentType } from 'types/dashboard/treatments/TreatmentType';

const AddTreatmentContent = ({
	onSubmit,
	register,
	control,
	errors,
	watch,
}: {
	onSubmit: () => void;
	register: UseFormRegister<TreatmentType>;
	control: Control<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
	watch: UseFormWatch<TreatmentType>;
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
						<AddTreatmentNameInput register={register} errors={errors} />
						<AddTreatmentStillRelevantInput control={control} errors={errors} />
						<AddTreatmentMedicineInput control={control} watch={watch} errors={errors} />
					</VStack>
				</VStack>
			</VStack>
		</chakra.form>
	</VStack>
);

export default AddTreatmentContent;
