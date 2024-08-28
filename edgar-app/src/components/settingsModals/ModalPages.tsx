import { Dispatch, SetStateAction } from 'react';

import settingsPage from 'components/settingsModals/pages/settingsPage';
import settingsAccountPage from 'components/settingsModals/pages/settingsAccountPage';
import settingsAccount2FAPage from 'components/settingsModals/pages/settingsAccount2FAPage';
import SettingsAccount2FAEmailEnablePage from 'components/settingsModals/pages/SettingsAccount2FAEmailEnablePage';
import SettingsAccount2FA3rdPartyEnableQRCodePage from 'components/settingsModals/pages/SettingsAccount2FA3rdPartyEnableQRCodePage';
import SettingsAccount2FA3rdPartyEnableInputPage from 'components/settingsModals/pages/SettingsAccount2FA3rdPartyEnableInputPage';
import SettingsAccount2FA3rdPartyEnableBackupCodesPage from 'components/settingsModals/pages/SettingsAccount2FA3rdPartyEnableBackupCodesPage';
import SettingsAccount2FAEdgarEnablePage from 'components/settingsModals/pages/SettingsAccount2FAEdgarEnablePage';
import SettingsAccount2FAEdgarEnableBackupCodePage from 'components/settingsModals/pages/SettingsAccount2FAEdgarEnableBackupCodePage';
import SettingsAccount2FAEmailEnableBackupCodesPage from 'components/settingsModals/pages/SettingsAccount2FAEmailEnableBackupCodesPage';

import { useGet2faEnabledMethodsQuery } from 'services/request/2fa';

import { useAuthContext } from 'contexts/auth';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

const ModalPages = ({
	selectedPageStack,
	setSelectedPageStack,
}: {
	selectedPageStack: string[];
	setSelectedPageStack: Dispatch<SetStateAction<string[]>>;
}): { [key: string]: SettingsPageType } => {
	const { data: enabled2faMethods } = useGet2faEnabledMethodsQuery();
	const auth = useAuthContext();

	const isBackupCodeGenerated = enabled2faMethods?.isBackupCodeGenerated || false;
	const isAuthenticationEnabled = (enabled2faMethods?.enabledMethods.length || 0) > 0;

	const onPreviousPage = () => setSelectedPageStack(selectedPageStack.slice(0, -1));
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
			setSelectedPageStack((prev) => prev.slice(0, -2)),
		),
		settingsAccount2fa3rdPartyEnableQRCode: SettingsAccount2FA3rdPartyEnableQRCodePage(
			selectedPageStack,
			onPreviousPage,
			() => onNextPage('settingsAccount2fa3rdPartyEnableInput'),
		),
		settingsAccount2fa3rdPartyEnableInput: SettingsAccount2FA3rdPartyEnableInputPage(onPreviousPage, () =>
			isBackupCodeGenerated
				? setSelectedPageStack((prev) => prev.slice(0, -2))
				: onNextPage('settingsAccount2fa3rdPartyEnableBackupCodes'),
		),
		settingsAccount2fa3rdPartyEnableBackupCodes: SettingsAccount2FA3rdPartyEnableBackupCodesPage(
			selectedPageStack,
			() => setSelectedPageStack((prev) => prev.slice(0, -3)),
		),
		settingsAccount2faEdgarEnable: SettingsAccount2FAEdgarEnablePage(onPreviousPage, () =>
			isBackupCodeGenerated ? onPreviousPage() : onNextPage('settingsAccount2faEdgarEnableBackupCodes'),
		),
		settingsAccount2faEdgarEnableBackupCodes: SettingsAccount2FAEdgarEnableBackupCodePage(selectedPageStack, () =>
			setSelectedPageStack((prev) => prev.slice(0, -2)),
		),
	};
};

export default ModalPages;
