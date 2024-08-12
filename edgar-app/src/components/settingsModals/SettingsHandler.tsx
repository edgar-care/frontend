import { useState } from 'react';

import ModalHandler from 'components/modals/ModalHandler';
import SettingsBody from 'components/settingsModals/SettingsBody';
import ModalPages from 'components/settingsModals/ModalPages';

const SettingsHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [selectedPageStack, setSelectedPageStack] = useState<string[]>(['settings']);

	const modalPages = ModalPages({ selectedPageStack, setSelectedPageStack });

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
				) : modalPages[selectedPageStack[selectedPageStack.length - 1]].sections.length > 0 ||
				  modalPages[selectedPageStack[selectedPageStack.length - 1]].hasProfileBanner ? (
					<SettingsBody
						sections={modalPages[selectedPageStack[selectedPageStack.length - 1]].sections}
						hasProfileBanner={modalPages[selectedPageStack[selectedPageStack.length - 1]].hasProfileBanner}
						id={`${selectedPageStack[selectedPageStack.length - 1]}Modal`}
						setSelectedPageStack={setSelectedPageStack}
					/>
				) : undefined
			}
			footerPrimaryButton={modalPages[selectedPageStack[selectedPageStack.length - 1]].footerPrimaryButton}
			footerSecondaryButton={modalPages[selectedPageStack[selectedPageStack.length - 1]].footerSecondaryButton}
		/>
	);
};
export default SettingsHandler;
