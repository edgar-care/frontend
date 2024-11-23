import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, HStack, PinInput, PinInputField, useToast } from '@chakra-ui/react';

import { useAuthContext } from 'contexts/auth';

import { useLoginWithAuthenticatorMutation } from 'services/request/login';

import type { Login2faPageType } from 'types/app/login-2fa/Login2faPageType';

const Login2faModalAuthenticatorPage = ({ onClose }: { onClose: () => void }): Login2faPageType => {
	const [triggerLoginWithAuthenticatorMutation] = useLoginWithAuthenticatorMutation();
	const [pinValue, setPinValue] = useState('');

	const { email, password } = useAuthContext();

	const toast = useToast({ duration: 3000, isClosable: true });

	const router = useRouter();

	const onSubmit = () => {
		if (pinValue.length !== 6)
			toast({
				title: 'Code invalide',
				status: 'error',
			});
		else
			triggerLoginWithAuthenticatorMutation({ email, password, code: pinValue })
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
		headerSubtitle: 'Ouvrer votre application d’authentification et renseigner le code à 6 chiffres fournis.',
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

export default Login2faModalAuthenticatorPage;
