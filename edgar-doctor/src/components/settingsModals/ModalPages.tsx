import { Dispatch, SetStateAction, useState } from 'react';

import settingsPage from 'components/settingsModals/pages/settingsPage';
import settingsAccountPage from 'components/settingsModals/pages/account/settingsAccountPage';
import settingsAccount2FAPage from 'components/settingsModals/pages/account/settingsAccount2FAPage';
import SettingsAccount2FAEmailEnablePage from 'components/settingsModals/pages/account/SettingsAccount2FAEmailEnablePage';
import SettingsAccount2FA3rdPartyEnableQRCodePage from 'components/settingsModals/pages/account/SettingsAccount2FA3rdPartyEnableQRCodePage';
import SettingsAccount2FA3rdPartyEnableInputPage from 'components/settingsModals/pages/account/SettingsAccount2FA3rdPartyEnableInputPage';
import SettingsAccount2FA3rdPartyEnableBackupCodesPage from 'components/settingsModals/pages/account/SettingsAccount2FA3rdPartyEnableBackupCodesPage';
import SettingsAccount2FAEdgarEnablePage from 'components/settingsModals/pages/account/SettingsAccount2FAEdgarEnablePage';
import SettingsAccount2FAEdgarEnableBackupCodePage from 'components/settingsModals/pages/account/SettingsAccount2FAEdgarEnableBackupCodePage';
import SettingsAccount2FAEmailEnableBackupCodesPage from 'components/settingsModals/pages/account/SettingsAccount2FAEmailEnableBackupCodesPage';
import SettingsAccount2FAEmailDisablePage from 'components/settingsModals/pages/account/SettingsAccount2FAEmailDisablePage';
import SettingsAccount2FA3rdPartyDisablePage from 'components/settingsModals/pages/account/SettingsAccount2FA3rdPartyDisablePage';
import SettingsAccount2FAEdgarPage from 'components/settingsModals/pages/account/SettingsAccount2FAEdgarPage';
import SettingsDeviceInfoPage from 'components/settingsModals/pages/devices/SettingsDeviceInfoPage';
import SettingsAccount2FAEdgarAddTrustDevicePage from 'components/settingsModals/pages/account/SettingsAccount2FAEdgarAddTrustDevicePage';
import SettingsAccount2FAEdgarDisablePage from 'components/settingsModals/pages/account/SettingsAccount2FAEdgarDisablePage';

import { useGet2faEnabledMethodsQuery, useGetTrustedDevicesQuery } from 'services/request/2fa';
import { useGetConnectedDevicesQuery } from 'services/request/devices';

import { useAuthContext } from 'contexts/auth';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { DeviceType } from 'types/app/dashboard/devices/DeviceType';

const ModalPages = ({
	selectedPageStack,
	setSelectedPageStack,
}: {
	selectedPageStack: string[];
	setSelectedPageStack: Dispatch<SetStateAction<string[]>>;
}): { [key: string]: SettingsPageType } => {
	const { data: enabled2faMethods } = useGet2faEnabledMethodsQuery();
	const { data: devices, isLoading: isLoadingDevices } = useGetConnectedDevicesQuery();
	const { data: trustedDevices, isLoading: isLoadingTrustedDevices } = useGetTrustedDevicesQuery();

	const auth = useAuthContext();

	const [selectedDeviceInfo, setSelectedDeviceInfo] = useState<DeviceType | undefined>(undefined);

	const isBackupCodeGenerated = false;
	const isAuthenticationEnabled = (enabled2faMethods?.enabledMethods.length || 0) > 0;

	const onPreviousPage = () => setSelectedPageStack(selectedPageStack.slice(0, -1));
	const onPreviousOfPage = (nbrOfPage: number) => setSelectedPageStack(selectedPageStack.slice(0, -nbrOfPage));
	const onNextPage = (pageIndex: string) => setSelectedPageStack((prev) => [...prev, pageIndex]);

	return {
		settings: settingsPage,
		settingsAccount: settingsAccountPage(auth.getEmail(), isAuthenticationEnabled, isBackupCodeGenerated),
		settingsAccount2fa: settingsAccount2FAPage(
			enabled2faMethods?.enabledMethods.includes('EMAIL') || false,
			enabled2faMethods?.enabledMethods.includes('AUTHENTIFICATOR') || false,
			enabled2faMethods?.enabledMethods.includes('MOBILE') || false,
		),
		settingsAccount2faEmailEnable: SettingsAccount2FAEmailEnablePage(
			auth.getEmail(),
			onPreviousPage,
			isBackupCodeGenerated ? onPreviousPage : () => onNextPage('settingsAccount2faEmailEnableBackupCodes'),
		),
		settingsAccount2faEmailEnableBackupCodes: SettingsAccount2FAEmailEnableBackupCodesPage(selectedPageStack, () =>
			onPreviousOfPage(2),
		),
		settingsAccount2faEmailDisable: SettingsAccount2FAEmailDisablePage(auth.getEmail(), onPreviousPage),
		settingsAccount2fa3rdPartyEnableQRCode: SettingsAccount2FA3rdPartyEnableQRCodePage(
			selectedPageStack,
			onPreviousPage,
			() => onNextPage('settingsAccount2fa3rdPartyEnableInput'),
		),
		settingsAccount2fa3rdPartyEnableInput: SettingsAccount2FA3rdPartyEnableInputPage(onPreviousPage, () =>
			isBackupCodeGenerated ? onPreviousOfPage(2) : onNextPage('settingsAccount2fa3rdPartyEnableBackupCodes'),
		),
		settingsAccount2fa3rdPartyEnableBackupCodes: SettingsAccount2FA3rdPartyEnableBackupCodesPage(
			selectedPageStack,
			() => onPreviousOfPage(3),
		),
		settingsAccount2fa3rdPartyDisable: SettingsAccount2FA3rdPartyDisablePage(onPreviousPage),
		settingsAccount2faEdgarEnable: SettingsAccount2FAEdgarEnablePage(
			devices,
			isLoadingDevices,
			onPreviousPage,
			() => (isBackupCodeGenerated ? onPreviousPage() : onNextPage('settingsAccount2faEdgarEnableBackupCodes')),
		),
		settingsAccount2faEdgarEnableBackupCodes: SettingsAccount2FAEdgarEnableBackupCodePage(selectedPageStack, () =>
			onPreviousOfPage(2),
		),
		settingsAccount2faEdgar: SettingsAccount2FAEdgarPage(
			trustedDevices,
			isLoadingTrustedDevices,
			() => onNextPage('settingsAccount2faEdgarAddTrustDevice'),
			() => onNextPage('settingsAccount2faEdgarDisable'),
			(device: DeviceType) => {
				setSelectedDeviceInfo(device);
				onNextPage('settingsAccount2faEdgarDeviceInfo');
			},
		),
		settingsAccount2faEdgarDeviceInfo: SettingsDeviceInfoPage(selectedDeviceInfo, () => onPreviousOfPage(1)),
		settingsAccount2faEdgarAddTrustDevice: SettingsAccount2FAEdgarAddTrustDevicePage(
			devices,
			trustedDevices,
			isLoadingDevices,
			isLoadingTrustedDevices,
			onPreviousPage,
		),
		settingsAccount2faEdgarDisable: SettingsAccount2FAEdgarDisablePage(() => onPreviousOfPage(2)),
	};
};

export default ModalPages;
