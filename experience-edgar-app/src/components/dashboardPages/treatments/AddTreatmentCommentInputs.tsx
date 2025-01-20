import { Input, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import AddTreatmentButton from 'components/dashboardPages/treatments/AddTreatmentButton';

import type { TreatmentMedicinesType, TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import PlusIcon from 'assets/icons/PlusIcon';
import TrashIcon from 'assets/icons/TrashIcon';

const AddTreatmentCommentInputs = ({
	treatmentMedicine,
	control,
}: {
	treatmentMedicine: TreatmentMedicinesType;
	control: Control<TreatmentType>;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Controller
			control={control}
			rules={{ required: true }}
			render={({ field: { value, onChange } }) => (
				<VStack align="start" w="100%">
					<Input
						placeholder="Commentaire"
						w="100%"
						value={value.find((v) => v.medicineId === treatmentMedicine.medicineId)?.comment}
						onChange={(e) =>
							onChange(
								value.map((v) =>
									v.medicineId !== treatmentMedicine.medicineId
										? v
										: { ...v, comment: e.target.value },
								),
							)
						}
					/>
					<Stack direction={{ base: 'column', sm: 'row' }}>
						<AddTreatmentButton
							icon={PlusIcon}
							variant="BLUE"
							onClick={() =>
								onChange(
									value.map((v) =>
										v.medicineId !== treatmentMedicine.medicineId
											? v
											: {
													...v,
													periods: [
														...v.periods,
														{
															quantity: 1,
															frequency: 1,
															frequencyRatio: 1,
															frequencyUnit: 'JOUR',
														},
													],
												},
									),
								)
							}
						>
							Ajouter une période
						</AddTreatmentButton>
						{!isMobile && <Text color="gray.500">-</Text>}
						<AddTreatmentButton
							icon={TrashIcon}
							variant="RED"
							onClick={() => onChange(value.filter((v) => v.medicineId !== treatmentMedicine.medicineId))}
						>
							Supprimer le médicament
						</AddTreatmentButton>
					</Stack>
				</VStack>
			)}
			name="medicines"
		/>
	);
};

export default AddTreatmentCommentInputs;
