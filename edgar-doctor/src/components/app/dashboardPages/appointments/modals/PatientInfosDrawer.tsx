import {
	Drawer,
	DrawerContent,
	DrawerBody,
	DrawerOverlay,
	DrawerCloseButton,
	Text,
	VStack,
	Icon,
} from '@chakra-ui/react';

import PersonalInfosCard from 'components/app/dashboardPages/appointments/PersonalInfosCard';

import PatientInfosIllustration from 'assets/illustrations/PatientInfosIllustration';

import { PatientType } from 'types/app/dashboard/patients/PatientType';

const PatientInfosDrawer = ({
	isOpen,
	onClose,
	patientInfos,
}: {
	isOpen: boolean;
	onClose: () => void;
	patientInfos: PatientType;
}): JSX.Element => (
	<Drawer isOpen={isOpen} onClose={onClose} size="xl" placement="right">
		<DrawerOverlay />
		<DrawerContent borderRadius="32px" maxW="512px">
			<DrawerCloseButton />
			<DrawerBody p="24px">
				<VStack spacing="32px" w="100%">
					<VStack w="100%" spacing="8px">
						<Icon as={PatientInfosIllustration} w="48px" h="48px" />
						<VStack>
							<Text size="xl" textAlign="center">
								{patientInfos.medicalInfos.firstname} {patientInfos.medicalInfos.name.toUpperCase()}
							</Text>
						</VStack>
					</VStack>
					<PersonalInfosCard patientInfos={patientInfos} />
				</VStack>
			</DrawerBody>
		</DrawerContent>
	</Drawer>
);

export default PatientInfosDrawer;
