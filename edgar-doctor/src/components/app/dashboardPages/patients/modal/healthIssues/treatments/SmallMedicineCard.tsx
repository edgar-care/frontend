import { Text, VStack } from '@chakra-ui/react';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import type { TreatmentMedicinesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

const SmallMedicineCard = ({ medicine }: { medicine: TreatmentMedicinesType }): JSX.Element => {
	const { data: medicineInfo } = useGetMedicineByIdQuery(medicine.medicineId);

	if (!medicineInfo) return <></>;

	return (
		<VStack p="4px 8px" borderRadius="4px" bg="blue.50" border="1px solid" borderColor="blue.200">
			<Text size="sm">{medicineInfo.name}</Text>
		</VStack>
	);
};

export default SmallMedicineCard;
