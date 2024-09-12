import { useState } from 'react';
import { Box, Button, Skeleton, useToast, VStack } from '@chakra-ui/react';

import DeviceCard from 'components/settingsModals/DeviceCard';

import { useEnable2faWithMobileAppMutation } from 'services/request/2fa';

import Pagination from 'components/navigation/Pagination';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/app/dashboard/devices/DeviceType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';
import paginationHandler from 'utils/navigation/paginationHandler';

const SettingsAccount2FAEdgarEnablePage = (
	devices: DeviceType[] | undefined,
	isLoading: boolean,
	onPrevious: () => void,
	onNext: () => void,
): SettingsPageType => {
	const [triggerEnable2faWithMobileApp] = useEnable2faWithMobileAppMutation();

	const [selectedDeviceId, setSelectedDeviceId] = useState('');
	const [pageIndex, setPageIndex] = useState(1);

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = () => {
		if (!selectedDeviceId)
			toast({
				title: 'Veuillez sélectionner un appareil',
				status: 'error',
			});
		else
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
					{paginationHandler(devices || [], pageIndex, 5).map((device, index) => (
						<VStack spacing="8px" key={device.id}>
							{index > 0 && <Box as="span" w="100%" h="2px" bg="blue.100" />}
							<DeviceCard
								device={device}
								hasChevronIcon
								onClick={() => setSelectedDeviceId((prev) => (prev === device.id ? '' : device.id))}
								isClicked={selectedDeviceId === device.id}
							/>
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
