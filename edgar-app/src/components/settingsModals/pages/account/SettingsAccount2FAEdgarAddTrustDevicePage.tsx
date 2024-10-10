import { useEffect, useState } from 'react';
import { Box, Button, Skeleton, Text, useToast, VStack } from '@chakra-ui/react';

import DeviceCard from 'components/settingsModals/DeviceCard';
import Pagination from 'components/navigation/Pagination';

import { useAddTrustedDeviceMutation } from 'services/request/2fa';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/dashboard/devices/DeviceType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

const SettingsAccount2FAEdgarAddTrustDevicePage = (
	devices: DeviceType[] | undefined,
	trustedDevices: DeviceType[] | undefined,
	isLoadingDevices: boolean,
	isLoadingTrustedDevices: boolean,
	onPrevious: () => void,
): SettingsPageType => {
	const [triggerAddTrustedDevice] = useAddTrustedDeviceMutation();

	const [selectedDeviceId, setSelectedDeviceId] = useState('');
	const [pageIndex, setPageIndex] = useState(1);
	const [availableDevices, setAvailableDevices] = useState<DeviceType[]>([]);

	const toast = useToast({ duration: 3000, isClosable: true });

	useEffect(() => {
		if (devices) {
			if (!trustedDevices) setAvailableDevices(devices);
			else
				setAvailableDevices(
					devices.filter((device) => trustedDevices.every((trustedDevice) => trustedDevice.id !== device.id)),
				);
		}
	}, [devices, trustedDevices]);

	const onSubmit = () => {
		if (selectedDeviceId === '')
			toast({
				title: 'Veuillez sélectionner un appareil',
				status: 'error',
			});
		else
			triggerAddTrustedDevice(selectedDeviceId)
				.unwrap()
				.then(() => {
					toast({
						title: 'L’appareil a bien été ajouté',
						status: 'success',
					});
					setSelectedDeviceId('');
					onPrevious();
				})
				.catch(() => {
					toast({
						title: 'Une erreur est survenue',
						status: 'error',
					});
				});
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
				<Skeleton isLoaded={devices !== undefined && !isLoadingDevices && !isLoadingTrustedDevices} w="100%">
					{availableDevices.length > 0 ? (
						<>
							{paginationHandler(availableDevices, pageIndex, 5).map((device, index) => (
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
