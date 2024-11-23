import { type Dispatch, type SetStateAction } from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';

import type { Login2faPageType } from 'types/app/login-2fa/Login2faPageType';
import type { Login2faModalPageType } from 'types/app/login-2fa/Login2faModalPageType';

const Login2faModalMobileWaitingPage = ({
	setSelectedPage,
}: {
	setSelectedPage: Dispatch<SetStateAction<Login2faModalPageType>>;
}): Login2faPageType => ({
	headerTitle: 'Vérifier votre identité',
	headerSubtitle:
		'Une notification de connexion vient d’être envoyée sur vos appareils de confiance. Accepter la connexion sur la notification pour vérifier votre identité.',
	bodyContent: (
		<HStack w="100%" spacing="16px">
			<Text size="lg">Vérification de votre identité en cours</Text>
		</HStack>
	),
	footerPrimaryButton: (
		<Button variant="secondary" w="100%" onClick={() => setSelectedPage('mobileStart')}>
			Annuler
		</Button>
	),
});

export default Login2faModalMobileWaitingPage;
