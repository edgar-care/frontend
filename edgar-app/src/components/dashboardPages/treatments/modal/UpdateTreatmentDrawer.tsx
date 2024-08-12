import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	DrawerFooter,
	useBreakpointValue,
	VStack,
	Button,
	HStack,
	Icon,
	Text,
} from '@chakra-ui/react';

import UpdateTreatmentIllustration from 'assets/illustrations/UpdateTreatmentIllustration';
// import UpdateTreatmentContent from 'components/dashboardPages/treatments/modal/UpdateTreatmentContent';

import { type TreatmentType } from 'types/dashboard/treatments/TreatmentType';
import { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const UpdateTreatmentDrawer = ({
	isOpen,
	onClose,
	antecedent,
}: {
	isOpen: boolean;
	onClose: () => void;
	antecedent: PatientMedicalAntecedentType | undefined;
}) => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Drawer isOpen={isOpen} onClose={() => onClose()} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerBody p="24px 24px 16px 24px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={UpdateTreatmentIllustration} w="48px" h="48px" />
						<Text size="xl" textAlign="center">
							Modifiez un traitement
						</Text>
					</VStack>
					{/* <UpdateTreatmentContent /> */}
				</VStack>
			</DrawerBody>
			<DrawerFooter p="16px 24px 24px 24px">
				{isMobile ? (
					<VStack w="100%" spacing="12px">
						{/* <Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
							Ajouter
						</Button> */}
						<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
					</VStack>
				) : (
					<HStack w="100%" spacing="12px">
						<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
						{/* <Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
							Ajouter
						</Button> */}
					</HStack>
				)}
			</DrawerFooter>
			<DrawerContent borderRadius="12px"></DrawerContent>
		</Drawer>
	);
};

export default UpdateTreatmentDrawer;
