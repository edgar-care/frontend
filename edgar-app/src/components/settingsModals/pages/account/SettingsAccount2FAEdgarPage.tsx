import { useState } from 'react';
import { Box, Button, Skeleton, VStack } from '@chakra-ui/react';

import DeviceCard from 'components/settingsModals/DeviceCard';
import Pagination from 'components/navigation/Pagination';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/dashboard/devices/DeviceType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

const SettingsAccount2FAEdgarPage = (
	devices: DeviceType[] | undefined,
	isLoading: boolean,
	addTrustDevice: () => void,
	disabled2FA: () => void,
	displayDeviceInfo: (device: DeviceType) => void,
): SettingsPageType => {
	const [pageIndex, setPageIndex] = useState(1);

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
				<Skeleton isLoaded={devices !== undefined && !isLoading} w="100%">
					{paginationHandler(devices || [], pageIndex, 5).map((device, index) => (
						<VStack spacing="8px" key={device.id} w="100%">
							{index > 0 && <Box as="span" w="100%" h="2px" bg="blue.100" />}
							<DeviceCard device={device} hasChevronIcon onClick={() => displayDeviceInfo(device)} />
						</VStack>
					))}
				</Skeleton>
				{devices && devices.length > 5 && (
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
