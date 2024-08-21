import { useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/dashboard/devices/DeviceType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';
import DeviceCard from 'components/settingsModals/DeviceCard';

const SettingsAccount2FAEdgarEnablePage = (onPrevious: () => void, onNext: () => void): SettingsPageType => {
	const [selectedDevice, setSelectedDevice] = useState('');

	const devices: DeviceType[] = [
		{
			id: '1',
			name: 'iPhone de John',
			location: 'Paris, France',
			lastConnectedTime: 1723707006000,
			type: 'MOBILE',
		},
		{
			id: '2',
			name: 'iPhone de John 2',
			location: 'Paris, France',
			lastConnectedTime: Date.now() - 1000 * 60 * 60 * 24 * 30,
			type: 'DESKTOP',
		},
		{
			id: '3',
			name: 'iPhone de John 3',
			location: 'Paris, France',
			lastConnectedTime: Date.now() - 1000 * 60 * 60 * 24 * 30,
			type: 'MOBILE',
		},
	];

	const onSubmit = () => {
		// TODO: send request to the backend to enable 2FA with edgar + add toast
		setSelectedDevice('');
		onNext();
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
				{devices.map((device, index) => (
					<VStack spacing="8px" key={device.id}>
						{index > 0 && <Box as="span" w="100%" h="2px" bg="blue.100" />}
						<DeviceCard
							device={device}
							hasChevronIcon
							onClick={() => setSelectedDevice((prev) => (prev === device.id ? '' : device.id))}
							isClicked={selectedDevice === device.id}
						/>
					</VStack>
				))}
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
