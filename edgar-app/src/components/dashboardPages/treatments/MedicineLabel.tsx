import { HStack, Skeleton, Text } from '@chakra-ui/react';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

const MedicineLabel = ({ medicineId }: { medicineId: string }) => {
	const { data: medicineInfo, isLoading } = useGetMedicineByIdQuery(medicineId);

	return (
		<Skeleton isLoaded={!isLoading}>
			<HStack bg="blue.100" borderRadius="4px" p="4px">
				<Text size="sm">{medicineInfo?.name}</Text>
			</HStack>
		</Skeleton>
	);
};

export default MedicineLabel;
