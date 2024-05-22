import { HStack, Icon, Text, useDisclosure } from '@chakra-ui/react';

import MedicalAntecedentsInfoDrawer from 'components/app/dashboardPages/patients/modal/forms/medicalAntecedents/MedicalAntecedentsInfoDrawer';

import CrossIcon from 'assets/icons/CrossIcon';
import TreatmentIcon from 'assets/icons/TreatmentIcon';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

const MedicalAntecedentsCard = ({
	medicalAntecedent,
	onClick,
}: {
	medicalAntecedent: PatientMedicalAntecedentType;
	onClick: () => void;
}): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	console.log(medicalAntecedent);
	return (
		<>
			<HStack
				p="8px 16px"
				spacing="12px"
				bg="blue.50"
				border="2px solid"
				borderColor="blue.200"
				borderRadius="8px"
				id={`edgar-onboardingMedicalPage-healthIssueCard-${medicalAntecedent.name}-container`}
			>
				<HStack>
					<Icon
						as={TreatmentIcon}
						w="16px"
						h="16px"
						color={medicalAntecedent.medicines.length > 0 ? 'blue.700' : 'grey.300'}
						cursor={medicalAntecedent.medicines.length > 0 ? 'pointer' : 'default'}
						onClick={medicalAntecedent.medicines.length > 0 ? onOpen : undefined}
						id={`edgar-onboardingMedicalPage-healthIssueCard-moreInfo-${medicalAntecedent.name}-icon`}
					/>
					<Text size="boldLg">{medicalAntecedent.name}</Text>
				</HStack>
				<Icon
					as={CrossIcon}
					w="12spx"
					h="12px"
					cursor="pointer"
					onClick={onClick}
					id={`edgar-onboardingMedicalPage-healthIssueCard-close-${medicalAntecedent.name}-icon`}
				/>
			</HStack>
			<MedicalAntecedentsInfoDrawer isOpen={isOpen} onClose={onClose} medicalAntecedent={medicalAntecedent} />
		</>
	);
};

export default MedicalAntecedentsCard;
