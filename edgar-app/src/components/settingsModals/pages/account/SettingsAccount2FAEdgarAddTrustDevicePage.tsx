import { useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

import DeviceCard from 'components/settingsModals/DeviceCard';
import Pagination from 'components/navigation/Pagination';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/dashboard/devices/DeviceType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

const SettingsAccount2FAEdgarAddTrustDevicePage = (onPrevious: () => void): SettingsPageType => {
	const [selectedDevice, setSelectedDevice] = useState('');
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

	const onSubmit = () => {
		// TODO: send request to the backend to add the trust device + add toast
		setSelectedDevice('');
		onPrevious();
	};

	return {
		headerTitle: 'Ajouter un appareil de confiance',
		headerSubtitle: 'Sélectionner un appareil ci-dessous, afin d’ajouter la double authentification sur celui-ci.',
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		bodyContent: (
			<VStack w="100%" p="8px" borderRadius="16px" border="2px solid" borderColor="blue.100">
				{paginationHandler(devices, pageIndex, 5).map((device, index) => (
					<VStack spacing="8px" key={device.id} w="100%">
						{index > 0 && <Box as="span" w="100%" h="2px" bg="blue.100" />}
						<DeviceCard
							device={device}
							hasChevronIcon
							onClick={() => setSelectedDevice((prev) => (prev === device.id ? '' : device.id))}
							isClicked={selectedDevice === device.id}
						/>
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
			<Button w="100%" onClick={onSubmit}>
				Ajouter l’appareil
			</Button>
		),
		footerSecondaryButton: (
			<Button w="100%" variant="secondary" onClick={onPrevious}>
				Annuler
			</Button>
		),
	};
};

export default SettingsAccount2FAEdgarAddTrustDevicePage;
