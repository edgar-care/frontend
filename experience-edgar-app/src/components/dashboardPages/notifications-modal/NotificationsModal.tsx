import {
	Button,
	HStack,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';

import NotificationsIllustration from 'assets/illustrations/NotificationsIllustration';

import { VAPIDPUBLICKEY } from 'config/constants';

const NotificationsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const toast = useToast({ duration: 3000, isClosable: true });

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
		<Modal isOpen={isOpen} onClose={onClose} size="2xl">
			<ModalOverlay />
			<ModalContent>
				<ModalBody p="24px 24px 16px 24px">
					<VStack spacing="32px" w="100%">
						<VStack w="100%">
							<Icon as={NotificationsIllustration} w="48px" h="48px" />
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
				</ModalBody>
				<ModalFooter p="16px 24px 24px 24px">
					<HStack w="100%">
						<Button variant="secondary" w="100%" onClick={onClose} id="edgar-notificationsModal-no-button">
							Je ne les active pas
						</Button>
						<Button
							w="100%"
							variant="validate"
							onClick={enableNotifications}
							id="edgar-notificationsModal-yes-button"
						>
							J’active les notifications
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default NotificationsModal;
