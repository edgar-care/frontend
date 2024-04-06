import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	HStack,
	Icon,
	Text,
	useBreakpointValue,
	VStack,
} from '@chakra-ui/react';

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
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<Drawer
			isOpen={isOpen}
			onClose={onClose}
			size={isMobile ? 'sm' : 'xs'}
			placement={isMobile ? 'bottom' : 'right'}
		>
			<DrawerOverlay />
			<DrawerContent borderRadius={isMobile ? '16px 16px 0px 0px' : '12px'} maxH={isMobile ? '700px' : '100%'}>
				<DrawerBody p="24px 24px 16px 24px">
					<VStack spacing="32px" w="100%">
						<VStack w="100%">
							<Icon as={AddHealthIssueIllustration} w="48px" h="48px" />
							<VStack spacing="16px" w="100%">
								<Text size="xl" textAlign="center">
									{healthIssue.name}
								</Text>
							</VStack>
						</VStack>
						<VStack w="100%" align="start" spacing="24px">
							<VStack w="100%" align="start">
								<Text size="boldLg">Votre sujet de santé est-il toujours en cours ?</Text>
								<HStack spacing="16px">
									<Button variant={healthIssue.stillRelevant ? 'primary' : 'secondary'}>Oui</Button>{' '}
									<Button variant={healthIssue.stillRelevant ? 'secondary' : 'primary'}>Non</Button>
								</HStack>
							</VStack>
							<VStack w="100%" align="start">
								<Text size="boldLg">Le nom de vos médicaments</Text>
								<VStack w="100%" align="start">
									{healthIssue.medicines.map((medicine) => (
										<ReadonlyMedicineCard medicine={medicine} key={medicine.medicineId} />
									))}
								</VStack>
							</VStack>
						</VStack>
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default HealthIssueInfoDrawer;
