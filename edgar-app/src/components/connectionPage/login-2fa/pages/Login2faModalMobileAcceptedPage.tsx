import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HStack, Icon, Text, useToast } from '@chakra-ui/react';

import { useAuthContext } from 'contexts/auth';

import { useLoginWithMobileMutation } from 'services/request/login';

import type { Login2faModalPageType } from 'types/login-2fa/Login2faModalPageType';
import type { Login2faPageType } from 'types/login-2fa/Login2faPageType';

import CheckIllustration from 'assets/illustrations/CheckIllustration';

const Login2faModalMobileAcceptedPage = ({
	code,
	selectedPage,
	onClose,
}: {
	code: string;
	selectedPage: Login2faModalPageType;
	onClose: () => void;
}): Login2faPageType => {
	const [triggerLoginWithMobileMutation] = useLoginWithMobileMutation();
	const { email, password } = useAuthContext();

	const toast = useToast({ duration: 3000, isClosable: true });

	const router = useRouter();

	useEffect(() => {
		if (selectedPage !== 'mobileAccepted') return;
		if (!code) {
			toast({
				title: 'Une erreur est survenue lors de la vérification de votre identité.',
				status: 'error',
			});
		} else {
			triggerLoginWithMobileMutation({ email, password, code })
				.unwrap()
				.then((token) => {
					localStorage.setItem('token', token);
					onClose();
					router.push('/dashboard');
				})
				.catch(() => {
					toast({
						title: 'Code invalide',
						status: 'error',
					});
				});
		}
	}, [selectedPage, code]);

	return {
		headerTitle: 'Vérifier votre identité',
		headerSubtitle:
			'Une notification de connexion vient d’être envoyée sur vos appareils de confiance. Accepter la connexion sur la notification pour vérifier votre identité.',
		bodyContent: (
			<HStack w="100%" spacing="16px">
				<Icon as={CheckIllustration} w="40px" h="40px" />
				<Text size="lg">Identité vérifiée</Text>
			</HStack>
		),
	};
};

export default Login2faModalMobileAcceptedPage;
