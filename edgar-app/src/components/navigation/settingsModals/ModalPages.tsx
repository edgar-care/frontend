import { Dispatch, SetStateAction } from 'react';

import settingsPage from 'components/navigation/settingsModals/pages/settingsPage';
import settingsAccountPage from 'components/navigation/settingsModals/pages/settingsAccountPage';
import settingsAccount2FAPage from 'components/navigation/settingsModals/pages/settingsAccount2FAPage';
import SettingsAccount2FAEmailEnablePage from 'components/navigation/settingsModals/pages/SettingsAccount2FAEmailEnablePage';
import SettingsAccount2FA3rdPartyEnableQRCodePage from 'components/navigation/settingsModals/pages/SettingsAccount2FA3rdPartyEnableQRCodePage';
import SettingsAccount2FA3rdPartyEnableInputPage from 'components/navigation/settingsModals/pages/SettingsAccount2FA3rdPartyEnableInputPage';
import SettingsAccount2FA3rdPartyEnableBackupCodesPage from 'components/navigation/settingsModals/pages/SettingsAccount2FA3rdPartyEnableBackupCodesPage';
import SettingsAccount2FAEdgarEnablePage from 'components/navigation/settingsModals/pages/SettingsAccount2FAEdgarEnablePage';

import { useAuthContext } from 'contexts/auth';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

const ModalPages = ({
	selectedPageStack,
	setSelectedPageStack,
}: {
	selectedPageStack: string[];
	setSelectedPageStack: Dispatch<SetStateAction<string[]>>;
}): { [key: string]: SettingsPageType } => {
	const auth = useAuthContext();

	const onPreviousPage = () => setSelectedPageStack(selectedPageStack.slice(0, -1));
	const onNextPage = (pageIndex: string) => setSelectedPageStack((prev) => [...prev, pageIndex]);

	return {
		settings: settingsPage,
		settingsAccount: settingsAccountPage(auth.getEmail(), false, false),
		settingsAccount2fa: settingsAccount2FAPage(false, false, false),
		settingsAccount2faEmailEnable: SettingsAccount2FAEmailEnablePage(auth.getEmail(), onPreviousPage),
		settingsAccount2fa3rdPartyEnableQRCode: SettingsAccount2FA3rdPartyEnableQRCodePage(onPreviousPage, () =>
			onNextPage('settingsAccount2fa3rdPartyEnableInput'),
		),
		settingsAccount2fa3rdPartyEnableInput: SettingsAccount2FA3rdPartyEnableInputPage(onPreviousPage, () =>
			onNextPage('settingsAccount2fa3rdPartyEnableBackupCodes'),
		),
		settingsAccount2fa3rdPartyEnableBackupCodes: SettingsAccount2FA3rdPartyEnableBackupCodesPage(
			selectedPageStack,
			() => setSelectedPageStack((prev) => prev.slice(0, -3)),
		),
		settingsAccount2faEdgarEnable: SettingsAccount2FAEdgarEnablePage(onPreviousPage, () =>
			onNextPage('settingsAccount2faEdgarEnableBackupCodes'),
		),
	};
};

export default ModalPages;
