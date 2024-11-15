import { type Control, Controller } from 'react-hook-form';
import { HStack, Icon, Input, Text, VStack } from '@chakra-ui/react';

import TreatmentCardDays from 'components/dashboardPages/treatments/TreatmentCardDays';
import TreatmentCardPeriods from 'components/dashboardPages/treatments/TreatmentCardPeriods';

import { type TreatmentType, type TreatmentMedicinesType } from 'types/dashboard/treatments/TreatmentType';

import CrossIcon from 'assets/icons/CrossIcon';

import displayMedicineUsageUnit from 'utils/app/dashboard/medical/displayMedicineUsageUnit';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

const TreatmentCard = ({
	medicine,
	control,
}: {
	medicine: TreatmentMedicinesType;
	control: Control<TreatmentType>;
}): JSX.Element => {
	const { data: medicineInfo } = useGetMedicineByIdQuery(medicine.medicineId);

	if (!medicineInfo) return <></>;

	return (
		<VStack align="start" p="8px 16px" borderRadius="8px" bg="blue.50" border="2px solid" borderColor="blue.200">
			<VStack w="100%" align="start" spacing="0px">
				<HStack w="100%" justify="space-between">
					<Text size="boldLg">{medicineInfo.name}</Text>
					<Controller
						control={control}
						name="treatments"
						render={({ field: { value, onChange } }) => (
							<Icon
								as={CrossIcon}
								w="16px"
								h="16px"
								cursor="pointer"
								onClick={() => {
									const medicineArray = [...value];

									medicineArray.splice(
										value.findIndex((item) => item.medicineId === medicine.medicineId),
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
						name="treatments"
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
										value.findIndex((item) => item.medicineId === medicine.medicineId),
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
					<Text size="md">{displayMedicineUsageUnit(medicineInfo.dosageForm)}</Text>
				</HStack>
			</VStack>
			<VStack spacing="4px" w="100%" maxW="200px" align="start">
				<TreatmentCardDays medicine={medicine} control={control} />
				<TreatmentCardPeriods medicine={medicine} control={control} />
			</VStack>
		</VStack>
	);
};

export default TreatmentCard;
