import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	HStack,
	Icon,
	Text,
	useBreakpointValue,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import cancelAppointment from 'utils/api/dashboard/appointments/cancelAppointment';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

const CancelAppointmentDrawer = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const router = useRouter();

	const toast = useToast({ duration: 3000, isClosable: true });

	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px">
				<DrawerBody p="16px">
					<VStack>
						<Icon as={DeleteCrossIllustration} w="48px" h="48px" />
						<VStack>
							<Text size="xl">Êtes-vous sûr ?</Text>
							<Text textAlign="center" maxW="350px" color="grey.500">
								Si vous annulez ce rendez-vous, vous ne pourrez plus y assister, ni le reprendre par la
								suite.
							</Text>
						</VStack>
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px">
					{isMobile ? (
						<VStack w="100%">
							<Button
								size="customMd"
								variant="delete"
								w="100%"
								onClick={() =>
									cancelAppointment(appointmentId, router).then((res) => {
										toast({ title: res.title, status: res.status });
									})
								}
							>
								Oui, je suis sûr
							</Button>
							<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
								Non, je veux revenir en arrière
							</Button>
						</VStack>
					) : (
						<HStack w="100%">
							<Button size="customSm" variant="secondary" w="100%" onClick={onClose}>
								Non, je veux revenir en arrière
							</Button>
							<Button
								size="customSm"
								variant="delete"
								w="100%"
								onClick={() =>
									cancelAppointment(appointmentId, router).then((res) => {
										toast({ title: res.title, status: res.status });
									})
								}
							>
								Oui, je suis sûr
							</Button>
						</HStack>
					)}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default CancelAppointmentDrawer;
