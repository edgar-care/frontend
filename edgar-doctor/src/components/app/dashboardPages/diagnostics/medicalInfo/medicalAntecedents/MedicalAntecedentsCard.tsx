import { HStack, Icon, Text, useDisclosure } from '@chakra-ui/react';

import MedicalAntecedentsInfoDrawer from 'components/app/dashboardPages/diagnostics/medicalInfo/medicalAntecedents/MedicalAntecedentsInfoDrawer';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

import TreatmentIcon from 'assets/icons/TreatmentIcon';

const MedicalAntecedentsCard = ({
	medicalAntecedent,
}: {
	medicalAntecedent: PatientMedicalAntecedentType;
}): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<HStack
				p="8px 16px"
				spacing="12px"
				bg="blue.50"
				border="2px solid"
				borderColor="blue.200"
				borderRadius="8px"
			>
				<HStack>
					<Icon
						as={TreatmentIcon}
						w="16px"
						h="16px"
						color={medicalAntecedent.medicines.length > 0 ? 'blue.700' : 'grey.300'}
						cursor={medicalAntecedent.medicines.length > 0 ? 'pointer' : 'default'}
						onClick={medicalAntecedent.medicines.length > 0 ? onOpen : undefined}
					/>
					<Text size="boldMd">{medicalAntecedent.name}</Text>
				</HStack>
			</HStack>
			<MedicalAntecedentsInfoDrawer isOpen={isOpen} onClose={onClose} medicalAntecedent={medicalAntecedent} />
		</>
	);
};

export default MedicalAntecedentsCard;
