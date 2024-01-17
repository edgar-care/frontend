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

import MedicalIllustration from 'assets/illustrations/MedicalIllustration';

import { VAPIDPUBLICKEY } from 'config/constants';

const NotificationsDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const toast = useToast({ duration: 3000, isClosable: true });

	const isMobile = useBreakpointValue({ base: true, sm: false });

	const enableNotifications = () => {
		if (!window.Notification) {
			console.log('Browser does not support notifications. Please use a different browser.');
			onClose();
			toast({ title: 'Votre navigateur ne supporte pas les notifications.', status: 'error' });
		} else
			window.Notification.requestPermission()
				.then(async (permission) => {
					if (permission === 'granted') {
						const sw = await window.navigator.serviceWorker.register('/push-notifications-sw.js', {
							scope: '/dashboard',
						});
						const subscription = await sw.pushManager.getSubscription().then(async (sub) => {
							if (sub) return sub;
							return sw.pushManager.subscribe({
								userVisibleOnly: true,
								applicationServerKey: VAPIDPUBLICKEY,
							});
						});

						// TODO: connect to backend and save subscription
						console.log(subscription.toJSON());
						onClose();
						toast({ title: 'Notifications activées', status: 'success' });
					}
				})
				.catch((error) => {
					console.log('Error occurred while enabling notifications ', error);
					onClose();
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
	};

	return (
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px" maxH="700px">
				<DrawerBody p="24px 24px 16px 24px">
					<VStack spacing="32px" w="100%">
						<VStack w="100%">
							<Icon as={MedicalIllustration} w="48px" h="48px" />
							<VStack spacing="16px" w="100%">
								<Text size="xl" textAlign="center">
									Activez les notifications
								</Text>
								<Text textAlign="center" maxW="350px" color="grey.500">
									Activez les notifications pour recevoir des rappels et des informations importantes
									sur votre santé.
								</Text>
							</VStack>
						</VStack>
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px 24px 24px 24px">
					{isMobile ? (
						<VStack w="100%">
							<Button w="100%" variant="validate" onClick={enableNotifications}>
								J’active les notifications
							</Button>
							<Button variant="secondary" w="100%" onClick={onClose}>
								Je ne les active pas
							</Button>
						</VStack>
					) : (
						<HStack w="100%">
							<Button variant="secondary" w="100%" onClick={onClose}>
								Je ne les active pas
							</Button>
							<Button w="100%" variant="validate" onClick={enableNotifications}>
								J’active les notifications
							</Button>
						</HStack>
					)}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default NotificationsDrawer;
