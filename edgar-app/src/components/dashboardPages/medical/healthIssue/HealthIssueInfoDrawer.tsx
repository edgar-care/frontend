import { Button, HStack, type SlideDirection, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

import CustomDrawer from 'components/modals/CustomDrawer';
import ReadonlyMedicineCard from 'components/dashboardPages/medical/medicine/ReadonlyMedicineCard';

import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';

const HealthIssueInfoDrawer = ({
	isOpen,
	onClose,
	healthIssue,
}: {
	isOpen: boolean;
	onClose: () => void;
	healthIssue: HealthIssuesType;
}): JSX.Element => {
	const placement = useBreakpointValue<SlideDirection>({ base: 'bottom', smd: 'right' }) || 'right';

	return (
		<CustomDrawer
			isOpen={isOpen}
			onClose={onClose}
			placement={placement}
			hasReturnButton={false}
			headerTitle={healthIssue.name}
			headerIcon={AddHealthIssueIllustration}
			maxW="300px"
			bodyContent={
				<VStack w="100%" align="start" spacing="12px">
					<VStack w="100%" align="start" spacing="4px">
						<Text size="lg" id="edgar-onboardingMedicalPage-healthIssueDrawer-stillRelevant-label">
							Votre sujet de santé est-il toujours en cours ?
						</Text>
						<HStack spacing="16px">
							<Button
								variant={healthIssue.stillRelevant ? 'primary' : 'secondary'}
								id="edgar-onboardingMedicalPage-healthIssueDrawer-stillRelevantYes-button"
							>
								Oui
							</Button>{' '}
							<Button
								variant={healthIssue.stillRelevant ? 'secondary' : 'primary'}
								id="edgar-onboardingMedicalPage-healthIssueDrawer-stillRelevantNo-button"
							>
								Non
							</Button>
						</HStack>
					</VStack>
					<VStack w="100%" align="start" spacing="4px">
						<Text size="lg" id="edgar-onboardingMedicalPage-healthIssueDrawer-medicinesName-label">
							Le nom de vos médicaments
						</Text>
						<VStack w="100%" align="start">
							{healthIssue.medicines.map((medicine) => (
								<ReadonlyMedicineCard medicine={medicine} key={medicine.medicineId} />
							))}
						</VStack>
					</VStack>
				</VStack>
			}
		/>
	);
};

export default HealthIssueInfoDrawer;
