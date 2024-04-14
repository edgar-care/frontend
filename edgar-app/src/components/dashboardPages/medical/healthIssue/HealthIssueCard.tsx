import { HStack, Icon, Text, useDisclosure } from '@chakra-ui/react';

import HealthIssueInfoDrawer from 'components/dashboardPages/medical/healthIssue/HealthIssueInfoDrawer';

import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

import CrossIcon from 'assets/icons/CrossIcon';
import TreatmentIcon from 'assets/icons/TreatmentIcon';

const HealthIssueCard = ({
	healthIssue,
	onClick,
}: {
	healthIssue: HealthIssuesType;
	onClick: () => void;
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
				id={`edgar-onboardingMedicalPage-healthIssueCard-${healthIssue.name}-container`}
			>
				<HStack>
					<Icon
						as={TreatmentIcon}
						w="16px"
						h="16px"
						color={healthIssue.medicines.length > 0 ? 'blue.700' : 'grey.300'}
						cursor={healthIssue.medicines.length > 0 ? 'pointer' : 'default'}
						onClick={healthIssue.medicines.length > 0 ? onOpen : undefined}
						id={`edgar-onboardingMedicalPage-healthIssueCard-moreInfo-${healthIssue.name}-icon`}
					/>
					<Text size="boldLg">{healthIssue.name}</Text>
				</HStack>
				<Icon
					as={CrossIcon}
					w="12spx"
					h="12px"
					cursor="pointer"
					onClick={onClick}
					id={`edgar-onboardingMedicalPage-healthIssueCard-close-${healthIssue.name}-icon`}
				/>
			</HStack>
			<HealthIssueInfoDrawer isOpen={isOpen} onClose={onClose} healthIssue={healthIssue} />
		</>
	);
};

export default HealthIssueCard;
