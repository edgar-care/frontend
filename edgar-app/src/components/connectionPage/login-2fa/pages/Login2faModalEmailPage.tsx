import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, HStack, PinInput, PinInputField, useToast } from '@chakra-ui/react';

import { useAuthContext } from 'contexts/auth';

import { useLoginWithEmailMutation, useSendLogin2faEmailMutation } from 'services/request/login';

import type { Login2faPageType } from 'types/login-2fa/Login2faPageType';
import type { Login2faModalPageType } from 'types/login-2fa/Login2faModalPageType';

const Login2faModalEmailPage = ({
	onClose,
	selectedPage,
}: {
	onClose: () => void;
	selectedPage: Login2faModalPageType;
}): Login2faPageType => {
	const [triggerSendLogin2faEmailMutation] = useSendLogin2faEmailMutation();
	const [triggerLoginWithEmailMutation] = useLoginWithEmailMutation();
	const [pinValue, setPinValue] = useState('');

	const { email, password } = useAuthContext();

	const toast = useToast({ duration: 3000, isClosable: true });

	const router = useRouter();

	useEffect(() => {
		if (selectedPage !== 'email') return;
		triggerSendLogin2faEmailMutation(email)
			.unwrap()
			.catch(() => toast({ title: 'Erreur lors de l’envoi de l’email', status: 'error' }));
	}, [selectedPage]);

	const onSubmit = () => {
		if (pinValue.length !== 6)
			toast({
				title: 'Code invalide',
				status: 'error',
			});
		else
			triggerLoginWithEmailMutation({ email, password, code: pinValue })
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
	};

	return {
		headerTitle: 'Vérifier votre identité',
		headerSubtitle: 'Renseigner le code que vous avez reçu dans l’email que nous venons de vous envoyer.',
		bodyContent: (
			<HStack w="100%" justify="center">
				<PinInput otp onChange={(e) => setPinValue(e)}>
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
				</PinInput>
			</HStack>
		),
		footerPrimaryButton: (
			<Button w="100%" onClick={onSubmit}>
				Valider le code
			</Button>
		),
	};
};

export default Login2faModalEmailPage;
