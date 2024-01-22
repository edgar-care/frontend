import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Icon,
	Text,
	VStack,
} from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import OpenSlotModalContent from 'components/app/dashboardPages/agenda/modals/OpenSlotModalContent';

import { type OpenSlotType } from 'types/app/dashboard/agenda/OpenSlotType';

import CheckCircleIllustration from 'assets/illustrations/CheckCircleIllustration';

const OpenSlotDrawer = ({
	isOpen,
	onClose,
	register,
	errors,
	onSubmit,
	availableHours,
}: {
	isOpen: boolean;
	onClose: () => void;
	register: UseFormRegister<OpenSlotType>;
	errors: FieldErrors<OpenSlotType>;
	onSubmit: () => void;
	availableHours: string[];
}): JSX.Element => (
	<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
		<DrawerOverlay />
		<DrawerContent borderRadius="16px 16px 0px 0px" maxH="700px">
			<DrawerBody p="24px 24px 16px 24px">
				<VStack spacing="32px" w="100%">
					<VStack w="100%">
						<Icon as={CheckCircleIllustration} w="48px" h="48px" />
						<VStack spacing="16px" w="100%">
							<Text size="xl" textAlign="center">
								Ouvrez un créneau
							</Text>
						</VStack>
					</VStack>
					<OpenSlotModalContent register={register} errors={errors} availableHours={availableHours} />
				</VStack>
			</DrawerBody>
			<DrawerFooter p="16px 24px 24px 24px">
				<VStack w="100%">
					<Button w="100%" variant="validate" onClick={onSubmit} type="submit">
						Ouvrir le créneau
					</Button>
					<Button variant="secondary" w="100%" onClick={onClose}>
						Revenir en arrière
					</Button>
				</VStack>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
);

export default OpenSlotDrawer;
