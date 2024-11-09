import { type Dispatch, type SetStateAction, useEffect } from 'react';
import { Button, useToast } from '@chakra-ui/react';

import Login2faMobile from 'libs/login2faMobile';

import { useAuthContext } from 'contexts/auth';

import type { Login2faPageType } from 'types/app/login-2fa/Login2faPageType';
import type { Login2faModalPageType } from 'types/app/login-2fa/Login2faModalPageType';

const Login2faModalMobileStartPage = ({
	actions,
	selectedPage,
	setSelectedPage,
}: {
	actions: Login2faMobile;
	selectedPage: Login2faModalPageType;
	setSelectedPage: Dispatch<SetStateAction<Login2faModalPageType>>;
}): Login2faPageType => {
	const { email, password, deviceInfos } = useAuthContext();

	const toast = useToast({ duration: 3000, isClosable: true });

	useEffect(() => {
		if (selectedPage !== 'mobileStart') return;
		if (!deviceInfos) {
			toast({ title: "Erreur lors de l'envoi de la notification", status: 'error' });
			return;
		}
		actions.makeReady(deviceInfos.os, deviceInfos.browser, deviceInfos.location);
	}, [selectedPage]);

	return {
		headerTitle: 'Vérifier votre identité',
		headerSubtitle:
			'Cliquer sur le bouton lorsque vous êtes prêt à vous authentifier avec l’application mobile edgar',
		footerPrimaryButton: (
			<Button
				w="100%"
				onClick={() => {
					const response = actions.askMobileConnection(email, password);
					if (!response.success)
						toast({ title: "Erreur lors de l'envoi de la notification", status: 'error' });
					else setSelectedPage('mobileWaiting');
				}}
			>
				Utiliser l’application edgar
			</Button>
		),
	};
};

export default Login2faModalMobileStartPage;
