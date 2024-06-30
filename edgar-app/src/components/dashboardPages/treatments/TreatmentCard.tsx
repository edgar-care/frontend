import { HStack, Skeleton, Text } from '@chakra-ui/react';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

const TreatmentCard = ({ treatment }: { treatment: PatientMedicineType }) => {
	const { data: medicineInfo, isLoading } = useGetMedicineByIdQuery(treatment.medicineId);
	return (
		<Skeleton isLoaded={!isLoading}>
			<HStack bg="blue.100" borderRadius="4px" p="2px">
				<Text size="sm">{medicineInfo?.name}</Text>
			</HStack>
		</Skeleton>
	);
};

export default TreatmentCard;
