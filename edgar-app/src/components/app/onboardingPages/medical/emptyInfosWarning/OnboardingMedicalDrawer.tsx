import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	VStack,
} from '@chakra-ui/react';

const OnboardingMedicalDrawer = ({
	body,
	isOpen,
	onClose,
	onClick,
}: {
	body: JSX.Element;
	isOpen: boolean;
	onClose: () => void;
	onClick: () => void;
}): JSX.Element => (
	<Drawer isOpen={isOpen} onClose={onClose} size="md" placement="bottom">
		<DrawerOverlay />
		<DrawerContent borderRadius="16px 16px 0px 0px" gap="16px">
			<DrawerHeader id="edgar-onboardingMedicalPage-confirmationDrawerTitle-text">Vous êtes sûr ?</DrawerHeader>
			<DrawerCloseButton id="edgar-onboardingMedicalPage-confirmationDrawerClose-button" />
			<DrawerBody>{body}</DrawerBody>
			<DrawerFooter>
				<VStack w="100%">
					<Button
						w="100%"
						onClick={onClick}
						id="edgar-onboardingMedicalPage-confirmationDrawerConfirm-button"
					>
						Tout est bon !
					</Button>
					<Button
						w="100%"
						variant="secondary"
						onClick={onClose}
						id="edgar-onboardingMedicalPage-confirmationDrawerCancel-button"
					>
						J'ai oublié des informations
					</Button>
				</VStack>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
);

export default OnboardingMedicalDrawer;
