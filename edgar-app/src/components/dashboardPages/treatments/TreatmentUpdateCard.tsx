import { type Control, Controller } from 'react-hook-form';
import { HStack, Icon, Input, Text, VStack } from '@chakra-ui/react';

import TreatmentUpdateCardDays from 'components/dashboardPages/treatments/TreatmentUpdateCardDays';
import TreatmentUpdateCardPeriods from 'components/dashboardPages/treatments/TreatmentUpdateCardPeriods';

import displayMedicineUnit from 'utils/app/dashboard/medical/displayMedicineUnit';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

import CrossIcon from 'assets/icons/CrossIcon';

const TreatmentUpdateCard = ({
	medicine,
	control,
}: {
	medicine: PatientMedicineType;
	control: Control<PatientMedicalAntecedentType>;
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
					<Text size="sm">{displayMedicineUnit(medicineInfo.dosageForm)}</Text>
				</HStack>
			</VStack>
			<VStack spacing="4px" w="100%" maxW="200px" align="start">
				<TreatmentUpdateCardDays medicine={medicine} control={control} />
				<TreatmentUpdateCardPeriods medicine={medicine} control={control} />
			</VStack>
		</VStack>
	);
};

export default TreatmentUpdateCard;
