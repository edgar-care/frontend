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

import { useAuthContext } from 'contexts/auth';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import SettingsAccount2FAEmailDisablePage from 'components/settingsModals/pages/SettingsAccount2FAEmailDisablePage';
import SettingsAccount2FA3rdPartyDisablePage from 'components/settingsModals/pages/SettingsAccount2FA3rdPartyDisablePage';
import SettingsAccount2FAEdgarDisablePage from 'components/settingsModals/pages/SettingsAccount2FAEdgarDisablePage';

const ModalPages = ({
	selectedPageStack,
	setSelectedPageStack,
}: {
	selectedPageStack: string[];
	setSelectedPageStack: Dispatch<SetStateAction<string[]>>;
}): { [key: string]: SettingsPageType } => {
	const auth = useAuthContext();

	// TODO: get this value from the backend
	const isBackupCodeGenerated = true;

	const onPreviousPage = () => setSelectedPageStack(selectedPageStack.slice(0, -1));
	const onNextPage = (pageIndex: string) => setSelectedPageStack((prev) => [...prev, pageIndex]);

	return {
		settings: settingsPage,
		settingsAccount: settingsAccountPage(auth.getEmail(), false, false),
		settingsAccount2fa: settingsAccount2FAPage(true, true, true),
		settingsAccount2faEmailEnable: SettingsAccount2FAEmailEnablePage(auth.getEmail(), onPreviousPage),
		settingsAccount2faEmailDisable: SettingsAccount2FAEmailDisablePage(auth.getEmail(), onPreviousPage),
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
		settingsAccount2fa3rdPartyDisable: SettingsAccount2FA3rdPartyDisablePage(onPreviousPage),
		settingsAccount2faEdgarEnable: SettingsAccount2FAEdgarEnablePage(onPreviousPage, () =>
			isBackupCodeGenerated ? onPreviousPage() : onNextPage('settingsAccount2faEdgarEnableBackupCodes'),
		),
		settingsAccount2faEdgarEnableBackupCodes: SettingsAccount2FAEdgarEnableBackupCodePage(selectedPageStack, () =>
			setSelectedPageStack((prev) => prev.slice(0, -2)),
		),
		settingsAccount2faEdgarDisable: SettingsAccount2FAEdgarDisablePage(onPreviousPage),
	};
};

export default ModalPages;
