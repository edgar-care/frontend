import { Button, HStack, Icon, Skeleton, Text, useToast, VStack } from '@chakra-ui/react';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/dashboard/devices/DeviceType';

import CalendarIcon from 'assets/icons/CalendarIcon';
import PinIcon from 'assets/icons/PinIcon';

import deviceIllustration from 'utils/app/dashboard/devices/deviceIllustration';

const SettingsDeviceInfoPage = (
	deviceInfo: DeviceType | undefined,
	onNext: () => void,
	triggerRemove: (deviceId: string) => any,
): SettingsPageType => {
	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = () => {
		if (!deviceInfo?.id)
			toast({
				title: 'Une erreur est survenue',
				status: 'error',
			});
		else
			triggerRemove(deviceInfo.id)
				.unwrap()
				.then(() => {
					toast({
						title: 'L’appareil a bien été déconnecté',
						status: 'success',
					});
					onNext();
				})
				.catch(() => {
					toast({
						title: 'Une erreur est survenue',
						status: 'error',
					});
				});
	};

	return {
		headerTitle: deviceInfo?.browserType || '',
		headerSubtitle: 'Connecté à votre compte edgar.',
		headerIcon: deviceIllustration[deviceInfo?.deviceType || 'Other'],
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		bodyContent: (
			<VStack w="100%" align="start">
				<Skeleton isLoaded={deviceInfo !== undefined}>
					{deviceInfo && (
						<HStack spacing="12px">
							<Icon as={CalendarIcon} w="16px" h="16px" />
							<Text>
								Dernière connexion le:{' '}
								{new Date(deviceInfo.lastConnectedTime).toLocaleDateString('fr-FR')} à{' '}
								{new Date(deviceInfo.lastConnectedTime).toLocaleTimeString('fr-FR')}
							</Text>
						</HStack>
					)}
				</Skeleton>
				<Skeleton isLoaded={deviceInfo !== undefined && deviceInfo.city !== '' && deviceInfo.country !== ''}>
					{deviceInfo && (
						<HStack spacing="12px">
							<Icon as={PinIcon} w="16px" h="16px" />
							<Text>
								{deviceInfo.city}, {deviceInfo.region && `${deviceInfo.region},`} {deviceInfo.country}
							</Text>
						</HStack>
					)}
				</Skeleton>
			</VStack>
		),
		footerPrimaryButton: (
			<Button w="100%" variant="deleteBordered" onClick={() => onSubmit()}>
				Déconnecter l’appareil
			</Button>
		),
	};
};

export default SettingsDeviceInfoPage;
