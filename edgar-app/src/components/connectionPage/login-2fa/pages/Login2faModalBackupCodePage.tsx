import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Text, useToast, VStack } from '@chakra-ui/react';

import { useAuthContext } from 'contexts/auth';

import { useLoginWithBackupCodesMutation } from 'services/request/login';

import type { Login2faPageType } from 'types/login-2fa/Login2faPageType';

const Login2faModalBackupCodePage = ({ onClose }: { onClose: () => void }): Login2faPageType => {
	const [triggerLoginWithBackupCodesMutation] = useLoginWithBackupCodesMutation();
	const [backupCodeValue, setBackupCodeValue] = useState('');

	const { email, password } = useAuthContext();

	const toast = useToast({ duration: 3000, isClosable: true });

	const router = useRouter();

	const onSubmit = () => {
		if (backupCodeValue.length !== 8)
			toast({
				title: 'Code invalide',
				status: 'error',
			});
		else
			triggerLoginWithBackupCodesMutation({ email, password, code: backupCodeValue })
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
			<VStack spacing="8px" align="start" w="100%">
				<Text>Code de sauvegarde</Text>
				<Input
					maxLength={8}
					placeholder="XXXXXXXX"
					w="100%"
					onChange={(e) => setBackupCodeValue(e.target.value)}
				/>
			</VStack>
		),
		footerPrimaryButton: (
			<Button w="100%" onClick={onSubmit}>
				Utiliser le code de sauvegarde
			</Button>
		),
	};
};

export default Login2faModalBackupCodePage;
