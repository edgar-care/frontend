import { useState } from 'react';
import { Box, Button, Skeleton, useToast, VStack } from '@chakra-ui/react';

import DeviceCard from 'components/settingsModals/DeviceCard';

import { useGetConnectedDevicesQuery } from 'services/request/devices';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';
import { useAddTrustedDeviceMutation, useEnable2faWithMobileAppMutation } from 'services/request/2fa';

const SettingsAccount2FAEdgarEnablePage = (onPrevious: () => void, onNext: () => void): SettingsPageType => {
	const { data: devices, isLoading } = useGetConnectedDevicesQuery();
	const [triggerEnable2faWithMobileApp] = useEnable2faWithMobileAppMutation();
	const [triggerAddTrustedDevice] = useAddTrustedDeviceMutation();

	const [selectedDeviceId, setSelectedDeviceId] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = () => {
		triggerAddTrustedDevice(selectedDeviceId)
			.unwrap()
			.then(() => {
				triggerEnable2faWithMobileApp(selectedDeviceId)
					.unwrap()
					.then(() => {
						toast({
							title: 'Double authentification activée',
							status: 'success',
						});
						setSelectedDeviceId('');
						onNext();
					})
					.catch(() => {
						toast({
							title: "Erreur lors de l'activation de la double authentification",
							status: 'error',
						});
					});
			})
			.catch(() => {
				toast({
					title: "Erreur lors de l'activation de la double authentification",
					status: 'error',
				});
			});
	};

	return {
		headerTitle: 'Activer la double authentification avec edgar ?',
		headerSubtitle: 'Sélectionner un appareil ci-dessous, afin d’activer la double authentification sur celui-ci.',
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		bodyContent: (
			<VStack w="100%" p="8px" borderRadius="16px" border="2px solid" borderColor="blue.100">
				<Skeleton isLoaded={devices !== undefined && !isLoading} w="100%">
					{devices?.map((device, index) => (
						<>
							{index > 0 && <Box as="span" w="100%" h="2px" bg="blue.100" />}
							<DeviceCard
								device={device}
								hasChevronIcon
								onClick={() => setSelectedDeviceId((prev) => (prev === device.id ? '' : device.id))}
								isClicked={selectedDeviceId === device.id}
							/>
						</>
					))}
				</Skeleton>
			</VStack>
		),
		footerPrimaryButton: (
			<Button w="100%" onClick={onSubmit}>
				Activer l’authentification
			</Button>
		),
		footerSecondaryButton: (
			<Button w="100%" variant="secondary" onClick={onPrevious}>
				Annuler
			</Button>
		),
	};
};

export default SettingsAccount2FAEdgarEnablePage;
