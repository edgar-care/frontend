import { type Control, Controller } from 'react-hook-form';
import { HStack, Icon, Input, Text, VStack } from '@chakra-ui/react';

import MedicineCardDays from 'components/dashboardPages/medical/medicine/MedicineCardDays';
import MedicineCardPeriods from 'components/dashboardPages/medical/medicine/MedicineCardPeriods';

import { type HealthIssuesMedicinesType, type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';
import { type MedicineType } from 'types/dashboard/medical/MedicineType';

import CrossIcon from 'assets/icons/CrossIcon';

import displayMedicineUnit from 'utils/app/dashboard/medical/displayMedicineUnit';

const MedicineCard = ({
	medicine,
	control,
}: {
	medicine: HealthIssuesMedicinesType;
	control: Control<HealthIssuesType>;
}): JSX.Element => {
	const medicineInfo: MedicineType = {
		id: medicine.id,
		name: 'Medicament',
		unit: 'TABLET',
	};

	return (
		<VStack align="start" p="8px 16px" borderRadius="8px" bg="blue.50" border="2px solid" borderColor="blue.200">
			<VStack w="100%" align="start" spacing="0px">
				<HStack w="100%" justify="space-between">
					<Text size="boldLg">{medicineInfo.name}</Text>
					<Controller
						control={control}
						name="medicines"
						render={({ field: { value, onChange } }) => (
							<Icon
								as={CrossIcon}
								w="16px"
								h="16px"
								cursor="pointer"
								onClick={() => {
									const medicineArray = [...value];

									medicineArray.splice(
										value.findIndex((item) => item.id === medicine.id),
										1,
									);
									onChange(medicineArray);
								}}
							/>
						)}
					/>
				</HStack>
				<HStack spacing="4px">
					<Controller
						control={control}
						name="medicines"
						rules={{ validate: (value) => value.every((item) => item.quantity !== '') }}
						render={({ field: { value, onChange } }) => (
							<Input
								placeholder="1"
								w="30px"
								variant="noStyle"
								borderBottom="2px solid"
								borderColor="blue.500"
								p="8px 4px"
								type="number"
								value={medicine.quantity}
								onChange={(e) => {
									const medicineArray = [...value];

									medicineArray.splice(
										value.findIndex((item) => item.id === medicine.id),
										1,
										{
											...medicine,
											quantity: parseInt(e.target.value, 10) > 99 ? '99' : e.target.value,
										},
									);
									onChange(medicineArray);
								}}
							/>
						)}
					/>
					<Text size="sm">{displayMedicineUnit(medicineInfo.unit)}</Text>
				</HStack>
			</VStack>
			<VStack spacing="4px" w="100%">
				<MedicineCardDays medicine={medicine} control={control} />
				<MedicineCardPeriods medicine={medicine} control={control} />
			</VStack>
		</VStack>
	);
};

export default MedicineCard;
