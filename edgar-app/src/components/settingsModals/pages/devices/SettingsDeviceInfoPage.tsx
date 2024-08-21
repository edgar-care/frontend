import { Button, HStack, Icon, Skeleton, Text, VStack } from '@chakra-ui/react';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/dashboard/devices/DeviceType';

import CalendarIcon from 'assets/icons/CalendarIcon';
import PinIcon from 'assets/icons/PinIcon';
import DevicePhoneIllustration from 'assets/illustrations/devices/DevicePhoneIllustration';
import DeviceComputerIllustration from 'assets/illustrations/devices/DeviceComputerIllustration';

const SettingsDeviceInfoPage = (deviceInfo: DeviceType | undefined): SettingsPageType => ({
	headerTitle: deviceInfo?.name || '',
	headerSubtitle: 'Connecté à votre compte edgar.',
	headerIcon: deviceInfo?.type === 'MOBILE' ? DevicePhoneIllustration : DeviceComputerIllustration,
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
							Dernière connexion le: {new Date(deviceInfo.lastConnectedTime).toLocaleDateString('fr-FR')}{' '}
							à {new Date(deviceInfo.lastConnectedTime).toLocaleTimeString('fr-FR')}
						</Text>
					</HStack>
				)}
			</Skeleton>
			<Skeleton isLoaded={deviceInfo !== undefined && deviceInfo.location !== ''}>
				{deviceInfo && (
					<HStack spacing="12px">
						<Icon as={PinIcon} w="16px" h="16px" />
						<Text>{deviceInfo.location}</Text>
					</HStack>
				)}
			</Skeleton>
		</VStack>
	),
	footerPrimaryButton: (
		<Button w="100%" variant="deleteBordered">
			Déconnecter l’appareil
		</Button>
	),
});

export default SettingsDeviceInfoPage;
