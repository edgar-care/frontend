import { Input, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import PatientAddPrescriptionButton from 'components/app/dashboardPages/patients/subViews/prescriptions/modals/PatientAddPrescriptionButton';

import type { UploadPatientPrescriptionDTO } from 'store/types/prescriptions.type';

import type { PatientPrescriptionMedicineType } from 'types/app/dashboard/patients/prescriptions/PatientPrescriptionMedicineType';

import PlusIcon from 'assets/icons/PlusIcon';
import TrashIcon from 'assets/icons/TrashIcon';

const PatientAddPrescriptionCommentInputs = ({
	prescriptionMedicine,
	control,
}: {
	prescriptionMedicine: PatientPrescriptionMedicineType;
	control: Control<UploadPatientPrescriptionDTO>;
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
						onChange={(e) =>
							onChange(
								value.map((v) =>
									v.medicineId !== prescriptionMedicine.medicineId
										? v
										: { ...v, comment: e.target.value },
								),
							)
						}
					/>
					<Stack direction={{ base: 'column', sm: 'row' }}>
						<PatientAddPrescriptionButton
							icon={PlusIcon}
							variant="BLUE"
							onClick={() =>
								onChange(
									value.map((v) =>
										v.medicineId !== prescriptionMedicine.medicineId
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
						</PatientAddPrescriptionButton>
						{!isMobile && <Text color="gray.500">-</Text>}
						<PatientAddPrescriptionButton
							icon={TrashIcon}
							variant="RED"
							onClick={() =>
								onChange(value.filter((v) => v.medicineId !== prescriptionMedicine.medicineId))
							}
						>
							Supprimer le médicament
						</PatientAddPrescriptionButton>
					</Stack>
				</VStack>
			)}
			name="medicines"
		/>
	);
};

export default PatientAddPrescriptionCommentInputs;
