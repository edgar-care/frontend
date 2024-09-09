import { Box, HStack, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import PatientAddPrescriptionQSPInputs from 'components/app/dashboardPages/patients/subViews/prescriptions/modals/PatientAddPrescriptionQSPInputs';
import PatientAddPrescriptionPeriodInputs from 'components/app/dashboardPages/patients/subViews/prescriptions/modals/PatientAddPrescriptionPeriodInputs';
import PatientAddPrescriptionCommentInputs from 'components/app/dashboardPages/patients/subViews/prescriptions/modals/PatientAddPrescriptionCommentInputs';
import PatientAddPrescriptionButton from 'components/app/dashboardPages/patients/subViews/prescriptions/modals/PatientAddPrescriptionButton';

import type { UploadPatientPrescriptionDTO } from 'store/types/prescriptions.type';

import type { MedicineType } from 'types/app/dashboard/diagnostics/MedicineType';
import type { PatientPrescriptionMedicineType } from 'types/app/dashboard/patients/prescriptions/PatientPrescriptionMedicineType';

import DownChevronBoldIcon from 'assets/icons/Chevron/bold/DownChevronBoldIcon';
import UpChevronBoldIcon from 'assets/icons/Chevron/bold/UpChevronBoldIcon';
import TrashIcon from 'assets/icons/TrashIcon';

const PatientAddPrescriptionCard = ({
	prescriptionMedicine,
	medicine,
	control,
}: {
	prescriptionMedicine: PatientPrescriptionMedicineType;
	medicine: MedicineType;
	control: Control<UploadPatientPrescriptionDTO>;
}): JSX.Element => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<VStack
			w="100%"
			borderRadius="16px"
			border="2px solid"
			borderColor="blue.200"
			p="8px 16px"
			pl={isOpen ? '16px' : '8px'}
			bg="white"
			align="start"
			spacing="0px"
		>
			<HStack w="100%" justify="space-between">
				<VStack align="start" w="100%">
					<VStack
						pl={isOpen ? '0px' : '8px'}
						spacing="0px"
						w="100%"
						align="start"
						cursor="pointer"
						onClick={onToggle}
					>
						<Text size="boldLg">{medicine.name}</Text>
						{!isOpen && (
							<Text size="sm">
								{prescriptionMedicine.periods.length > 0
									? prescriptionMedicine.periods.length
									: 'Aucune'}{' '}
								période
								{prescriptionMedicine.periods.length > 1 && 's'} renseignée
								{prescriptionMedicine.periods.length > 1 && 's'}
							</Text>
						)}
					</VStack>
					{!isOpen && (
						<Controller
							control={control}
							render={({ field: { value, onChange } }) => (
								<PatientAddPrescriptionButton
									icon={TrashIcon}
									variant="RED"
									onClick={() =>
										onChange(value.filter((v) => v.medicineId !== prescriptionMedicine.medicineId))
									}
								>
									Supprimer le médicament
								</PatientAddPrescriptionButton>
							)}
							name="medicines"
						/>
					)}
				</VStack>
				<Icon
					as={isOpen ? UpChevronBoldIcon : DownChevronBoldIcon}
					w="16px"
					h="auto"
					cursor="pointer"
					onClick={onToggle}
				/>
			</HStack>
			{isOpen && (
				<VStack w="100%" spacing="8px" align="start">
					<PatientAddPrescriptionQSPInputs prescriptionMedicine={prescriptionMedicine} control={control} />
					<Box as="span" w="100%" h="2px" bg="blue.200" />
					{prescriptionMedicine.periods.map((_, index) => (
						<VStack w="100%" align="start" spacing="12px" key={index}>
							<PatientAddPrescriptionPeriodInputs
								prescriptionMedicine={prescriptionMedicine}
								periodIndex={index}
								control={control}
							/>
							<Box as="span" w="100%" h="2px" bg="blue.200" />
						</VStack>
					))}
					<PatientAddPrescriptionCommentInputs
						prescriptionMedicine={prescriptionMedicine}
						control={control}
					/>
				</VStack>
			)}
		</VStack>
	);
};

export default PatientAddPrescriptionCard;
