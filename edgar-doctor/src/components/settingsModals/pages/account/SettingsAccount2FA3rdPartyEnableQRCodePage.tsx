import { useEffect, useState } from 'react';
import { Button, Skeleton, Text, useToast, VStack } from '@chakra-ui/react';
import QRCode from 'react-qr-code';

import { useGenerate2fa3rdPartyCredentialsMutation } from 'services/request/2fa';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { ThirdPartyCredentials } from 'types/app/dashboard/2fa/thirdPartyCredentialsType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const SettingsAccount2FA3rdPartyEnableQRCodePage = (
	selectedPageStack: string[],
	onCancel: () => void,
	onNext: () => void,
): SettingsPageType => {
	const [thirdPartyCredentials, setThirdPartyCredentials] = useState<ThirdPartyCredentials | undefined>(undefined);
	const [triggerGenerate2fa3rdPartyCredentials] = useGenerate2fa3rdPartyCredentialsMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	useEffect(() => {
		if (selectedPageStack[selectedPageStack.length - 1] !== 'settingsAccount2fa3rdPartyEnableQRCode') return;
		triggerGenerate2fa3rdPartyCredentials()
			.unwrap()
			.then((res) => setThirdPartyCredentials(res))
			.catch(() => toast({ title: 'Erreur lors de la génération des codes de sauvegarde', status: 'error' }));
	}, [selectedPageStack]);

	return {
		headerTitle: 'Activer la double authentification avec une application tierce ?',
		headerSubtitle: 'Ouvrer votre application de double authentification et scanner le QR code ci-dessous.',
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		bodyContent: (
			<VStack w="100%" spacing="16px">
				<Skeleton isLoaded={thirdPartyCredentials !== undefined && thirdPartyCredentials.url !== ''}>
					<QRCode value={thirdPartyCredentials?.url || ''} width={250} height={250} />
				</Skeleton>
				<VStack spacing="0px">
					<Text>Ou renseigner le code manuellement:</Text>
					<Skeleton isLoaded={thirdPartyCredentials !== undefined && thirdPartyCredentials.secret !== ''}>
						<Text>{thirdPartyCredentials?.secret || 'XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX'}</Text>
					</Skeleton>
				</VStack>
			</VStack>
		),
		footerPrimaryButton: (
			<Button w="100%" onClick={onNext}>
				Continuer
			</Button>
		),
		footerSecondaryButton: (
			<Button variant="secondary" w="100%" onClick={() => onCancel()}>
				Annuler
			</Button>
		),
	};
};

export default SettingsAccount2FA3rdPartyEnableQRCodePage;
