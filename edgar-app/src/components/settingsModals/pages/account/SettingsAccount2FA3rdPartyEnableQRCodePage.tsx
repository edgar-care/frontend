import { Button, Skeleton, Text, VStack } from '@chakra-ui/react';
import QRCode from 'react-qr-code';

import { useGet2fa3rdPartyCredentialsQuery } from 'services/request/2fa';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const SettingsAccount2FA3rdPartyEnableQRCodePage = (onCancel: () => void, onNext: () => void): SettingsPageType => {
	const { data: credentials, isLoading } = useGet2fa3rdPartyCredentialsQuery();

	return {
		headerTitle: 'Activer la double authentification avec une application tierce ?',
		headerSubtitle: 'Ouvrer votre application de double authentification et scanner le QR code ci-dessous.',
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		bodyContent: (
			<VStack w="100%" spacing="16px">
				<Skeleton isLoaded={!isLoading && credentials !== undefined && credentials.url !== ''}>
					<QRCode value={credentials?.url || ''} width={250} height={250} />
				</Skeleton>
				<VStack spacing="0px">
					<Text>Ou renseigner le code manuellement:</Text>
					<Skeleton isLoaded={!isLoading && credentials !== undefined && credentials.secret !== ''}>
						<Text>{credentials?.secret || 'XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX'}</Text>
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
