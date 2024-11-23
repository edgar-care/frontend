import { type Dispatch, type SetStateAction, useEffect } from 'react';

import Login2faModalEmailPage from 'components/app/connectionPage/login-2fa/pages/Login2faModalEmailPage';
import Login2faModalAuthenticatorPage from 'components/app/connectionPage/login-2fa/pages/Login2faModalAuthenticatorPage';
import Login2faModalBackupCodePage from 'components/app/connectionPage/login-2fa/pages/Login2faModalBackupCodePage';
import Login2faModalMobileStartPage from 'components/app/connectionPage/login-2fa/pages/Login2faModalMobileStartPage';
import Login2faModalMobileWaitingPage from 'components/app/connectionPage/login-2fa/pages/Login2faModalMobileWaitingPage';
import Login2faModalMobileAcceptedPage from 'components/app/connectionPage/login-2fa/pages/Login2faModalMobileAcceptedPage';
import Login2faModalMobileRefusedPage from 'components/app/connectionPage/login-2fa/pages/Login2faModalMobileRefusedPage';

import { useLogin2faMobileContext } from 'contexts/login2faMobile';

import type { Login2faModalPageType } from 'types/app/login-2fa/Login2faModalPageType';
import type { Login2faPageType } from 'types/app/login-2fa/Login2faPageType';

const Login2faModalPages = ({
	onClose,
	selectedPage,
	setSelectedPage,
}: {
	onClose: () => void;
	selectedPage: Login2faModalPageType;
	setSelectedPage: Dispatch<SetStateAction<Login2faModalPageType>>;
}): Record<Login2faModalPageType, Login2faPageType> => {
	const { code, response, actions } = useLogin2faMobileContext();

	useEffect(() => {
		if (selectedPage !== 'mobileWaiting') return;
		if (response === true) setSelectedPage('mobileAccepted');
		if (response === false) setSelectedPage('mobileRefused');
	}, [response]);

	return {
		email: Login2faModalEmailPage({ onClose, selectedPage }),
		authenticator: Login2faModalAuthenticatorPage({ onClose }),
		mobileStart: Login2faModalMobileStartPage({ actions, selectedPage, setSelectedPage }),
		mobileWaiting: Login2faModalMobileWaitingPage({ setSelectedPage }),
		mobileAccepted: Login2faModalMobileAcceptedPage({ code, selectedPage, onClose }),
		mobileRefused: Login2faModalMobileRefusedPage({ actions, setSelectedPage }),
		backupCode: Login2faModalBackupCodePage({ onClose }),
	};
};

export default Login2faModalPages;
