import { Box, HStack, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import AddTreatmentPeriodInputs from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/AddTreatmentPeriodInputs';
import AddTreatmentCommentInputs from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/AddTreatmentCommentInputs';
import AddTreatmentButton from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/AddTreatmentButton';

import type { TreatmentMedicinesType, TreatmentType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';
import type { MedicineType } from 'types/app/dashboard/diagnostics/MedicineType';

import UpChevronBoldIcon from 'assets/icons/Chevron/bold/UpChevronBoldIcon';
import DownChevronBoldIcon from 'assets/icons/Chevron/bold/DownChevronBoldIcon';
import TrashIcon from 'assets/icons/TrashIcon';

const AddTreatmentCard = ({
	treatmentMedicine,
	medicine,
	control,
}: {
	treatmentMedicine: TreatmentMedicinesType;
	medicine: MedicineType;
	control: Control<TreatmentType>;
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
								{treatmentMedicine.periods.length > 0 ? treatmentMedicine.periods.length : 'Aucune'}{' '}
								période
								{treatmentMedicine.periods.length > 1 && 's'} renseignée
								{treatmentMedicine.periods.length > 1 && 's'}
							</Text>
						)}
					</VStack>
					{!isOpen && (
						<Controller
							control={control}
							render={({ field: { value, onChange } }) => (
								<AddTreatmentButton
									icon={TrashIcon}
									variant="RED"
									onClick={() =>
										onChange(value.filter((v) => v.medicineId !== treatmentMedicine.medicineId))
									}
								>
									Supprimer le médicament
								</AddTreatmentButton>
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
					<Box as="span" w="100%" h="2px" bg="blue.200" />
					{treatmentMedicine.periods.map((_, index) => (
						<VStack w="100%" align="start" spacing="12px" key={index}>
							<AddTreatmentPeriodInputs
								treatmentMedicine={treatmentMedicine}
								periodIndex={index}
								control={control}
							/>
							<Box as="span" w="100%" h="2px" bg="blue.200" />
						</VStack>
					))}
					<AddTreatmentCommentInputs treatmentMedicine={treatmentMedicine} control={control} />
				</VStack>
			)}
		</VStack>
	);
};

export default AddTreatmentCard;
