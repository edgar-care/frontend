import { type Dispatch, type SetStateAction } from 'react';
import { Button, HStack, Icon, Text, useToast } from '@chakra-ui/react';

import Login2faMobile from 'libs/login2faMobile';

import { useAuthContext } from 'contexts/auth';

import type { Login2faPageType } from 'types/login-2fa/Login2faPageType';
import type { Login2faModalPageType } from 'types/login-2fa/Login2faModalPageType';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

const Login2faModalMobileRefusedPage = ({
	actions,
	setSelectedPage,
}: {
	actions: Login2faMobile;
	setSelectedPage: Dispatch<SetStateAction<Login2faModalPageType>>;
}): Login2faPageType => {
	const { email, password } = useAuthContext();

	const toast = useToast({ duration: 3000, isClosable: true });

	return {
		headerTitle: 'Vérifier votre identité',
		headerSubtitle:
			'Nous n’avons pas pû vérifier votre identité. Vérifier votre identité en renvoyant une notification de connexion ?',
		bodyContent: (
			<HStack w="100%" spacing="16px">
				<Icon as={DeleteCrossIllustration} w="40px" h="40px" />
				<Text size="lg">Impossible de vérifier votre identité</Text>
			</HStack>
		),
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
				Renvoyer une notification
			</Button>
		),
		footerSecondaryButton: (
			<Button variant="secondary" w="100%" onClick={() => setSelectedPage('mobileStart')}>
				Annuler
			</Button>
		),
	};
};

export default Login2faModalMobileRefusedPage;
