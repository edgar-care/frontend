import { useState } from 'react';

import ModalHandler from 'components/modals/ModalHandler';
import SettingsBody from 'components/navigation/settingsModals/SettingsBody';

import settingsPage from 'components/navigation/settingsModals/pages/settingsPage';
import settingsAccountPage from 'components/navigation/settingsModals/pages/settingsAccountPage';

import { useAuthContext } from 'contexts/auth';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import settingsAccount2FAPage from 'components/navigation/settingsModals/pages/settingsAccount2FAPage';

const SettingsHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const auth = useAuthContext();

	const [selectedPageStack, setSelectedPageStack] = useState<string[]>(['settings']);

	// TODO: update 2fa and backup codes values
	const modalPages: { [key: string]: SettingsPageType } = {
		settings: settingsPage,
		settingsAccount: settingsAccountPage(auth.getEmail(), false, false),
		settingsAccount2fa: settingsAccount2FAPage(false, false, false),
	};

	if (!modalPages[selectedPageStack[selectedPageStack.length - 1]]) {
		console.error('Invalid selectedPageIndex');
		setSelectedPageStack(['settings']);
		return <></>;
	}

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={() => {
				onClose();
				setSelectedPageStack(['settings']);
			}}
			onReturn={() => setSelectedPageStack(selectedPageStack.slice(0, -1))}
			size="3xl"
			id={`${selectedPageStack[selectedPageStack.length - 1]}Modal`}
			headerTitle={modalPages[selectedPageStack[selectedPageStack.length - 1]].headerTitle}
			headerSubtitle={modalPages[selectedPageStack[selectedPageStack.length - 1]].headerSubtitle}
			headerIcon={modalPages[selectedPageStack[selectedPageStack.length - 1]].headerIcon}
			hasReturnButton={modalPages[selectedPageStack[selectedPageStack.length - 1]].hasReturnButton}
			bodyContent={
				modalPages[selectedPageStack[selectedPageStack.length - 1]].bodyContent ? (
					modalPages[selectedPageStack[selectedPageStack.length - 1]].bodyContent
				) : (
					<SettingsBody
						sections={modalPages[selectedPageStack[selectedPageStack.length - 1]].sections}
						hasProfileBanner={modalPages[selectedPageStack[selectedPageStack.length - 1]].hasProfileBanner}
						id={`${selectedPageStack[selectedPageStack.length - 1]}Modal`}
						setSelectedPageStack={setSelectedPageStack}
					/>
				)
			}
			footerPrimaryButton={modalPages[selectedPageStack[selectedPageStack.length - 1]].footerPrimaryButton}
			footerSecondaryButton={modalPages[selectedPageStack[selectedPageStack.length - 1]].footerSecondaryButton}
		/>
	);
};
export default SettingsHandler;
