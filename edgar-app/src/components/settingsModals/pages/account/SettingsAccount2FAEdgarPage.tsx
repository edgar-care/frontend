import { useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

import DeviceCard from 'components/settingsModals/DeviceCard';
import Pagination from 'components/navigation/Pagination';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/dashboard/devices/DeviceType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

const SettingsAccount2FAEdgarPage = (
	addTrustDevice: () => void,
	disabled2FA: () => void,
	displayDeviceInfo: (device: DeviceType) => void,
): SettingsPageType => {
	const [pageIndex, setPageIndex] = useState(1);

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

	return {
		headerTitle: 'Double authentification avec edgar',
		headerSubtitle:
			'Consulter tous les appareils utilisés pour la double authentification avec l’application edgar.',
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		bodyContent: (
			<VStack w="100%" p="8px" borderRadius="16px" border="2px solid" borderColor="blue.100">
				{paginationHandler(devices, pageIndex, 5).map((device, index) => (
					<VStack spacing="8px" key={device.id} w="100%">
						{index > 0 && <Box as="span" w="100%" h="2px" bg="blue.100" />}
						<DeviceCard device={device} hasChevronIcon onClick={() => displayDeviceInfo(device)} />
					</VStack>
				))}
				{devices.length > 5 && (
					<Pagination
						variant="secondary"
						size="small"
						pageIndex={pageIndex}
						maxPageNumbers={countMaxNumberPage(devices, 5)}
						setPageIndex={setPageIndex}
					/>
				)}
			</VStack>
		),
		footerPrimaryButton: (
			<Button w="100%" whiteSpace="nowrap" onClick={() => addTrustDevice()}>
				Ajouter un appareil de confiance
			</Button>
		),
		footerSecondaryButton: (
			<Button variant="deleteBordered" w="100%" onClick={() => disabled2FA()}>
				Désactiver l’authentification
			</Button>
		),
	};
};

export default SettingsAccount2FAEdgarPage;
