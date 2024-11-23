import { useState } from 'react';

import ModalHandler from 'components/modals/ModalHandler';
import Login2faModalPages from 'components/app/connectionPage/login-2fa/Login2faModalPages';

import type { Login2faModalPageType } from 'types/app/login-2fa/Login2faModalPageType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const Login2faModals = ({
	isOpen,
	onClose,
	openedPage,
}: {
	isOpen: boolean;
	onClose: () => void;
	openedPage: Login2faModalPageType;
}): JSX.Element => {
	const [selectedPage, setSelectedPage] = useState<Login2faModalPageType>(openedPage);

	const modalPages = Login2faModalPages({ onClose, selectedPage, setSelectedPage });

	if (!modalPages[selectedPage as Login2faModalPageType]) {
		console.error('Invalid selectedPageIndex');
		setSelectedPage(openedPage);
		onClose();
		return <></>;
	}

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="xl"
			headerTitle={modalPages[selectedPage as Login2faModalPageType].headerTitle}
			headerSubtitle={modalPages[selectedPage as Login2faModalPageType].headerSubtitle}
			headerIcon={ShieldIllustration}
			bodyContent={modalPages[selectedPage as Login2faModalPageType].bodyContent}
			footerPrimaryButton={modalPages[selectedPage as Login2faModalPageType].footerPrimaryButton}
			footerSecondaryButton={modalPages[selectedPage as Login2faModalPageType].footerSecondaryButton}
		/>
	);
};

export default Login2faModals;
