import { useState } from 'react';
import { Box, Skeleton, Text, VStack } from '@chakra-ui/react';

import DeviceCard from 'components/settingsModals/DeviceCard';
import Pagination from 'components/navigation/Pagination';

import DeviceComputerIllustration from 'assets/illustrations/devices/DeviceComputerIllustration';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/dashboard/devices/DeviceType';

import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

const SettingsDevicesPage = (devices: DeviceType[] | undefined, isLoadingDevices: boolean): SettingsPageType => {
	const [selectedDeviceId, setSelectedDeviceId] = useState('');
	const [pageIndex, setPageIndex] = useState(1);

	return {
		headerTitle: 'Appareils connectés',
		headerSubtitle: 'Consulter et gérer tous les appareils connectés à votre compte edgar.',
		headerIcon: DeviceComputerIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		bodyContent: (
			<VStack w="100%" p="8px" borderRadius="16px" border="2px solid" borderColor="blue.100">
				<Skeleton isLoaded={devices !== undefined && !isLoadingDevices} w="100%">
					{devices ? (
						<>
							{paginationHandler(devices, pageIndex, 5).map((device, index) => (
								<VStack spacing="8px" key={device.id} w="100%">
									{index > 0 && <Box as="span" w="100%" h="2px" bg="blue.100" />}
									<DeviceCard
										device={device}
										hasChevronIcon
										onClick={() =>
											setSelectedDeviceId((prev) => (prev === device.id ? '' : device.id))
										}
										isClicked={selectedDeviceId === device.id}
									/>
								</VStack>
							))}
						</>
					) : (
						<Text>Aucun appareil disponible</Text>
					)}
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
	};
};

export default SettingsDevicesPage;
