import { HStack, Icon, Input, Text, VStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import MedicineCardDays from 'components/dashboardPages/medical/modal/forms/medical/medicine/MedicineCardDays';
import MedicineCardPeriods from 'components/dashboardPages/medical/modal/forms/medical/medicine/MedicineCardPeriods';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';
import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

import CrossIcon from 'assets/icons/CrossIcon';

import displayMedicineUsageUnit from 'utils/app/dashboard/medical/displayMedicineUsageUnit';

const MedicineCard = ({
	medicine,
	control,
}: {
	medicine: PatientMedicineType;
	control: Control<PatientMedicalAntecedentType>;
}): JSX.Element => {
	const { data: medicineInfo } = useGetMedicineByIdQuery(medicine.medicineId);

	if (!medicineInfo) return <></>;

	return (
		<VStack
			align="start"
			p="8px 16px"
			borderRadius="8px"
			bg="blue.50"
			border="2px solid"
			borderColor="blue.200"
			id={`edgar-onboardingMedicalPage-medicineCard-${medicine.medicineId}-card`}
		>
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
						name="medicines"
						rules={{ validate: (value) => value.every((item) => item.quantity !== 0) }}
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
											quantity:
												parseInt(e.target.value, 10) > 99 ? 99 : parseInt(e.target.value, 10),
										},
									);
									onChange(medicineArray);
								}}
							/>
						)}
					/>
					<Text size="sm">{displayMedicineUsageUnit(medicineInfo.dosageForm)}</Text>
				</HStack>
			</VStack>
			<VStack spacing="4px" w="100%" maxW="200px" align="start">
				<MedicineCardDays medicine={medicine} control={control} />
				<MedicineCardPeriods medicine={medicine} control={control} />
			</VStack>
		</VStack>
	);
};

export default MedicineCard;
